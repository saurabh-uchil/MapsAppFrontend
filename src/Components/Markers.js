import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps'
import { useState } from 'react';
import "../CSS/Markers.css";

export default function Markers({data, filterText}) {
    
    
    const [selectedLocation , setSelectedLocation] = useState({});
    
    const handleClick = (location) =>{
        setSelectedLocation({...location});
    }
    const handleCloseCLick = () =>{
        setSelectedLocation({});
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
       {/* Marker */}
       <AdvancedMarker
         onClick={() => handleClick(location)}
         key={location.name}
         position={{lat:location.latitude, lng: location.longitude}}>
       
       {/* Pin */}
       <Pin background={'#FF851B'} glyphColor={'#000'} borderColor={'#000'}/>
       {selectedLocation && selectedLocation.id === location.id && 
       
       /* Popup */
       <InfoWindow  onCloseClick={handleCloseCLick} className='popup' position={{lat:location.latitude, lng: location.longitude}}>
        
         <div className='info'>
             <p><span className='title'>Station:</span> {location.name}</p>
             <p><span className='title'>Site:</span> {location.site}</p>
             <p><span className='title'>Portfolio:</span> {location.portfolio}</p>
             {location.variables.map((variable, i)=>{
                
                //Getting Measurement 1
                let measurement1 = location.data[0][0];

                //Getting Measurement 2 if exists
                let measurement2 = 0;
                if(location.variables.length  === 2){
                    measurement2 = location.data[0][1];
                }

                return (
                    <div>
                        {i === 0 && <p><span className='title'>{variable.long_name} </span>{measurement1} {variable.unit}</p>}
                        {i === 1 && measurement2 !== 0 && <p><span className='title'>{variable.long_name} </span>{measurement2} {variable.unit}</p>}
                    </div>);
             })}
             <p><span className='title'>Time:</span> {location.data[0][location.data[0].length-1]}</p>
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

