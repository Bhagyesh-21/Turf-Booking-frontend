// import React from 'react';
// import './PaymentPopup.css'; // Add custom styles for the component

// const PaymentPopup = ({ isOpen, onClose, turfName, date, time, price, paymentMode }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="payment-popup-overlay">
//             <div className="payment-popup">
//                 <h2>Payment Successful!</h2>
//                 <p><strong>Turf Name:</strong> {turfName}</p>
//                 <p><strong>Date:</strong> {date}</p>
//                 <p><strong>Time:</strong> {time}</p>
//                 <p><strong>Price:</strong> ₹{price}</p>
//                 <p><strong>Payment Mode:</strong> {paymentMode}</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default PaymentPopup;








// import React, { useState, useEffect } from 'react';
// import './PaymentPopup.css'; // Add custom styles for the component

// const PaymentPopup = ({ isOpen, onClose, paymentData }) => {
//     const [popupData, setPopupData] = useState(null);

//     useEffect(() => {
//         if (isOpen && paymentData) {
//             setPopupData(paymentData);
//         }
//     }, [isOpen, paymentData]);

//     if (!isOpen || !popupData) return null;

//     const { turfName, date, time, price, paymentMode } = popupData;

//     return (
//         <div className="payment-popup-overlay">
//             <div className="payment-popup">
//                 <h2>Payment Successful!</h2>
//                 <p><strong>Turf Name:</strong> {turfName}</p>
//                 <p><strong>Date:</strong> {date}</p>
//                 <p><strong>Time:</strong> {time}</p>
//                 <p><strong>Price:</strong> ₹{price}</p>
//                 <p><strong>Payment Mode:</strong> {paymentMode}</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default PaymentPopup;







import React, { useState, useEffect } from 'react';
import './PaymentPopup.css'; // Add custom styles for the component

const PaymentPopup = ({ isOpen, onClose, onProceed }) => {
    const [tid, setTid] = useState('');

    if (!isOpen) return null;

    const handleProceed = () => {
        onProceed(tid);
    };

    return (
        <div className="payment-popup-overlay">
            <div className="payment-popup">
                <h2>Enter Transaction ID</h2>
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                <input
                    type="text"
                    value={tid}
                    onChange={(e) => setTid(e.target.value)}
                    placeholder="Enter TID"
                />
                <button onClick={handleProceed}>Proceed</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const PaymentSuccessPopup = ({ isOpen, onClose, paymentData }) => {
    if (!isOpen || !paymentData) return null;

    const { turfName, date, time, price, paymentMode } = paymentData;

    return (
        <div className="payment-popup-overlay">
            <div className="payment-popup">
                <h2>Payment Successful!</h2>
                <p><strong>Turf Name:</strong> {turfName}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Price:</strong> ₹{price}</p>
                <p><strong>Payment Mode:</strong> {paymentMode}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const App = () => {
    const [isPaymentPopupOpen, setPaymentPopupOpen] = useState(false);
    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const [paymentData, setPaymentData] = useState({
        turfName: 'Soccer Turf',
        date: '2025-02-13',
        time: '18:00',
        price: 500,
        paymentMode: 'Credit Card'
    });

    const handleProceed = (tid) => {
        console.log('Transaction ID:', tid);
        // Simulate payment processing
        setTimeout(() => {
            setSuccessPopupOpen(true);
            setPaymentPopupOpen(false);
        }, 2000);
    };

    const handleClose = () => {
        setPaymentPopupOpen(false);
        setSuccessPopupOpen(false);
    };

    return (
        <div>
            <button onClick={() => setPaymentPopupOpen(true)}>Open Payment Popup</button>
            <PaymentPopup
                isOpen={isPaymentPopupOpen}
                onClose={handleClose}
                onProceed={handleProceed}
            />
            <PaymentSuccessPopup
                isOpen={isSuccessPopupOpen}
                onClose={handleClose}
                paymentData={paymentData}
            />
        </div>
    );
};

export default App;
