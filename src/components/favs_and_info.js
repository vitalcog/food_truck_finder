import React, { Component } from 'react';

class Favs extends Component {
  render() {
    return (
      <div className="favs">
        <input
          className="searchText"
          type="text"
          placeholder="specific truck or food type"/>
        <div className="boxes">
          favorites
        </div>
        <div className="boxes">
          reviews
        </div>
      </div>
    );
  }
}

export default Favs;
