import React, { useState } from 'react'
import '../Register.css';

const Register = () => {
const [voteReason, setVoteReason] = useState(' ');
const [voteTime, setVoteTime] = useState('here')
    return(
        <div>
            <div className="regPhase">
                Vote registration is currently taking place.
            </div>

            <div className="voteReason">
                This vote is concerning:  {voteReason}
            </div>

            <div className="voteDur">
                Voting will be possible for 24 hours.
            </div>

            <div className="votCom">
                This vote will commence on: <br></br> {voteTime}
            </div>

            <div className="regSta">
                Please register candidates below. 

                <form className="ui form">
                    <div className="field">
                        <input typeOf="text" placeholder="Enter candidate name here.." />
                       
                    </div>

                    <div className="ui submit button">Submit</div>

                </form>

            </div>



        </div>
    )
}

export default Register;