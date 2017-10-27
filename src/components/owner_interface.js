import React, { Component } from 'react'

class OwnerInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Position : [],
    }
  }

  updateLocation() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition( position => {
        console.log(position.coords.latitude, position.coords.longitude)
        fetch('https://desolate-lowlands-68945.herokuapp.com/user/start-location', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }),
          })
      })
    } else {
      /* geolocation IS NOT available */
      window.alert('current position is not available')
    }
  }

  closeShop() {
    fetch('https://desolate-lowlands-68945.herokuapp.com/user/end-location' , {
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
  }

  render() {
    return (
      <div className="firstDisplay">
        <button className="updateLocation"
          onClick={() => this.updateLocation()} >update<br/>location
        </button>
        <button className="updateLocation"
          onClick={() => this.closeShop()} >ghost<br/>customers
        </button>
      </div>
    )
  }
}

export default OwnerInterface
