// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJnGp3TcjkM9iwosLdpQB1B7eBgUjHGu8",
  authDomain: "reactabch.firebaseapp.com",
  projectId: "reactabch",
  storageBucket: "reactabch.appspot.com",
  messagingSenderId: "905671240747",
  appId: "1:905671240747:web:405ad1aff302b1df64ce6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)