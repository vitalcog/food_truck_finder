import React, { Component } from 'react';
import coordinates from '../coordinates.js';


class MapBox extends Component {

  componentDidMount() {
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    //Adds the map
    const map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
  });

  //Loops over the coordinates to place the locations on the map.
  const locations = coordinates.map(truck => { return {'type': 'Feature',
   'properties': {},'geometry': { 'type': 'Point','coordinates': truck,}
  }});

//   let findLocation = function (position) {
//   let location = [position.coords.longitude, position.coords.latitude];
// console.log(location);
//    // Put the user marker on the map
//   map.addSource('findLocations', {
//     type: 'geojson',
//     data: {
//       'type': 'FeatureCollection',
//       'features': [
//         {'type': 'Feature',
//         'properties': {},'geometry': { 'type': 'Point','coordinates': location} }
//       ],
      
//     }
//    });

//    map.addLayer({
//     id: 'current',
//     source: 'findLocations',
//     type: 'circle',
//   });
//  }
  
  // function noLocation (positionError) {
  //   console.log(positionError);
  // }

  //Gets the users position
  // let watchID = navigator.geolocation.watchPosition(findLocation, noLocation);
  // let clearID = navigator.geolocation.clearWatch(watchID);

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

  map.addControl(new window.mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
map.addControl(new window.mapboxgl.NavigationControl());
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
