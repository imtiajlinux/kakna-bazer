// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABJrJ1IUMxIkpbCGHvKfluEpheNYGLspM",
  authDomain: "kakna-bazer.firebaseapp.com",
  projectId: "kakna-bazer",
  storageBucket: "kakna-bazer.appspot.com",
  messagingSenderId: "646088841781",
  appId: "1:646088841781:web:f56a8dfd6469f1cf386f7c",
  measurementId: "G-7ELLSFDLKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
