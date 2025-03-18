import React, { useEffect, useState } from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "../CSS/Map.css";
import axios from 'axios';
import Markers from './Markers';

export default function Maps() {
  const [weatherStations, setWeatherStations] = useState([]);
  const API_KEY = "*************************";
  const MAP_ID = "************************"

  useEffect(()=>{
    //Making call to the API
    axios.get("http://localhost:8080/weatherstations").then((response)=>{
      setWeatherStations([...response.data]);
     }).catch((error)=>{
      console.log(error);
      
     });
   }, [])
   

  return (
    <>
      <div className='mapDiv'>
       <APIProvider apiKey={API_KEY}>
        <Map
          style={{width: '100%', height: '400px'}}
          defaultCenter={{lat: -37.813629, lng: 144.963058}}
          defaultZoom={5}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={MAP_ID}
       >
        <Markers data={weatherStations}/>
       </Map>
      </APIProvider>
    </div>
    </>
    
  )
}
