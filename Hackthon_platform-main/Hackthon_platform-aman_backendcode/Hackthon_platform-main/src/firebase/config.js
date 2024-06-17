// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAPowGzzZdLd47KHFmsAF9PWcsWkMnSMgM",
  authDomain: "hackconnect-ff332.firebaseapp.com",
  projectId: "hackconnect-ff332",
  storageBucket: "hackconnect-ff332.appspot.com",
  messagingSenderId: "647823662313",
  appId: "1:647823662313:web:f8afb7c7452d1226cfe478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);