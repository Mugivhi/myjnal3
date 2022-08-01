import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
//
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyAoUF_3Vu9OG7rtFbgZCv6usD6Mcakdmvw",
  authDomain: "phone-auth-1b959.firebaseapp.com",
  databaseURL: "https://phone-auth-1b959-default-rtdb.firebaseio.com",
  projectId: "phone-auth-1b959",
  storageBucket: "phone-auth-1b959.appspot.com",
  messagingSenderId: "300109940565",
  appId: "1:300109940565:web:fce40aa6f1525cd0c551dc"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();