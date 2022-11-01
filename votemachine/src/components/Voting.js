import React from 'react';
import '../styles/Voting.css';
import VoteReason from './VoteReason';
import VoteTime from './VoteTime';

const Voting = () => {

    return (
        <div>
            <div className="votPhase">
                A vote is currently taking place.
            </div>

            <div className="voteReason">
                This vote is concerning:  
            </div>

            <VoteReason />


            <div className="voteDur">
                Voting will be possible for 24 hours.
            </div>



            <div className="votEnd">
                This vote will be open until the end of: <br></br> 
            </div>

            <div className="votSta">
                Please vote for your candidate below. 

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

export default Voting;