import React, { useState } from 'react';
import { ethers } from 'ethers';
import '../styles/ConnectButton.css';

const ConnectButton = (props) => {

    const [publicKey, setPublickey] = useState();

    const [network, setNetwork] = useState();
  
    const [chainId, setChainId] = useState();
  
    const [msg, setMsg] = useState();
  
    const [balanceInEther, setBalanceInEther] = useState();



    const connectButton = async () => {
    
        const { ethereum } = window;
        if (ethereum.isMetaMask) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const accounts = await provider.send("eth_requestAccounts", []);
          const { name, chainId } = await provider.getNetwork();
          setNetwork(name);
          setChainId(chainId);
          setPublickey(accounts[0]);
    
          const balance = await provider.getBalance(accounts[0]);
          setBalanceInEther(ethers.utils.formatEther(balance));
    
    
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

        <div>

            <div className="info">
                Public key: {publicKey} 
                <br></br>
                Network: {network}
                <br></br>
                Chain ID: {chainId}
                <br></br>
                Wallet funds: {balanceInEther}
                <br></br>
                {msg && <p>{msg}</p>}
                <br></br>
                consolelog: {}
            </div>

            <div className="conBut">
                <button className="ui large inverted green button"
                onClick={connectButton}
                >{connectWallet()}</button>

            </div>


        </div>
    )
}

export default ConnectButton;





 
