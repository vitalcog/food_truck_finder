import React, { Component } from 'react'
import Header from './components/header'
import FirstDisplay from './components/opening_display'
import AllFavs from './components/all_favs'
import TruckInfo from './components/fav_info_details'
import SignIn from './components/sign_in'
import RegisterUser from './components/register_user'
import OwnerInterface from './components/owner_interface'
import { Route, Switch, withRouter } from 'react-router-dom'
import { receiveData } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.search()
  }

  render() {
    return (
      <div className="appWrapper">
        <Header/>

        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/register' component={RegisterUser} />
          <Route exact path='/users' component={FirstDisplay} />
          <Route exact path='/owner' component={OwnerInterface} />
          <Route path='/allFavs' component={AllFavs} />
          <Route path='/trucks/:id' component={TruckInfo} />
        </Switch>
      </div>
    )
  }
}

// connecting to the redux store below this point

  function state2props(state){
    return {
      favorites: state.favorites,
    }
  }

  function dispatch2props(dispatch) {
    return {
      search: () => {
        fetch('https://desolate-lowlands-68945.herokuapp.com/foodtruck/all')
        .then( res => res.json() )
        .then( res => {
          return res
        })
        .then( res => {
          dispatch(receiveData(res))
        })
      },
    }
  }

  export default withRouter(connect (state2props, dispatch2props ) (App))
