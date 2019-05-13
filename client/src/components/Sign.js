import React, { Component } from 'react'
import SignIn from './SignIn';
import Signup from './Signup';

export class Sign extends Component {
  render() {
    return (
      <div>
          <Signup/>
        <SignIn/>
      </div>
    )
  }
}

export default Sign

