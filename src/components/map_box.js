import React, { Component } from 'react';

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    }
  }
  
  componentDidMount() {

    let coordinates;
    fetch('https://desolate-lowlands-68945.herokuapp.com/foodtrucks')
    .then(response => response.json())
    .then(response => { coordinates = response.businesses.map(response =>
     { return {'type': 'Feature',
     'properties': {description: response.name },'geometry': { 'type': 'Point','coordinates':  [response.coordinates.longitude, response.coordinates.latitude]}}})});


    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    //Adds the map
    const map = new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
  });

  //Retreives the json of foodtrucks and returns the coordinates to the map in geojson. 

 


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
  // map.getSource('movingAlong').setData('FeatureCollection');
});

  navigator.geolocation.watchPosition(function(position) {
    bigBrother(position);
  });
 
  const bigBrother= (position)=> {
     
   this.setState({
     latitude: position.coords.latitude, 
     longitude : position.coords.longitude
    }, () => {

      if (map.getLayer('currentLocation') !== undefined && map.getSource('movingAlong') !== undefined) {
        map.removeLayer('currentLocation');  
        map.removeSource('movingAlong'); 
      } else {
      
      map.addSource('movingAlong', {

        type: 'geojson',
        data: {
          'type': 'FeatureCollection',
          'features': [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                this.state.longitude,
                this.state.latitude,
              ],
            }
          }]
        }
       });

       map.addLayer({
        id: 'currentLocation',
        source: 'movingAlong',
        type: 'circle',
        paint: {
          "circle-radius": 7,
          "circle-color": "#007cbf"
      }
      });
            
       console.log(this.state.longitude,
        this.state.latitude);
       }
  });
};

map.addControl(new window.mapboxgl.NavigationControl());


//Centers the point the user selected on the map 
map.on('click', 'points', function (e) {
  map.flyTo({center: e.features[0].geometry.coordinates});
});
map.on('click', 'points', function (e) {
new window.mapboxgl.Popup()
.setLngLat(e.features[0].geometry.coordinates)
.setHTML(e.features[0].properties.description)
.addTo(map);
});



}
  render() {
  console.log(this.state.longitude, this.state.latitude);
 
    return (
      <div className="mapbox">
        <div id="map">
        
        </div>
      </div>
    );
  };
};



export default MapBox;
