import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCqXJHKw-oD2ONSQC9pwaM34Qchbxz3aBE",
  authDomain: "screen-text-4d525.firebaseapp.com",
  projectId: "screen-text-4d525",
  storageBucket: "screen-text-4d525.appspot.com",
  messagingSenderId: "837973930161",
  appId: "1:837973930161:web:ccd9a4c091553d187fb290",
  measurementId: "G-6RK05JHM57"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();