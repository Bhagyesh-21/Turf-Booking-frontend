import React, { useState } from 'react';
import axios from 'axios';

const AdminGetTurfOwnerComp = () => {
    const [id, setId] = useState('');
    const [turfOwner, setTurfOwner] = useState(null);
    const [message, setMessage] = useState('');

    const handleGetTurfOwner = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8084/api/turfOwner/${id}`);
            setTurfOwner(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch turf owner details');
        }
    };

    return (
        <form onSubmit={handleGetTurfOwner}>
            <input type="text" placeholder="Turf Owner ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <button type="submit">Get Details</button>
            <p>{message}</p>
            {turfOwner && (
                <div>
                    <p>Name: {turfOwner.turfOwnerName}</p>
                    <p>Username: {turfOwner.turfOwnerUserName}</p>
                    <p>Mobile No: {turfOwner.mobileNo}</p>
                    <p>Email: {turfOwner.emailId}</p>
                </div>
            )}
        </form>
    );
};

export default AdminGetTurfOwnerComp;
