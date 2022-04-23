
import { initializeApp } from "firebase/app";
// import {useNavigate} from 'react-router-dom';
import { getAuth, 
   
  // GoogleAuthProvider,
  // GithubAuthProvider, 
  // signInWithPopup, 
  // FacebookAuthProvider 
} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAJjrr6XuSuLlBoshobZF1Th_jT3LPDF5Y",
  authDomain: "luxchat-afbf0.firebaseapp.com",
  projectId: "luxchat-afbf0",
  storageBucket: "luxchat-afbf0.appspot.com",
  messagingSenderId: "586878928761",
  appId: "1:586878928761:web:3329d245d5070baaeb51a8"
  
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

   export const app = initializeApp(firebaseConfig)

   export const auth = getAuth(app);

  