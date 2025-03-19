import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps'
import { useState } from 'react';
import "../CSS/Markers.css";

export default function Markers({data, filterText}) {
    
    const [selectedLocation , setSelectedLocation] = useState({});
    console.log("filterText: "+filterText);
    
    
    const handleClick = (location) =>{
        setSelectedLocation({...location});
    }
    
    let myArray;
    if(filterText !==""){
        myArray = data.filter((location)=>{

           return location.state.toLowerCase() === filterText.toLowerCase();
        });
      }else{
        myArray = data;
      }



    const markers = myArray.map( (location, i) => (
        <div key={i}> 
       <AdvancedMarker
         onClick={() => handleClick(location)}
         key={location.name}
         position={{lat:location.latitude, lng: location.longitude}}>
       <Pin background={'#FF851B'} glyphColor={'#000'} borderColor={'#000'}/>
       {selectedLocation && selectedLocation.id === location.id && 
       <InfoWindow className='popup' position={{lat:location.latitude, lng: location.longitude}}>
        
         <div className='info'>
             <p><span className='title'>Station:</span> {location.name}</p>
             <p><span className='title'>Site:</span> {location.site}</p>
             <p><span className='title'>Portfolio:</span> {location.portfolio}</p>
         </div>
         
       </InfoWindow>}
       </AdvancedMarker>
       </div>
     ))
            return (
              <>
                {markers}
              </>
            );
          };

