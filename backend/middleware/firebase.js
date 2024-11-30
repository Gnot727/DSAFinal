import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.js";

const firebase = initializeApp(firebaseConfig);
export default firebase;