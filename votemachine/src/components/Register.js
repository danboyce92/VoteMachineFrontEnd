import React, { useState } from 'react';
import VoteReason from './VoteReason';
import VoteTime from './VoteTime';
import '../styles/Register.css';

const Register = () => {
    
    const [candidateName, setCandidateName] = useState('');

    const onClickCandidate = () => {
        //Create smart contract function for registering candidate here
        //Use candidateName var as argument
    }


    return(
        <div>
            <div className="regPhase">
                Vote registration is currently taking place.
            </div>

            <VoteReason />
            <VoteTime />

            <div className="votCom">
                This vote will commence on: <br></br>   
            </div>

            <div className="voteDur">
                Voting will be possible for 24 hours.
            </div>

            <div className="regSta">
                Please register candidates below. 

                <form>
                    <div className="field" id="entCan">
                        <input 
                        className="input" 
                        type='text' 
                        placeholder="Enter candidates name here.." 
                        onChange={(e) => setCandidateName(e.target.value)}
                        />
                        <button 
                        className="ui large violet button" 
                        id="subBut"
                        onClick={onClickCandidate}
                        >Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register;