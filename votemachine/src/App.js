import React from 'react';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <button className="ui inverted green button">Connect Wallet</button>
      </nav>

      <div className="parent">
        <div className="title">
          The Vote Machine
        </div>

        <div className="child">
          <Register />


        </div>

        <div className="adminButton">
          <button className="ui inverted basic button">Admin</button>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
