// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTratVMkKsDtcMYaXBdq8hvpPUJBEDtRw",
  authDomain: "chat-app-183c2.firebaseapp.com",
  projectId: "chat-app-183c2",
  storageBucket: "chat-app-183c2.appspot.com",
  messagingSenderId: "767799965724",
  appId: "1:767799965724:web:ae2635d477ddf04dcc07d9",
  measurementId: "G-VFQHBFMNQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);