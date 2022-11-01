import React, { useState } from 'react';
import '../styles/Admin.css';
import { writeVoteReason, writeVoteTime } from '../Firebase';

const Admin = () => {

    const [voteReason, setVoteReason] = useState('');
    const [voteTime, setVoteTime] = useState('');

    const onClickReason = (e) => {
        e.preventDefault();
        writeVoteReason(voteReason)
    }

    const onClickTime = (e) => {
        e.preventDefault();
        writeVoteTime(voteTime)

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
                    maxLength="120"
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
                    <input 
                    className="input" 
                    type='date' 
                    placeholder="Enter the time and date it begins.." 
                    onChange={(e) => setVoteTime(e.target.value)}
                    />
                    <button 
                    className="ui large violet button" 
                    id="admBut"
                    onClick={onClickTime}

                    >Submit</button>
                </div>
            </form>
        
        </div>
    );
};

export default Admin;