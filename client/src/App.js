
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state= {
    check: false
  }

  checkHandler= () => {
    console.log(this.state.check);
    this.setState({check: !(this.state.check)})
  }

  
  render() {
    const checkShow= this.state.check === false ? " inactive" : " is-active"
    return (
      <div className="app">
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home</a>
          </li>
        </ul>
      </div>
      
      <div className="body3">
        <div className="tasks card">
          <div className="card-header">
            Daily Tasks
          </div>
          <div className="card-body">
            <td className="td img" onClick={() => this.checkHandler()} ><img src="https://img.icons8.com/cotton/64/000000/checkmark.png" alt="" className={"check"+checkShow}/></td>
            <td className="td">Mark</td>  
          </div>
        </div>
        <div className="lead">
          Leader board
        </div>
        <div className="challenges">
          Active challenges
        </div>
      </div>
      
    </div>
    )
  }
}
