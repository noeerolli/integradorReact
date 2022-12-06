// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth} from "firebase/auth"    //para autenticacion de usuarios que registremos o aquellos con cuentas de google

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSeyM0Wm1DbBCJ12zT-3t9DErUHNaTkYI",
  authDomain: "integrador-react-dce73.firebaseapp.com",
  projectId: "integrador-react-dce73",
  storageBucket: "integrador-react-dce73.appspot.com",
  messagingSenderId: "315877634785",
  appId: "1:315877634785:web:fa3d046ab9ea2a59177da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/

/* Bases de datos no relacionales

colecciones con documentos




*/