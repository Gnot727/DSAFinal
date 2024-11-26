// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCeiAL6qSxd05CjH_JkYMNw3_aaltgVFo",
  authDomain: "dsafinal-77700.firebaseapp.com",
  projectId: "dsafinal-77700",
  storageBucket: "dsafinal-77700.firebasestorage.app",
  messagingSenderId: "597454611350",
  appId: "1:597454611350:web:4f7d9e76d8f2f2fee533b7",
  measurementId: "G-1T82SRFJQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);