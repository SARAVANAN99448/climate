// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3K9bF7_3AeVVNSLAghVMqhN8puofOcrI",
  authDomain: "one-piece-ea45f.firebaseapp.com",
  projectId: "one-piece-ea45f",
  storageBucket: "one-piece-ea45f.appspot.com",
  messagingSenderId: "583214502505",
  appId: "1:583214502505:web:ff0e403c3ce2d61c4cc8f8",
  measurementId: "G-06ELYJBQ4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
