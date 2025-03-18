import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'


export default function Markers({data}) {
  
    const handleClick = (location) =>{
        window.alert(location.name+" "+location.portfolio+""+location.state);
    }
            return (
              <>
                {data.map( (location, i) => (
                   <div key={i}> 
                  <AdvancedMarker
                    onClick={() => handleClick(location)}
                    key={location.wsu_name}
                    position={{lat:location.latitude, lng: location.longitude}}>
                  <Pin background={'#FF851B'} glyphColor={'#000'} borderColor={'#000'}/>
                  </AdvancedMarker>
                  </div>
                ))}
              </>
            );
          };

