import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserAccountComp.css';

const UserAccountComp = () => {
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        // Fetch the latest user booking data from the API
        const fetchLatestBooking = async () => {
            try {
                const response = await axios.get('http://localhost:8082/api/payments/latest');
                setBooking(response.data);
            } catch (error) {
                console.error('Error fetching latest booking:', error);
            }
        };

        fetchLatestBooking();
    }, []);

    return (
        <div id="user-account">
            <h2>User Account</h2>
            <h3>Your Latest Turf Booking</h3>
            {booking ? (
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Turf Name</th>
                            <th>Date</th>
                            <th>Timeslot</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{booking.id}</td>
                            <td>{booking.turfName}</td>
                            <td>{booking.date}</td>
                            <td>{booking.timeslot}</td>
                            <td>{booking.price}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default UserAccountComp;