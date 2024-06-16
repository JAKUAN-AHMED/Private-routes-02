// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-c2GFCFap8QZT4JIpzonR914I1xUaUpw",
  authDomain: "private-router-f39e5.firebaseapp.com",
  projectId: "private-router-f39e5",
  storageBucket: "private-router-f39e5.appspot.com",
  messagingSenderId: "425279841823",
  appId: "1:425279841823:web:788bcc76cfc9b93c8d572a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) ;
export default auth;