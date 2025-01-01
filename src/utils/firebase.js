// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "**************",
  authDomain: "netflixgpt-287af.firebaseapp.com",
  projectId: "netflixgpt-287af",
  storageBucket: "netflixgpt-287af.firebasestorage.app",
  messagingSenderId: "535048606786",
  appId: "1:535048606786:web:e88ee50dd26c909b23c9db",
  measurementId: "G-15K40CTMP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
