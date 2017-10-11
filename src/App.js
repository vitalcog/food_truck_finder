import React, { Component } from 'react';
import Header from './components/header';
import MapBox from './components/map_box';
import Favs from './components/favs_and_info';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header/>
        <MapBox/>
        <Favs/>
        {/* <Switch>
          <Route path='/lots/:id' component={MapBox} component={Favs} />
          <Route path='/transactions' component={TransRecord} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(App);
