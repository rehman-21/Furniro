// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvinDqTUSzj6WsSg_Iu89cXib_S8Lyp6k",
  authDomain: "furniro-3c2c7.firebaseapp.com",
  projectId: "furniro-3c2c7",
  storageBucket: "furniro-3c2c7.appspot.com",
  messagingSenderId: "1005055777495",
  appId: "1:1005055777495:web:1f0b287efe741f81b66e92",
  measurementId: "G-VBV5KP7ZQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
