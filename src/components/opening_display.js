import React, { Component } from 'react';
import MapBox from './map_box';
import Favs from './favs';
import { Route, Switch, withRouter } from 'react-router-dom';

class FirstDisplay extends Component {
  render() {
    return (
      <div className="firstDisplay">
        <MapBox/>
        <Favs/>
      </div>
    );
  }
}

export default FirstDisplay;
