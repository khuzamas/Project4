import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Sign from './components/Sign';



function App() {
  return (
    <div className="app">
    <Header />
    <Sign  />
      {/* <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home</a>
          </li>
        </ul>
      </div>
      
      <div className="body3">
        <div className="tasks">
          Daily tasks
        </div>
        <div className="lead">
          Leader board
        </div>
        <div className="challenges">
          Active challenges
        </div>
      </div>
       */}
    </div>
  );
}

export default App;
