// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOvrbC-g6JbfPsX84tJ1gTCyHWhdaHQ3o",
  authDomain: "votemachine-c6b2c.firebaseapp.com",
  databaseURL: "https://votemachine-c6b2c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "votemachine-c6b2c",
  storageBucket: "votemachine-c6b2c.appspot.com",
  messagingSenderId: "266751632977",
  appId: "1:266751632977:web:1c2df438c23f1e7dac7a70",
  measurementId: "G-PPB3ZTSL9L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export function writeVoteReason(text) {
    set(ref(db, 'voteReason'), {
        voteReason: text
    });
}

