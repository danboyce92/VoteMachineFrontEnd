import React from 'react';
import './styles/App.css';
import Register from './components/Register';
import Admin from './components/Admin';
import Voting from './components/Voting';


function App() {
  return (
    <div className="App">

      <div className="parent">

      <div className="conBut">
        <button className="ui large inverted green button">Connect Wallet</button>
      </div>

      <div className="title">
            The Vote Machine
          </div>

        <div className="child">

           <Register />
          {/* <Voting /> */}
          {/* <Admin /> */}

          <div className="adminButton">
          <button className="ui big inverted button">Admin</button>
        </div>

        </div>


      
      </div>
      
    </div>
  );
}

export default App;
