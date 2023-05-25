import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCgUCt_cApVvWDU8LBcIkltImmB71koROw",
  authDomain: "retink-de13d.firebaseapp.com",
  projectId: "retink-de13d",
  storageBucket: "retink-de13d.appspot.com",
  messagingSenderId: "744537473050",
  appId: "1:744537473050:web:21c8f47d8a28ba8f5f11a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, signInWithEmailAndPassword, createUserWithEmailAndPassword}
