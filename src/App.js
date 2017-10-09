import React, { Component } from 'react';
import Header from './components/header';
import MapBox from './components/map_box';
import Favs from './components/favs_and_info';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header/>
        <MapBox/>
        <Favs/>
      </div>
    );
  }
}

export default App;
