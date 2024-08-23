// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5yKxg6mo1iAox0OwexsaIwUovJV8TfM",
  authDomain: "rescrap-64175.firebaseapp.com",
  projectId: "rescrap-64175",
  storageBucket: "rescrap-64175.appspot.com",
  messagingSenderId: "932142338051",
  appId: "1:932142338051:web:e6144151e9d96e9942be36",
  measurementId: "G-KW0HEDMBWW",
  databaseURL: "https://rescrap-64175-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, storage };
