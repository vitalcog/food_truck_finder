import React, { Component } from 'react';
import coordinates from '../coordinates.js';


class MapBox extends Component {

  componentDidMount() {
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    
    const map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
  });

  const locations = coordinates.map(truck => { return {'type': 'Feature', 'properties': {},'geometry': { 'type': 'Point','coordinates': truck,}
  }});

  var watchID = navigator.geolocation.watchPosition(function(position) {
    findLocation(position.coords.latitude, position.coords.longitude);
  });
navigator.geolocation.clearWatch(watchID);

console.log(locations);
map.on('load', () => {
  map.addSource('pointsSource', {
    type: 'geojson',
    data: {
      'type': 'FeatureCollection',
      'features': locations,
      
    }
   });

   map.addLayer({
    id: 'points',
    source: 'pointsSource',
    type: 'circle',
  });

   });
  }

  
  render() {
    return (
      <div className="mapbox">
        
        <div id="map"></div>

      </div>
    );
  };
};



export default MapBox;
