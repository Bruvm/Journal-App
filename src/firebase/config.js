// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_zkCzYLreX_O038WtsWF05pOwywiHWU",
  authDomain: "react-cursos-53ab5.firebaseapp.com",
  projectId: "react-cursos-53ab5",
  storageBucket: "react-cursos-53ab5.appspot.com",
  messagingSenderId: "719427821502",
  appId: "1:719427821502:web:496a20b78118bd91d963ef"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)