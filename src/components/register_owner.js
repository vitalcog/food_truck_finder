import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class RegisterOwner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      foodType: '',
      yelpId: '',
      imageURL: '',
      url: '',
    }
  }

  handleChange(state, ev) {
    this.setState({
      [state] : ev.target.value,
    })
  }

  addTruck() {
    console.log('begining of fetch request yo')
  fetch('https://desolate-lowlands-68945.herokuapp.com/user/foodtruck/add', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          foodType: this.state.foodType,
          yelpId: this.state.yelpId,
          imageURL: this.state.imageURL,
          url: this.state.url,
      }),
    }).then(()=>console.log('end of fetch request yo'))
  }

  render() {
    return (
      <div className="register">
        {/* <input onChange={ ev => this.handleChange('name',ev)}
          type="text" placeholder="user name"/> */}

        {/* <input onChange={ ev => this.handleChange('name',ev)}
          type="password" placeholder="password"/> */}

        <input onChange={ ev => this.handleChange('name',ev)}
          type="text" placeholder="truck/company name" value={this.state.name}/>

        <input onChange={ ev => this.handleChange('foodType',ev)}
          type="text" placeholder="food type/style" value={this.state.foodType}/>

        <input onChange={ ev => this.handleChange('url',ev)}
          type="text" placeholder="website url"/>

        <button onClick={() => this.addTruck()} className="submit" type="submit">register</button>
      </div>
    )
  }
}

export default RegisterOwner
