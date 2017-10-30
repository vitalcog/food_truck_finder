import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { receiveData } from '../actions'

class AllFavs extends Component {

  render() {

    let favs = <div></div>

    if (this.props.favorites === undefined) {
      return favs
    } else {
      favs = this.props.favorites.map((fav, index) => {
        return (
          <Link
            key={fav.id}
            to={`/trucks/${fav.yelpId}`} >
            <div className="favBlock">
              <img className="fTruckPic" src= {fav.imageURL}/>
              <p className="link">{fav.name}</p>
            </div>
          </Link>
        )
      })
    }

    return (
      <div className="allFavs">
        {favs}
      </div>
    );
  }
}

// connecting to the redux store below this point

function state2props(state){
  return {
    favorites: state.favorites,
  }
}

function dispatch2props(dispatch) {
  return {}
}

export default connect (state2props, dispatch2props ) (AllFavs)
