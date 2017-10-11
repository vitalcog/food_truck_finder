import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopFive extends Component {

  render() {

    const favs = this.props.favorites.map((fav, index) => {
      return (
        <p key={index}>{fav}</p>
      )
    })

    return (
      <div className="topFive">
        {favs}
      </div>
    );
  }
}

// connecting to the redux store below this point

function state2props(state){
  return {
    favorites: [
      'Yummi Bahn-Mi',
      'Billy-Ray\'s Awesome Traveling BBQ',
      'Generic Food Truck for Testing Purposes',
    ],
  }
}

function dispatch2props(dispatch) {
  return {
  }
}

export default connect (state2props, dispatch2props ) (TopFive);
