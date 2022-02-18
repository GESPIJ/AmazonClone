//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBw6mvPZfCZeKu2ObShUUqOUZsEn-Tobkc",
  authDomain: "clone-109e3.firebaseapp.com",
  projectId: "clone-109e3",
  storageBucket: "clone-109e3.appspot.com",
  messagingSenderId: "506170467384",
  appId: "1:506170467384:web:bb51f60c319486412272cd",
  measurementId: "G-KYJV3X20JW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
