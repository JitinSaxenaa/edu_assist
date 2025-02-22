// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAorTOXcXwEOY1V33J7lFJ_PEbUjQLCzQ4",
  authDomain: "eduassist-24456.firebaseapp.com",
  projectId: "eduassist-24456",
  storageBucket: "eduassist-24456.firebasestorage.app",
  messagingSenderId: "714958948857",
  appId: "1:714958948857:web:fecd8f2456a03edbfb1528",
  measurementId: "G-19LEL7K61E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);