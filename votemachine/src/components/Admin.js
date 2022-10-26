import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';
import { writeVoteReason } from '../Firebase';

const Admin = (props) => {

    const [voteReason, setVoteReason] = useState('');

const onClickReason = (e) => {
    e.preventDefault();

    writeVoteReason(voteReason)
}

    return (
        <div className="admin">
            <button className="ui big inverted green button">Begin vote</button>
            <button className="ui big inverted red button reset" id="reset">Reset</button>
            
            <form>
                <div className="field">
                    <input 
                    className="input" 
                    type='text' 
                    placeholder="Enter what the vote is concerning.."
                    onChange={(e) => setVoteReason(e.target.value)}
                    />
                    <button 
                    className="ui large violet button" 
                    id="admBut"
                    onClick={onClickReason}
                    >Submit</button>
                </div>
            </form>

            <form>
                <div className="field">
                    <input className="input" type='date' placeholder="Enter the time and date it begins.." />
                    <button 
                    className="ui large violet button" 
                    id="admBut"

                    >Submit</button>
                </div>
            </form>
        
        </div>
    );
};

export default Admin;