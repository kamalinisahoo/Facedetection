// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByC__vdcAPKSXxRuPNjjHb5GV-Jquc2oI",
  authDomain: "react-authentication-c62e1.firebaseapp.com",
  projectId: "react-authentication-c62e1",
  storageBucket: "react-authentication-c62e1.appspot.com",
  messagingSenderId: "199531818501",
  appId: "1:199531818501:web:5e61b8d62972bbb554b66c",
  measurementId: "G-5LD9LKEX1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;