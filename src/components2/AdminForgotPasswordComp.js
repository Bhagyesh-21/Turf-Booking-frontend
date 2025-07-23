import React, { useState } from 'react';
import axios from 'axios';

const AdminForgotPasswordComp = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/forgot-password', {
                email
            });
            // Handle successful request
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email ID:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default AdminForgotPasswordComp;
