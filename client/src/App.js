import './App.css';
import React, { Component } from 'react'
import Header from './components/layouts/Header';
import Sign from './components/Sign';
import Signup from './components/Signup';
import UserHome from './components/UserHome';
import Profile from './components/Profile'
import Navbar from './components/layouts/Navbar';
import Challenge from './components/Challenge'
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom'

export default class App extends Component {
  
  render() {
    
    return (
      <Router>
        <div className="app">
          <Navbar/>
          {/* <UserHome /> */}
          <Route path='/userhome' component={UserHome}/>
          <Route path='/challenge' component={Challenge}/>
          {/* <Profile/> */}
          <Route path='/profile' component={Profile}/>
        </div>
      </Router>
    )
  }
}
