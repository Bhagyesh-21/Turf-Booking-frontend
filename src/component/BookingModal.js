
import React, { useState } from 'react';
import './BookingModal.css';
import { useNavigate } from 'react-router-dom';
import PaymentService from '../services/PaymentService';

const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [checking, setChecking] = useState(false);
    const navigate = useNavigate();

    const handleBooking = async () => {
        if (!date || !time) {
            alert("Please select a date and time");
            return;
        }

        const payment = {
            turfName,
            date,
            timeslot: time,
            location,
            price,
            paymentMode: 'precheck' // Used for availability check only
        };

        setChecking(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await PaymentService.createPayment(payment); // Backend checks for conflicts 
            setSuccessMessage('Slot is available!');
            setTimeout(() => {
                navigate('/payment', { state: { turfName, date, time, price, location } });
            }, 1000); // Slight delay for UX for payment waiting
        } catch (error) {
            console.error('Booking validation failed:', error);
            if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('This time slot is already booked. Please choose another.');
            }
        } finally {
            setChecking(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Booking for {turfName}</h2>

                <label>
                    Select Date
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>

                <label>
                    Select Time
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value="">Select Time</option>
                        <option value="05:00">5:00 AM</option>
                        <option value="06:00">6:00 AM</option>
                        <option value="07:00">7:00 AM</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="22:00">10:00 PM</option>
                    </select>
                </label>

                {checking && <p>Checking availability...</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}

                <button onClick={handleBooking} disabled={checking}>
                    {checking ? 'Checking...' : 'Confirm Booking'}
                </button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BookingModal;












// import React, { useState } from 'react';
// import './BookingModal.css';
// import { useNavigate } from 'react-router-dom';

// const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const navigate = useNavigate();

//     const handleBooking = () => {
//         if (date && time) {
//             navigate('/payment', { state: { turfName, date, time, price, location } });
//         } else {
//             alert("Please select a date and time");
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Booking for {turfName}</h2>
//                 <label>
//                     Select Date
//                     <input 
//                         type="date" 
//                         value={date} 
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Select Time
//                     <select value={time} onChange={(e) => setTime(e.target.value)}>
//                         <option value="">Select Time</option>
//                         <option value="05:00">5:00 AM</option>
//                         <option value="6:00">6:00 AM</option>
//                         <option value="7:00">7:00 AM</option>
//                         <option value="8:00">8:00 AM</option>
//                         <option value="9:00">9:00 AM</option>
//                         <option value="10:00">10:00 AM</option>
//                         <option value="11:00">11:00 AM</option>
//                         <option value="16:00">4:00 PM</option>
//                         <option value="17:00">5:00 PM</option>
//                         <option value="18:00">6:00 PM</option>
//                         <option value="19:00">7:00 PM</option>
//                         <option value="20:00">8:00 PM</option>
//                         <option value="21:00">9:00 PM</option>
//                         <option value="22:00">10:00 PM</option>
//                     </select>
//                 </label>
//                 <button onClick={handleBooking}>Confirm Booking</button>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;








// import React, { useState, useEffect } from 'react';
// import './BookingModal.css';
// import { useNavigate } from 'react-router-dom';
// import AvailabilityService from '../services/AvailabilityService'; // You’ll need to create this

// const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [isAvailable, setIsAvailable] = useState(null);
//     const [checkingAvailability, setCheckingAvailability] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const checkSlot = async () => {
//             if (date && time) {
//                 setCheckingAvailability(true);
//                 try {
//                     const response = await AvailabilityService.checkSlot(turfName, date, time);
//                     setIsAvailable(response.available);
//                 } catch (error) {
//                     console.error('Error checking availability:', error);
//                     setIsAvailable(null);
//                 } finally {
//                     setCheckingAvailability(false);
//                 }
//             }
//         };
//         checkSlot();
//     }, [date, time, turfName]);

//     const handleBooking = () => {
//         if (!date || !time) {
//             alert("Please select a date and time");
//             return;
//         }

//         if (!isAvailable) {
//             alert("Selected time slot is unavailable. Please choose a different time.");
//             return;
//         }

//         navigate('/payment', { state: { turfName, date, time, price, location } });
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Booking for {turfName}</h2>
//                 <label>
//                     Select Date
//                     <input 
//                         type="date" 
//                         value={date} 
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Select Time
//                     <select value={time} onChange={(e) => setTime(e.target.value)}>
//                         <option value="">Select Time</option>
//                         <option value="05:00">5:00 AM</option>
//                         <option value="06:00">6:00 AM</option>
//                         <option value="07:00">7:00 AM</option>
//                         <option value="08:00">8:00 AM</option>
//                         <option value="09:00">9:00 AM</option>
//                         <option value="10:00">10:00 AM</option>
//                         <option value="11:00">11:00 AM</option>
//                         <option value="16:00">4:00 PM</option>
//                         <option value="17:00">5:00 PM</option>
//                         <option value="18:00">6:00 PM</option>
//                         <option value="19:00">7:00 PM</option>
//                         <option value="20:00">8:00 PM</option>
//                         <option value="21:00">9:00 PM</option>
//                         <option value="22:00">10:00 PM</option>
//                     </select>
//                 </label>

//                 {checkingAvailability && <p>Checking availability...</p>}
//                 {isAvailable === false && <p className="error-message">This time slot is already booked. Please choose another.</p>}
//                 {isAvailable === true && <p className="success-message">Slot is available!</p>}

//                 <button onClick={handleBooking} disabled={!isAvailable || checkingAvailability}>
//                     Confirm Booking
//                 </button>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;









// import React, { useState } from 'react';
// import './BookingModal.css';
// import { useNavigate } from 'react-router-dom';
// import PaymentService from '../services/PaymentService';

// const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [checking, setChecking] = useState(false);
//     const navigate = useNavigate();

//     const handleBooking = async () => {
//         if (!date || !time) {
//             alert("Please select a date and time");
//             return;
//         }

//         const payment = {
//             turfName,
//             date,
//             timeslot: time,
//             location,
//             price,
//             paymentMode: 'precheck' // This won't trigger actual booking
//         };

//         setChecking(true);
//         setErrorMessage('');
//         setSuccessMessage('');

//         try {
//             await PaymentService.createPayment(payment); // Backend checks for conflicts
//             setSuccessMessage('Slot is available!');
//             setTimeout(() => {
//                 navigate('/payment', { state: { turfName, date, time, price, location } });
//             }, 1000); // Slight delay for UX
//         } catch (error) {
//             console.error('Booking validation failed:', error);
//             if (error.response?.data?.message) {
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 setErrorMessage('This time slot is already booked. Please choose another.');
//             }
//         } finally {
//             setChecking(false);
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Booking for {turfName}</h2>

//                 <label>
//                     Select Date
//                     <input 
//                         type="date" 
//                         value={date} 
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                 </label>

//                 <label>
//                     Select Time
//                     <select value={time} onChange={(e) => setTime(e.target.value)}>
//                         <option value="">Select Time</option>
//                         <option value="05:00">5:00 AM</option>
//                         <option value="06:00">6:00 AM</option>
//                         <option value="07:00">7:00 AM</option>
//                         <option value="08:00">8:00 AM</option>
//                         <option value="09:00">9:00 AM</option>
//                         <option value="10:00">10:00 AM</option>
//                         <option value="11:00">11:00 AM</option>
//                         <option value="16:00">4:00 PM</option>
//                         <option value="17:00">5:00 PM</option>
//                         <option value="18:00">6:00 PM</option>
//                         <option value="19:00">7:00 PM</option>
//                         <option value="20:00">8:00 PM</option>
//                         <option value="21:00">9:00 PM</option>
//                         <option value="22:00">10:00 PM</option>
//                     </select>
//                 </label>

//                 {checking && <p>Checking availability...</p>}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}

//                 <button onClick={handleBooking} disabled={checking}>
//                     {checking ? 'Checking...' : 'Confirm Booking'}
//                 </button>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;
