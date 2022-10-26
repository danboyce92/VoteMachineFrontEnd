import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { app, db } from '../Firebase';

const VoteReason = () => {
    const [voteReason, setVoteReason] = useState('');

    const getReason = () => {
        const voteReasonRef = ref(db, '/voteReason/voteReason');
        onValue(voteReasonRef, (snapshot) => {
          setVoteReason([snapshot.val()])
        });
}


useEffect(() => {
    getReason()
}, []);


    return (
        <div>
            <div className="voteReason">
                This vote is concerning:  <b>{voteReason}</b>
            </div>
        </div>
    )
}

export default VoteReason; 