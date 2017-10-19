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
     'properties': { },'geometry': { 'type': 'Point','coordinates':  [response.coordinates.longitude, response.coordinates.latitude]}}})});


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
});

  let watchID = navigator.geolocation.watchPosition(function(position) {
    bigBrother(position);
  });
 
  const bigBrother= (position)=> {
    
   this.setState({
     latitude: position.coords.latitude, 
     longitude : position.coords.longitude
    }, () => {

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
      });
       console.log(this.state.longitude,
        this.state.latitude);
    

  });
};


//   map.addSource('movingAlong', {
//     type: 'geojson',
//     data: {
//       'type': 'FeatureCollection',
//       'features': [{
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           coordinates: apple,
//           // coordinates: [-80.8464, 35.2272],
//         }
//       }]
//     }
// Shows the users current location on the map
//   map.addControl(new window.mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true
// }));
map.addControl(new window.mapboxgl.NavigationControl());


//Centers the point the user selected on the map 
map.on('click', 'points', function (e) {
  map.flyTo({center: e.features[0].geometry.coordinates});
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
