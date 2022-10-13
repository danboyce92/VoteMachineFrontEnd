import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Register from './components/Register';
import Admin from './components/Admin';
import Voting from './components/Voting';
import Candidates from './components/Candidates';
import Results from './components/Results';
import ConnectButton from './components/ConnectButton';


// document.addEventListener("DOMContentLoaded", event => {
//   const app = firebase.app();
//   console.log(app)
// })


function App() {
 
  const [vmContract, setVmContract] = useState();

  const [voteReason, setVoteReason] = useState();

  const handleVmContract = (vmContract) => {
    setVmContract(vmContract);
  }

  const handleReasonChange = (voteReason) => {
    setVoteReason(voteReason);
  }

  // const adminConnect = async () => {
  //   const adminAdd = await vmContract.admin()
  //   if(publicKey === adminAdd) {
  //     return true;
  //   } else return false;
  // }


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

          <ConnectButton 
          vmContract={vmContract}
          handleVmContract={handleVmContract}
          />
            <Register voteReason={voteReason}/> 
           {/* <Voting /> */}
           {/* <Results /> */}

            <Admin voteReason={voteReason} 
            handleReasonChange={handleReasonChange} 
            />
           
          <div className="adminButton">
          <button 
          className="ui big inverted button"
          onClick=''
          >Admin</button>
        </div>

        </div>
        {/* <Candidates /> */} 
      </div> 
    </div>
  );
}

export default App;
