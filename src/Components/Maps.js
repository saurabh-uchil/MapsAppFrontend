import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "../CSS/Map.css";
import axios from 'axios';

export default function Maps() {
  const API_KEY = "***************************";
   
  const weatherStations = async()=>{
      let data = await axios.get("http://localhost:8080/weatherstations");
      console.log(JSON.stringify(data.data));
   }


   weatherStations();
  return (
    <div className='mapDiv'>
       <APIProvider apiKey={API_KEY}>
        <Map
          style={{width: '100%', height: '400px'}}
          defaultCenter={{lat: -37.813629, lng: 144.963058}}
          defaultZoom={6}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
       />
      </APIProvider>
    </div>
  )
}
