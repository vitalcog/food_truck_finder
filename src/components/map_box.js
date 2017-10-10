import React, { Component } from 'react';

class MapBox extends Component {

  componentWillMount() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY')
    .then(response => response.json)
    .then(console.log(response));
  }

  render() {
    return (
      <div className="mapbox">
        <div className="googleMap">
        <Map/>
        </div>
        <div className="sliderGuage">
          dynamic slide for adjusting search radius goes here
        </div>
       
      </div>
    );
  };
};



export default MapBox;
