import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './BookingsComp.css'; // Add your custom styles if needed

const BookingsComp = () => {
    const user = { email: "user@example.com" }; // Placeholder user data
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        // Simulate an API call or data retrieval
        setTimeout(() => {
            // Example booking data
            const exampleBooking = {
                name: "Turf Name",
                image: "../images/badminton1.jpg", 
                address: "Turf Address",
                time: "10:00 AM - 12:00 PM",
                date: "2025-02-10",
                email: user.email
            };

            if (exampleBooking) {
                setBooking(exampleBooking);
                setError("");
            } else {
                setError("No Bookings found");
            }
            setLoading(false);
        }, 1000);
    }, [user.email]);

    const handleCancel = () => {
        setBooking(null);
        alert("Successfully Canceled Booking");
        navigate("/turf");
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>
                    <p>{error}</p>
                    <button onClick={() => navigate("/turf")}>Let's find turf</button>
                </div>
            ) : (
                <div>
                    <h2>Current Booking</h2>
                    <img src={booking.image} alt="Turf" />
                    <p>Name: {booking.name}</p>
                    <p>Address: {booking.address}</p>
                    <p>Date: {booking.date}</p>
                    <p>Time: {booking.time}</p>
                    <button onClick={handleCancel}>Cancel Booking</button>
                </div>
            )}
        </div>
    );
};

export default BookingsComp;
