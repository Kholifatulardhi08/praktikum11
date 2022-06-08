import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUk3eNQy1KUs8Qwu3mMRZta5WImt1bBhY",
    authDomain: "js11-6990e.firebaseapp.com",
    projectId: "js11-6990e",
    storageBucket: "js11-6990e.appspot.com",
    messagingSenderId: "710476504734",
    appId: "1:710476504734:web:47d9c04de91e2954c8a58f"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;