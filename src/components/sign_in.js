import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
    }
  }

  logIn() {
    console.log('begining of fetch request yo')
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
      }),
    }).then( res => res.json())
    .then(res => {
      if (res.userType === 'owner') {
        this.props.history.push('/owner')
      } else if (res.userType === 'customer') {
        this.props.history.push('/users')
      }
    })
  }

  register() {
    console.log('begining of register new user')
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

  handleChange(state, ev) {
   this.setState({
     [state] : ev.target.value,
   })
 }

  render() {
    return (
      <div className="signIn">
        <input onChange={ ev => this.handleChange('name', ev)}
          type="text" value={this.state.name} placeholder="user name"/>

        <input onChange={ ev => this.handleChange('email', ev)}
          type="email" value={this.state.email} placeholder="email"/>

        <input onChange={ ev => this.handleChange('password', ev)}
          type="password" value={this.state.password} placeholder="password"/>

        <button onClick={() => this.logIn()}>log in</button>
        <button onClick={() => this.register()}>register new user</button>

        {/* <Link to='/register'>
          <p className="loginLink">register</p>
        </Link> */}
      </div>
    )
  }
}

export default SignIn
