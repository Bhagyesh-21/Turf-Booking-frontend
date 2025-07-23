// with API
import React, { useState } from 'react';
import axios from 'axios';

const AdminRegisterComp = () => {
    const [turfOwner, setTurfOwner] = useState({
        turfOwnerName: '',
        turfOwnerUserName: '',
        mobileNo: '',
        emailId: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/register', turfOwner);
            setMessage(`Registered successfully as ${response.data.turfOwnerName}`);
            console.log(response.data);
        } catch (error) {
            setMessage('Registration failed');
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Turf Owner Name:</label>
                    <input 
                        type="text" 
                        value={turfOwner.turfOwnerName}
                        onChange={(e) => setTurfOwner({...turfOwner, turfOwnerName: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={turfOwner.turfOwnerUserName}
                        onChange={(e) => setTurfOwner({...turfOwner, turfOwnerUserName: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input 
                        type="text" 
                        value={turfOwner.mobileNo}
                        onChange={(e) => setTurfOwner({...turfOwner, mobileNo: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Email ID:</label>
                    <input 
                        type="email" 
                        value={turfOwner.emailId}
                        onChange={(e) => setTurfOwner({...turfOwner, emailId: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={turfOwner.password}
                        onChange={(e) => setTurfOwner({...turfOwner, password: e.target.value})}
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AdminRegisterComp;
