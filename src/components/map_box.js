import React, { Component } from 'react';
class MapBox extends Component {

  componentDidMount() {
    window.mapboxgl.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    
    new window.mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 13,
    });
  }

  render() {
    return (
      <div className="mapbox">
        <div id="map"></div>
        <div className="sliderGuage">
          dynamic slide for adjusting search radius goes here
        </div>
      </div>
    );
  };
};



export default MapBox;
