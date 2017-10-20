import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { receiveData } from '../actions'

class AllFavs extends Component {

  render() {

    let favs = <div></div>

    console.log(this.props.favorites.businesses)

    if (this.props.favorites.businesses === undefined) {
      return favs
    } else {
      favs = this.props.favorites.businesses.map((fav, index) => {
        return (
          <Link
            key={index}
            to={`/trucks/:${fav.id}`} >
            <div className="favBlock">

              <img className="fTruckPic"
                src= {fav.image_url}/>

              <p className="link">
                {fav.name}
              </p>

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
