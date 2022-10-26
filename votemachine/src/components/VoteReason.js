import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { app, db } from '../Firebase';

const VoteReason = (props) => {
    const [voteReason, setVoteReason] = useState('');

    const getReason = () => {
        const voteReasonRef = ref(db, '/voteReason/voteReason');
        onValue(voteReasonRef, (snapshot) => {
          setVoteReason([snapshot.val()])
        });
}


useEffect(() => {
    getReason()
}, [voteReason]);


    return (
        <div>
            <div className="voteReason">
                This vote is concerning:  {voteReason}
            </div>
        </div>
    )
}

export default VoteReason; 