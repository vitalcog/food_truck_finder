import React, { Component } from 'react';


class MapBox extends Component {

  componentDidMount() {
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    
    new window.mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [-80.8464, 35.2269], // starting position [lng, lat]
      zoom: 14 // starting zoom
  });
  // window.mapboxgl.addLayer({
  //   id: 'points',
  //   source: 'mapbox-streets',
  //   "source-layer": 'points',
  //   type: 'circle',
  // });

  // window.mapboxgl.addSourc('https://desolate-lowlands-68945.herokuapp.com/foodtrucks/mi-barrios-halal-cart-charlotte', {
  //   type: geojson,
  //   data: 'https://desolate-lowlands-68945.herokuapp.com/foodtrucks/mi-barrios-halal-cart-charlotte',
  // })
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
