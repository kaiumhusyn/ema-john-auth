// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7mNA2tvGfFt3Jf7XK94kzzjfDn6GF3BU",
  authDomain: "ema-john-simple-c5d22.firebaseapp.com",
  projectId: "ema-john-simple-c5d22",
  storageBucket: "ema-john-simple-c5d22.appspot.com",
  messagingSenderId: "1008712659587",
  appId: "1:1008712659587:web:62b82ee3f4c3917d94a1b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
