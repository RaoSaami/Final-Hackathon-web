import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIyTjCixIhxdEbCEfdqHMkd7YumQv7kLA",
  authDomain: "hackathon-final-a0ef3.firebaseapp.com",
  projectId: "hackathon-final-a0ef3",
  storageBucket: "hackathon-final-a0ef3.appspot.com",
  messagingSenderId: "420418000616",
  appId: "1:420418000616:web:e5cc88ffb298dcaf539b5d",
  measurementId: "G-ZE5JFMRWSQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};