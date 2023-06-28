// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjBzF3hRKrRBcbcSlv46aAtNhLmCCcYnQ",
  authDomain: "headphoneapp-comment-section.firebaseapp.com",
  projectId: "headphoneapp-comment-section",
  storageBucket: "headphoneapp-comment-section.appspot.com",
  messagingSenderId: "819328344587",
  appId: "1:819328344587:web:29d366524580d5bff8dd0e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()