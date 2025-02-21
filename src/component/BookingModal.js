// import React, { useState } from 'react';
// import './BookingModal.css';
// import { useNavigate } from 'react-router-dom';

// const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const navigate = useNavigate();

//     const handleBooking = () => {
//         if (date && time) {
//             alert(`Booking for ${turfName} on ${date} at ${time}`);
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
//                         <option value="5:00 AM">5:00 AM</option>
//                         <option value="4:00 PM">4:00 PM</option>
//                         <option value="10:00 AM">10:00 AM</option>
//                         <option value="7:00 AM">7:00 AM</option>
//                         <option value="6:00 PM">6:00 PM</option>
//                         <option value="9:00 AM">9:00 AM</option>
//                         <option value="8:00 PM">8:00 PM</option>
//                     </select>
//                 </label>
//                 <button onClick={handleBooking}>Confirm Booking</button>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;








// import React, { useState } from 'react';
// import './BookingModal.css';
// import { useNavigate } from 'react-router-dom';

// const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const navigate = useNavigate();

//     const handleBooking = () => {
//         if (date && time) {
//             alert(`Booking for ${turfName} on ${date} at ${time}`);
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
//                         <option value="5:00 AM">5:00 AM</option>
//                         <option value="4:00 PM">4:00 PM</option>
//                         <option value="10:00 AM">10:00 AM</option>
//                         <option value="7:00 AM">7:00 AM</option>
//                         <option value="6:00 PM">6:00 PM</option>
//                         <option value="9:00 AM">9:00 AM</option>
//                         <option value="8:00 PM">8:00 PM</option>
//                     </select>
//                 </label>
//                 <button onClick={handleBooking}>Confirm Booking</button>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;










import React, { useState } from 'react';
import './BookingModal.css';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ isOpen, onClose, turfName, location, price }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleBooking = () => {
        if (date && time) {
            navigate('/payment', { state: { turfName, date, time, price, location } });
        } else {
            alert("Please select a date and time");
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
                        <option value="16:00">4:00 PM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="07:00">7:00 AM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="20:00">8:00 PM</option>
                    </select>
                </label>
                <button onClick={handleBooking}>Confirm Booking</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BookingModal;
