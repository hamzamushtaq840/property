import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCCF4HW6BqQdYmlpRe8dFS-G_qvROFwaHc",
    authDomain: "property-project-7463c.firebaseapp.com",
    projectId: "property-project-7463c",
    storageBucket: "property-project-7463c.appspot.com",
    messagingSenderId: "585783374570",
    appId: "1:585783374570:web:bd05a6ac2b13603b439d93",
    measurementId: "G-ECXVNJ8PD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)
export { auth, db }
