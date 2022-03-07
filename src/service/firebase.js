// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_K3JpPsBYAoyGmqdr8gw7yM6gssu-Glw",
  authDomain: "veikkel-react.firebaseapp.com",
  projectId: "veikkel-react",
  storageBucket: "veikkel-react.appspot.com",
  messagingSenderId: "1036429877485",
  appId: "1:1036429877485:web:411eecb4236e154879ace4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db