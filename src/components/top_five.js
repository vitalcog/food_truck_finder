import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class TopFive extends Component {

  render() {

    const favs = this.props.favorites.slice(0,3).map((fav, index) => {
      return (

        <Link key={index} to={`/trucks/${index}`}>
        <p className="link">
          {fav}
        </p>
        </Link>
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
      'Tin-tin',
      'Pop Shop on Wheels',
      'Another generic name...',
    ],
  }
}

function dispatch2props(dispatch) {
  return {
  }
}

export default connect (state2props, dispatch2props ) (TopFive);
