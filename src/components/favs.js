import React, { Component } from 'react'
import TopFive from './top_five'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Favs extends Component {

  render() {
    if (this.props.instructions.length === 0) {
      return (
        <div className="favs">
          <div>
            local trucks
          </div>
          <TopFive/>
          <Link className="link" to='/allFavs'>All</Link>
        </div>
      )
    } else {
      return (
        <div className="favs"></div>
      )
    }
  }
}

// connecting to Redux store below this point

function state2props(state){
  return {
    favorites: state.favorites,
    instructions: state.instructions
  }
}

function dispatch2props(dispatch) {
  return {}
}

export default connect (state2props, dispatch2props ) (Favs)
