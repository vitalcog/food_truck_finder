import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class RegisterUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
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

  addUser() {
    fetch('https://desolate-lowlands-68945.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            userName: this.state.name,
            password: this.state.password,
            email: this.state.email,
        }),
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
        <img className="logoPic" src="../img/road_fork.png" />

        <input onChange={ ev => this.handleChange('name',ev)}
          type="text" placeholder="user name" value={this.state.name}/>

        <input onChange={ ev => this.handleChange('email',ev)}
          type="email" placeholder="email" value={this.state.foodType}/>

        <input onChange={ ev => this.handleChange('password',ev)}
          type="password" placeholder="password"/>

        <button onClick={() => this.addTruck()} className="submit" type="submit">register</button>
      </div>
    )
  }
}

export default RegisterUser
