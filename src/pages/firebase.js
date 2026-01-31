// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBfb5YvdK_BcP6OutJ6hIyTYLD-INRh8XM",
  authDomain: "cmsystem-30ee3.firebaseapp.com",
  projectId: "cmsystem-30ee3",
  storageBucket: "cmsystem-30ee3.appspot.com",
  messagingSenderId: "339564274058",
  appId: "1:339564274058:web:bfc1e582a559073a866873",
  measurementId: "G-DJCGMN42ZJ",
  databaseURL: "https://cmsystem-30ee3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
export { app, auth, provider, database };