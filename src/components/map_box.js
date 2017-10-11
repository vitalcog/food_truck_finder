import React, { Component } from 'react';

class MapBox extends Component {
  
  

  componentWillMount() {
    L.mapbox.map('googleMap', 'mapbox.streets');
  }

  render() {

    L.mapbox.accessToken = 'pk.eyJ1IjoiY2p6ZWxlZG9uIiwiYSI6ImNqOG5jdnlhODE5a3MycW11MWo1eGV2Y2QifQ.WZStz_i8Bt1B4OEZJMg_WA';
    let map = L.mapbox.map('map', 'mapbox.streets')
        .setView([40, -74.50], 9);
    return (
      <div className="mapbox">
        <div className="googleMap">

</div>
        <div className="sliderGuage">
          dynamic slide for adjusting search radius goes here
        </div>

      </div>
    );
  };
};



export default MapBox;
