// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyApqcGTISs6QRJu-ytCGESnfwR2Mtp4gx0",
  authDomain: "city-parking-a8e21.firebaseapp.com",
  projectId: "city-parking-a8e21",
  storageBucket: "city-parking-a8e21.firebasestorage.app",
  messagingSenderId: "723252251003",
  appId: "1:723252251003:web:cc6efcd818f15341c015de",
  measurementId: "G-EJ4B60H50S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
