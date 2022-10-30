import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Register from './components/Register';
import Admin from './components/Admin';
import VoteReason from './components/VoteReason';
import VoteTime from './components/VoteTime';
import Voting from './components/Voting';
import Candidates from './components/Candidates';
import Results from './components/Results';
import ConnectButton from './components/ConnectButton';
import AdminButton from './components/AdminButton';



function App() {



  return (
    <div className="App">

      <div className="parent">

        <div className="test">
          consolelog:   ''
        </div>
        
      <div className="title">
            The Vote Machine 
          </div>

        <div className="child">

          <ConnectButton />
          <Register /> 
           {/* <Voting /> */}
           {/* <Results /> */}

          <VoteReason />
          <VoteTime />
          <Admin />
          <AdminButton />

        </div>
        {/* <Candidates /> */} 
      </div> 
    </div>
  );
}

export default App;
