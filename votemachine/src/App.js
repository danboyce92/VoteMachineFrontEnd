import React, { useState } from 'react';
import { ethers } from 'ethers';
import './styles/App.css';
import Register from './components/Register';
import Admin from './components/Admin';
import Voting from './components/Voting';
import Candidates from './components/Candidates';
import Results from './components/Results';


function App() {
 
  const [publicKey, setPublickey] = useState();

  const [network, setNetwork] = useState();

  const [chainId, setChainId] = useState();

  const [msg, setMsg] = useState();


  const connectButton = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const { name, chainId } = await provider.getNetwork();
      setNetwork(name);
      setChainId(chainId);
      setPublickey(accounts[0]);
    } else {
      setMsg("Install MetaMask");
    }
  };

  const connectWallet = () => {
    if (!publicKey) {
      return  "Connect Wallet"
    } else return  "Connected"
    
  }
  
  
  
  
  return (
    <div className="App">

      <div className="parent">
        <div className="info">
          Public key: {publicKey} 
          <br></br>
          Network: {network}
          <br></br>
          Chain ID: {chainId}
        </div>

      <div className="conBut">
        <button className="ui large inverted green button"
        onClick={connectButton}
        >{connectWallet()}</button>

      </div>

      <div className="title">
            The Vote Machine
            
          </div>

        <div className="child">

            <Register /> 
           {/* <Voting /> */}
           {/* <Results /> */}
           {/* <Admin />  */}
           

          <div className="adminButton">
          <button className="ui big inverted button">Admin</button>
        </div>

        </div>

        {/* <Candidates /> */}
      
      </div>
      
    </div>
  );
}

export default App;
