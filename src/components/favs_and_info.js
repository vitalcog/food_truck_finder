import React, { Component } from 'react';
import TopFive from './top_five'

class Favs extends Component {

  render() {
    return (
      <div className="favs">
        <div className="boxes">
          favorites
        </div>
        <TopFive />
        <div className="browserLink">
          all
        </div>
      </div>
    );
  }
}

export default Favs;
