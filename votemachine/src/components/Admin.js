import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';

const Admin = (props) => {

const [reason, setReason] = useState('');

const onClick = (e) => {
    e.preventDefault();

    props.handleReasonChange(reason)

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
                    onChange={(e) => setReason(e.target.value)}
                    />
                    <button 
                    className="ui large violet button" 
                    id="admBut"
                    onClick={onClick}
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