import React, { Component } from 'react'

export class Signup extends Component {
  render() {
    return (
        <div className="card">
         <form className="card-body">
         <div className="mb-3">
         <div className="row">
        <div className="col">
        <label htmlFor="exampleInputEmail1">First name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
        <label htmlFor="exampleInputEmail1">Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        </div>
      </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div>
        <div className="well"> 
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" className="form-control" id="exampleInputDOB1" placeholder="Date of Birth" />
          </div>
        </div>
        <div className="well"> 
        </div>
      </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      </div>
        
    
    )
  }
}

export default Signup
