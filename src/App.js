import React, { Component } from 'react';
import Header from './components/header';
import FirstDisplay from './components/opening_display';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header/>
        <FirstDisplay/>
        {/* <Switch>
          <Route path='/WhereTheTruck' component={FirstDisplay} />
          <Route path='/WhereTheTruck/Favs' component={AllFavs} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(App);
