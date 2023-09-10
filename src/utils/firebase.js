// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAozQWrKvxDrKRwZ-xTfHoh8auccKxnj48",
  authDomain: "netflixgpt-d9e0d.firebaseapp.com",
  projectId: "netflixgpt-d9e0d",
  storageBucket: "netflixgpt-d9e0d.appspot.com",
  messagingSenderId: "533666125382",
  appId: "1:533666125382:web:f78e7c4616da4ae1879c47",
  measurementId: "G-E157J3NDR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();