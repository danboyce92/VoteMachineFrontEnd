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

            <div className="votSta">
                Please vote for your candidate below. 

                <form>
                <div className="field" id="entCan">
                    <input className="input" type='text' placeholder="Enter candidates name here.." />
                    <button className="ui large violet button" id="subBut">Submit</button>
                </div>
            </form>

            </div>

            <div className='voteExp'>
                This vote will expire in : 
                <div className='clock'>

                </div>
            </div>

        </div>
    )
}

export default Voting;