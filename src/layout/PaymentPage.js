
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';
// import BookingSuccessModal from './BookingSuccessModal';
import PaymentService from '../services/PaymentService';
import BookingSuccessModal from '../component/BookingSuccessModal';

const PaymentPage = () => {
    const location = useLocation();
    const { turfName, date, time, price, location: turfLocation } = location.state || {};
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePayment = async (mode) => {
        if (!date || !time || !mode) {
            alert('Please select a date, time, and payment mode.');
            return;
        }

        const payment = {
            turfName,
            date,
            timeslot: time,
            location: turfLocation,
            price,
            paymentMode: mode,
        };

        try {
            await PaymentService.createPayment(payment);
            setIsSuccessModalOpen(true);
        } catch (error) {
            console.error('Error creating payment:', error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to process payment,as Booking not allowed: Turf is already booked for the selected date and time.'+ <br/> +  
                    'select differnt time slot or differnt turf');
            }
        }
    };

    return (
        <div className="payment-page">
            <h1>Payment Page</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {turfName && date && time && price ? (
                <div className="booking-details">
                    <p><strong>Booking for:</strong> {turfName}</p>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Time:</strong> {time}</p>
                    <p><strong>Price:</strong> ₹{price}</p>
                    <div className="payment-options">
                        <h2>Select Mode of Payment</h2>
                        <button onClick={() => handlePayment('online')}>Online</button>
                        <button onClick={() => handlePayment('offline')}>Offline</button>
                    </div>
                </div>
            ) : (
                <p>No booking details available.</p>
            )}
            <BookingSuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                turfName={turfName}
                date={date}
                time={time}
                price={price}
            />
          {/* <div>
              <button onClick={() => window.location.href='https://www.swiggy.com/instamart/'}>Refreshment</button>
          </div> */}

        </div>
    );
}

export default PaymentPage;
