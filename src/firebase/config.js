// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0OoYHcwmXmJQkzS0ClP5mcxPiZ0V2Bps",
    authDomain: "getwork-5691b.firebaseapp.com",
    databaseURL: "https://getwork-5691b-default-rtdb.firebaseio.com",
    projectId: "getwork-5691b",
    storageBucket: "getwork-5691b.appspot.com",
    messagingSenderId: "282151736155",
    appId: "1:282151736155:web:fa6993ae2c94d12aad007e",
    measurementId: "G-7KVBCZPHD1"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectFireStore = app.firestore();
const projectStorage = app.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = app.auth();

export { projectStorage, projectFireStore, timestamp, auth };
