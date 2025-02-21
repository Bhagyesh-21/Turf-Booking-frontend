// import React from 'react';
// import './BookingSuccessModal.css';

// const BookingSuccessModal = ({ isOpen, onClose, turfName, date, time, price }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Your Turf is Booked Successfully!</h2>
//                 <p><strong>Turf Name:</strong> {turfName}</p>
//                 <p><strong>Date:</strong> {date}</p>
//                 <p><strong>Time:</strong> {time}</p>
//                 <p><strong>Price:</strong> ₹{price}</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingSuccessModal;








// import React from 'react';
// import './BookingSuccessModal.css';
// import { useNavigate } from 'react-router-dom';

// const BookingSuccessModal = ({ isOpen, onClose, turfName, date, time, price }) => {
//     const navigate = useNavigate();

//     const handleClose = () => {
//         onClose();
//         navigate('/turf');
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Your Turf is Booked Successfully!</h2>
//                 <p><strong>Turf Name:</strong> {turfName}</p>
//                 <p><strong>Date:</strong> {date}</p>
//                 <p><strong>Time:</strong> {time}</p>
//                 <p><strong>Price:</strong> ₹{price}</p>
//                 <button onClick={handleClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default BookingSuccessModal;












import React from 'react';
import './BookingSuccessModal.css';
import { useNavigate } from 'react-router-dom';

const BookingSuccessModal = ({ isOpen, onClose, turfName, date, time, price }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/turf');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Your Turf is Booked Successfully!</h2>
                <p><strong>Turf Name:</strong> {turfName}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Price:</strong> ₹{price}</p>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default BookingSuccessModal;
