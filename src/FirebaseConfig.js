import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAyK07qtEZsPtG3_Pf_8MMxGBMUQ9lO-8",
    authDomain: "emailauth-a2991.firebaseapp.com",
    projectId: "emailauth-a2991",
    storageBucket: "emailauth-a2991.appspot.com",
    messagingSenderId: "687525751590",
    appId: "1:687525751590:web:bfffb69417658b685a6fe7",
    measurementId: "G-EQR6016BZQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export {auth, provider}