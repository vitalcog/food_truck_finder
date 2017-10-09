import React, { Component } from 'react';

class MapBox extends Component {
  render() {
    return (
      <div className="mapbox">
        <div className="googleMap"></div>
        <div className="sliderGuage">
          dynamic slide for adjusting search radius goes here
        </div>
      </div>
    );
  }
}

export default MapBox;
