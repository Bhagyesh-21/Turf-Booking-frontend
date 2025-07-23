//==================
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgATp5wyXizrXmRCBi0QiOiqTwywZUDkU",
    authDomain: "turf-3b304.firebaseapp.com",
    projectId: "turf-3b304",
    storageBucket: "turf-3b304.firebasestorage.app",
    messagingSenderId: "723000837891",
    appId: "1:723000837891:web:fed1517d9c2e0fb6a8cb36",
    measurementId: "G-6M5DFTM4K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
