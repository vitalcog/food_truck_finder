import React, { Component } from 'react';

class MapBox extends Component {
  // google api key = AIzaSyCniENfrb5Jtl90ZCVLMfsyYGqUxWxLEas
  componentDidMount() {
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    //Adds the map
    const map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
  });

  //Retreives the json of foodtrucks and returns the coordinates to the map in geojson. 
let coordinates;
  fetch('https://desolate-lowlands-68945.herokuapp.com/foodtrucks')
  .then(response => response.json())
  .then(response => { coordinates = response.businesses.map(response =>
   { return {'type': 'Feature',
   'properties': {},'geometry': { 'type': 'Point','coordinates':  [response.coordinates.longitude, response.coordinates.latitude]}}})});

map.on('load', () => {
  map.addSource('pointsSource', {
    type: 'geojson',
    data: {
      'type': 'FeatureCollection',
      'features': coordinates,
      
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

map.on('click', 'points', function (e) {
  map.flyTo({center: e.features[0].geometry.coordinates});
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
