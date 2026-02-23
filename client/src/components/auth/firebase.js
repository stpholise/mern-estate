// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-49985.firebaseapp.com",
  projectId: "mern-estate-49985",
  storageBucket: "mern-estate-49985.firebasestorage.app",
  messagingSenderId: "509086261035",
  appId: "1:509086261035:web:5d019cf775a5331ca0ef6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);