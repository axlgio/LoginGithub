// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEiCvVH4_KEemolsLETESi9D388RnXqtI",
  authDomain: "logingithub-5ae16.firebaseapp.com",
  projectId: "logingithub-5ae16",
  storageBucket: "logingithub-5ae16.appspot.com",
  messagingSenderId: "783162631761",
  appId: "1:783162631761:web:d9aa3a848e1b1f2803fa70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);