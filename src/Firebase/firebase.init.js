// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrr7nJlp5TCbhrzVCHUF2NH03XRlfHpME",
  authDomain: "car-booking-cc582.firebaseapp.com",
  projectId: "car-booking-cc582",
  storageBucket: "car-booking-cc582.firebasestorage.app",
  messagingSenderId: "927523700270",
  appId: "1:927523700270:web:3cd848bf312a8e6270a9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);