import React from 'react';
import '../styles/Admin.css';

const Admin = () => {

    return (
        <div className="admin">
            <button className="ui big inverted green button">Begin vote</button>
            <button className="ui big inverted red button reset" id="reset">Reset</button>
            
            <form>
                <div className="field">
                    <input className="input" type='text' placeholder="Enter what the vote is concerning.." />
                    <button className="ui large violet button" id="admBut">Submit</button>
                </div>
            </form>

            <form>
                <div className="field">
                    <input className="input" type='date' placeholder="Enter the time and date it begins.." />
                    <button className="ui large violet button" id="admBut">Submit</button>
                </div>
            </form>
        
        </div>
    );
};

export default Admin;