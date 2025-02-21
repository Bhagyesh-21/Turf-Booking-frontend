// src/GoogleSignIn.js
import React from 'react';
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './GoogleSignIn.css'; // Import the CSS file

const GoogleSignIn = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('User Info:', result.user);
            navigate('/turf'); // Navigate to the desired route after successful login
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
        }
    };

    return (
        <div id="google-signin-container">
            <button onClick={signInWithGoogle} id="google-signin-button">Sign In with Google</button>
        </div>
    );
};

export default GoogleSignIn;
