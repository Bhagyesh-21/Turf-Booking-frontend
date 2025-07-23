import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLoginComp.css';

const AdminLoginComp = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
                params: { emailId, password }
            });
            // Handle successful login
            console.log(response.data);
            setMessage(`Welcome, ${response.data.turfOwnerName}`);
            // navigate('/admin-dashboard');
            navigate('/admin-turf');
        } catch (error) {
            // Handle error
            setMessage('Login failed: ' + (error.response ? error.response.data : error.message));
            console.error(error);
        }
    };

    return (
        <div id="admin-login">
            <h2 >Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label >Email ID:</label> */}
                    <input 
                        type="email" 
                        placeholder='Email id'
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    {/* <label>Password:</label> */}
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div id="admin-remember-me">
                    <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    {/* <label style={{ color:'black'}}>Remember Me</label> */}
                    <label>Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLoginComp;
