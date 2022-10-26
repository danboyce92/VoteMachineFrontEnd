import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { app, db } from '../Firebase';
import { writeVoteTime } from '../Firebase';

const VoteTime = () => {

    const [voteTime, setVoteTime] = useState('')

    const getTime = () => {
        const voteTimeRef = ref(db, 'voteTime/voteTime');
        onValue(voteTimeRef, (snapshot) => {
            setVoteTime([snapshot.val()])
        });
    }

    useEffect(() => {
        getTime()
    }, []);


    return (
        <div>
            <div className="votCom">
                This vote will commence on: <br></br> 
                
                <div className='time'>
                <b>{voteTime}</b>
                </div>

            </div>
        </div>
    )
} 

export default VoteTime;