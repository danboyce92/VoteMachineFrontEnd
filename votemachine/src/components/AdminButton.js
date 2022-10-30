import React from 'react';
import { ethers } from 'ethers';
import abi from '../abi.json';

const AdminButton = () => {

    const contractABI = abi.abi;
    const contractAddress = "0xCe0561Da3B6A6AF21D0555eE2a24D3EDA76f613c";


    const retrieveAdmin = async () => {

      try {

        const {ethereum} = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum, "any");
          const signer = provider.getSigner();
          const voteMachine = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

            const adminAdd = await voteMachine.admin();

            console.log(adminAdd)

        }

      } catch (error) {
        console.log(error);
      }

    }

    return (
        <div>

            <div className="adminButton">
                <button 
                className="ui big inverted button"
                onClick={retrieveAdmin}
                >Admin</button>
            </div>

        </div>
    )

}

export default AdminButton;