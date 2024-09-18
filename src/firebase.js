// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqL7lnooyjmNGAOB5nc4yZcb6FKu8e-2A",
  authDomain: "trafyai-loginsignup.firebaseapp.com",
  projectId: "trafyai-loginsignup",
  storageBucket: "trafyai-loginsignup.appspot.com",
  messagingSenderId: "344792634329",
  appId: "1:344792634329:web:d343ac2461dd2a731dffc8"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the already initialized app
}

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };
