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
