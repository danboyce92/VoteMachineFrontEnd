import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abi.json';
import AdminDisplay from './AdminDisplay';


const AdminButton = () => {

  const [adminLogged, setAdminLogged] = useState(false);

  const contractABI = abi.abi;
  const contractAddress = "0xCe0561Da3B6A6AF21D0555eE2a24D3EDA76f613c";
  let adminAdd = '';
  let publicKey = '';

  //Retrieves the admin address of the smart contract
  const retrieveAdmin = async () => {

    try {

      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const accounts = await provider.send("eth_requestAccounts", []);
        const voteMachine = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

          adminAdd = await voteMachine.admin();

          publicKey = accounts[0];

      }

    } catch (error) {
      console.log(error);
    }

  }

  //Verifies that the current user is the admin
   const adminValid = async () => {

      await retrieveAdmin();


      if(publicKey.toUpperCase() === adminAdd.toUpperCase()) {
          setAdminLogged(true);
      } else {
          console.log("User does not have admin privileges")
      }
     
  }

    return (
        <div>

          <AdminDisplay isAdmin={adminLogged} />

          <div className="adminButton">
                <button 
                className="ui big inverted button"
                onClick={adminValid}
                >Admin</button>
            </div>

        </div>
    )

}

export default AdminButton;