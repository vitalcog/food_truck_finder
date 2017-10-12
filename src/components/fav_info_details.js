import React, { Component } from 'react';

class TruckInfo extends Component {

  render() {
    return (
      <div className="favs">
        <div>
          favorites
        </div>
        <TopFive/>
        <Link className="link" to='/allFavs'>All</Link>
      </div>
    );
  }
}

export default Favs;
