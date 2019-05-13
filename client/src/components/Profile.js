import React, { Component } from 'react'
import './Profile.css'

export class Profile extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user">
          <img src="https://img.icons8.com/color/48/000000/anonymous-mask.png" alt=""/>
          <h3>USER NAME</h3>
        </div>

        <div className="user-info">
          <div className="user-info-item badges">
            <h4>BADGES</h4>
          </div>
          <div className="user-info-item programs">
            <h4>PROGRAMS</h4>
          </div>
          <div className="user-info-item stats">
            <h4>STATS</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
