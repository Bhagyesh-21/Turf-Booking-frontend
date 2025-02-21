import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/users/forgot-password', {
        email,
      });
      console.log(response.data);
      alert('Password reset email sent');
    } catch (error) {
      console.error('Error sending reset email:', error);
      alert('Failed to send reset email');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Send Reset Email</button>
    </div>
  );
};

export default ForgotPassword;
