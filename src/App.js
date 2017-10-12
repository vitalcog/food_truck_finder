import React, { Component } from 'react';
import Header from './components/header';
import FirstDisplay from './components/opening_display';
import AllFavs from './components/all_favs';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header/>

        <Switch>
          <Route exact path='/' component={FirstDisplay} />
          <Route path='/allFavs' component={AllFavs} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
