// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOErD6U6Jbnyb_82zi4BvLoQo2VvaBag",
  authDomain: "straba-88665.firebaseapp.com",
  projectId: "straba-88665",
  storageBucket: "straba-88665.appspot.com",
  messagingSenderId: "610821342416",
  appId: "1:610821342416:web:ce94a09ae3ff848d558ad5",
  measurementId: "G-2NDRLD3PV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export default db;