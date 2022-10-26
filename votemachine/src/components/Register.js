import React, { useState } from 'react'

import '../styles/Register.css';

const Register = () => {

const [voteTime, setVoteTime] = useState('')
    



    
    return(
        <div>
            <div className="regPhase">
                Vote registration is currently taking place.
            </div>



            <div className="voteDur">
                Voting will be possible for 24 hours.
            </div>

            <div className="votCom">
                This vote will commence on: <br></br> {voteTime}
            </div>

            <div className="regSta">
                Please register candidates below. 

                <form>
                <div className="field" id="entCan">
                    <input className="input" type='text' placeholder="Enter candidates name here.." />
                    <button className="ui large violet button" id="subBut">Submit</button>
                </div>
            </form>

            </div>



        </div>
    )
}

export default Register;