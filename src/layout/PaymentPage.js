// // // // // // import React from 'react';
// // // // // // import { useLocation } from 'react-router-dom';

// // // // // // const PaymentPage = () => {
// // // // // //     const location = useLocation();
// // // // // //     const { turfName, date, time } = location.state || {};

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <h1>Payment Page</h1>
// // // // // //             {turfName && date && time ? (
// // // // // //                 <div>
// // // // // //                     <p>Booking for: {turfName}</p>
// // // // // //                     <p>Date: {date}</p>
// // // // // //                     <p>Time: {time}</p>
// // // // // //                     {/* Add your payment processing logic here */}
// // // // // //                 </div>
// // // // // //             ) : (
// // // // // //                 <p>No booking details available.</p>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default PaymentPage;









// // // // // import React, { useState } from 'react';
// // // // // import { useLocation } from 'react-router-dom';
// // // // // import './PaymentPage.css';
// // // // // import BookingSuccessModal from '../component/BookingSuccessModal';

// // // // // const PaymentPage = () => {
// // // // //     const location = useLocation();
// // // // //     const { turfName, date, time, price } = location.state || {};
// // // // //     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

// // // // //     const handlePayment = (mode) => {
// // // // //         if (mode === 'online') {
// // // // //             alert('Redirecting to online payment gateway...');
// // // // //             // Add your online payment processing logic here
// // // // //         } else {
// // // // //             alert('Booking confirmed. Pay offline at the venue.');
// // // // //             // Add your offline payment processing logic here
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="payment-page">
// // // // //             <h1>Payment Page</h1>
// // // // //             {turfName && date && time && price ? (
// // // // //                 <div className="booking-details">
// // // // //                     <p><strong>Booking for:</strong> {turfName}</p>
// // // // //                     <p><strong>Date:</strong> {date}</p>
// // // // //                     <p><strong>Time:</strong> {time}</p>
// // // // //                     <p><strong>Price:</strong> ₹{price}</p>
// // // // //                     <div className="payment-options">
// // // // //                         <h2>Select Mode of Payment</h2>
// // // // //                         <button onClick={() => handlePayment('online')}>Online</button>
// // // // //                         <button onClick={() => handlePayment('offline')}>Offline</button>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             ) : (
// // // // //                 <p>No booking details available.</p>
// // // // //             )}
// // // // //              <BookingSuccessModal
// // // // //                 isOpen={isSuccessModalOpen}
// // // // //                 onClose={() => setIsSuccessModalOpen(false)}
// // // // //                 turfName={turfName}
// // // // //                 date={date}
// // // // //                 time={time}
// // // // //                 price={price}
// // // // //             />
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default PaymentPage;











// // // // import React, { useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import './PaymentPage.css';
// // // // import BookingSuccessModal from '../component/BookingSuccessModal';
// // // // // import BookingSuccessModal from './BookingSuccessModal';

// // // // const PaymentPage = () => {
// // // //     const location = useLocation();
// // // //     const { turfName, date, time, price } = location.state || {};
// // // //     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

// // // //     const handlePayment = (mode) => {
// // // //         if (mode === 'online') {
// // // //             alert('Redirecting to online payment gateway...');
// // // //             // Add your online payment processing logic here
// // // //             setIsSuccessModalOpen(true);
// // // //         } else {
// // // //             alert('Booking confirmed. Pay offline at the venue.');
// // // //             // Add your offline payment processing logic here
// // // //             setIsSuccessModalOpen(true);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="payment-page">
// // // //             <h1>Payment Page</h1>
// // // //             {turfName && date && time && price ? (
// // // //                 <div className="booking-details">
// // // //                     <p><strong>Booking for:</strong> {turfName}</p>
// // // //                     <p><strong>Date:</strong> {date}</p>
// // // //                     <p><strong>Time:</strong> {time}</p>
// // // //                     <p><strong>Price:</strong> ₹{price}</p>
// // // //                     <div className="payment-options">
// // // //                         <h2>Select Mode of Payment</h2>
// // // //                         <button onClick={() => handlePayment('online')}>Online</button>
// // // //                         <button onClick={() => handlePayment('offline')}>Offline</button>
// // // //                     </div>
// // // //                 </div>
// // // //             ) : (
// // // //                 <p>No booking details available.</p>
// // // //             )}
// // // //             <BookingSuccessModal
// // // //                 isOpen={isSuccessModalOpen}
// // // //                 onClose={() => setIsSuccessModalOpen(false)}
// // // //                 turfName={turfName}
// // // //                 date={date}
// // // //                 time={time}
// // // //                 price={price}
                
// // // //             />
// // // //         </div>
// // // //     );
// // // // }

// // // // export default PaymentPage;










// // // // import React, { useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import './PaymentPage.css';
// // // // import BookingSuccessModal from '../component/BookingSuccessModal';
// // // // import PaymentService from '../services/PaymentService';

// // // // const PaymentPage = () => {
// // // //     const location = useLocation();
// // // //     const { turfName, date, time, price } = location.state || {};
// // // //     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

// // // //     const handlePayment = async (mode) => {
// // // //         if (!date || !time || !mode) {
// // // //             alert('Please select a date, time, and payment mode.');
// // // //             return;
// // // //         }

// // // //         const payment = {
// // // //             selectedDate: date,
// // // //             selectedTimeSlot: time,
// // // //             paymentMode: mode,
// // // //         };

// // // //         try {
// // // //             await PaymentService.createPayment(payment);
// // // //             setIsSuccessModalOpen(true);
// // // //         } catch (error) {
// // // //             console.error('Error creating payment:', error);
// // // //             alert('Failed to process payment. Please try again.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="payment-page">
// // // //             <h1>Payment Page</h1>
// // // //             {turfName && date && time && price ? (
// // // //                 <div className="booking-details">
// // // //                     <p><strong>Booking for:</strong> {turfName}</p>
// // // //                     <p><strong>Date:</strong> {date}</p>
// // // //                     <p><strong>Time:</strong> {time}</p>
// // // //                     <p><strong>Price:</strong> ₹{price}</p>
// // // //                     <div className="payment-options">
// // // //                         <h2>Select Mode of Payment</h2>
// // // //                         <button onClick={() => handlePayment('online')}>Online</button>
// // // //                         <button onClick={() => handlePayment('offline')}>Offline</button>
// // // //                     </div>
// // // //                 </div>
// // // //             ) : (
// // // //                 <p>No booking details available.</p>
// // // //             )}
// // // //             <BookingSuccessModal
// // // //                 isOpen={isSuccessModalOpen}
// // // //                 onClose={() => setIsSuccessModalOpen(false)}
// // // //                 turfName={turfName}
// // // //                 date={date}
// // // //                 time={time}
// // // //                 price={price}
// // // //             />
// // // //         </div>
// // // //     );
// // // // }

// // // // export default PaymentPage;






// // // // import React, { useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import './PaymentPage.css';
// // // // // import BookingSuccessModal from './BookingSuccessModal';
// // // // import PaymentService from '../services/PaymentService';
// // // // import BookingSuccessModal from '../component/BookingSuccessModal';

// // // // const PaymentPage = () => {
// // // //     const location = useLocation();
// // // //     const { turfName, date, time, location: turfLocation, price } = location.state || {};
// // // //     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

// // // //     const handlePayment = async (mode) => {
// // // //         if (!date || !time || !mode) {
// // // //             alert('Please select a date, time, and payment mode.');
// // // //             return;
// // // //         }

// // // //         const payment = {
// // // //             turfName,
// // // //             date,
// // // //             timeslot: time,
// // // //             location: turfLocation,
// // // //             price,
// // // //             paymentMode: mode,
// // // //         };

// // // //         try {
// // // //             await PaymentService.createPayment(payment);
// // // //             setIsSuccessModalOpen(true);
// // // //         } catch (error) {
// // // //             console.error('Error creating payment:', error);
// // // //             alert('Failed to process payment. Please try again.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="payment-page">
// // // //             <h1>Payment Page</h1>
// // // //             {turfName && date && time && price ? (
// // // //                 <div className="booking-details">
// // // //                     <p><strong>Booking for:</strong> {turfName}</p>
// // // //                     <p><strong>Date:</strong> {date}</p>
// // // //                     <p><strong>Time:</strong> {time}</p>
// // // //                     <p><strong>Price:</strong> ₹{price}</p>
// // // //                     <p><strong>Location:</strong> {turfLocation}</p>
// // // //                     <div className="payment-options">
// // // //                         <h2>Select Mode of Payment</h2>
// // // //                         <button onClick={() => handlePayment('online')}>Online</button>
// // // //                         <button onClick={() => handlePayment('offline')}>Offline</button>
// // // //                     </div>
// // // //                 </div>
// // // //             ) : (
// // // //                 <p>No booking details available.</p>
// // // //             )}
// // // //             <BookingSuccessModal
// // // //                 isOpen={isSuccessModalOpen}
// // // //                 onClose={() => setIsSuccessModalOpen(false)}
// // // //                 turfName={turfName}
// // // //                 date={date}
// // // //                 time={time}
// // // //                 price={price}
// // // //             />
// // // //         </div>
// // // //     );
// // // // }

// // // // export default PaymentPage;











// // // // import React, { useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import './PaymentPage.css';
// // // // import PaymentService from '../services/PaymentService';
// // // // import BookingSuccessModal from '../component/BookingSuccessModal';

// // // // const PaymentPage = () => {
// // // //     const location = useLocation();
// // // //     const { turfName, date, time, price, location: turfLocation } = location.state || {};
// // // //     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

// // // //     const handlePayment = async (mode) => {
// // // //         if (!date || !time || !mode) {
// // // //             alert('Please select a date, time, and payment mode.');
// // // //             return;
// // // //         }

// // // //         const payment = {
// // // //             turfName,
// // // //             date, // sending LocalDate format
// // // //             timeslot: time,
// // // //             location: turfLocation,
// // // //             price,
// // // //             paymentMode: mode,
// // // //         };

// // // //         try {
// // // //             await PaymentService.createPayment(payment);
// // // //             setIsSuccessModalOpen(true);
// // // //         } catch (error) {
// // // //             console.error('Error creating payment:', error);
// // // //             alert('Failed to process payment. Please try again.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="payment-page">
// // // //             <h1>Payment Page</h1>
// // // //             {turfName && date && time && price ? (
// // // //                 <div className="booking-details">
// // // //                     <p><strong>Booking for:</strong> {turfName}</p>
// // // //                     <p><strong>Date:</strong> {date}</p>
// // // //                     <p><strong>Time:</strong> {time}</p>
// // // //                     <p><strong>Price:</strong> ₹{price}</p>
// // // //                     <div className="payment-options">
// // // //                         <h2>Select Mode of Payment</h2>
// // // //                         <button onClick={() => handlePayment('online')}>Online</button>
// // // //                         <button onClick={() => handlePayment('offline')}>Offline</button>
// // // //                     </div>
// // // //                 </div>
// // // //             ) : (
// // // //                 <p>No booking details available.</p>
// // // //             )}
// // // //             <BookingSuccessModal
// // // //                 isOpen={isSuccessModalOpen}
// // // //                 onClose={() => setIsSuccessModalOpen(false)}
// // // //                 turfName={turfName}
// // // //                 date={date}
// // // //                 time={time}
// // // //                 price={price}
// // // //             />
// // // //         </div>
// // // //     );
// // // // }

// // // // export default PaymentPage;














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








// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './PaymentPage.css';
// import PaymentService from '../services/PaymentService';
// import PaymentPopup from '../component/PaymentPopup';

// const PaymentPage = () => {
//     const location = useLocation();
//     const { turfName, date, time, price, location: turfLocation } = location.state || {};
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [paymentMode, setPaymentMode] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handlePayment = async (mode) => {
//         if (!date || !time || !mode) {
//             alert('Please select a date, time, and payment mode.');
//             return;
//         }

//         const payment = {
//             turfName,
//             date,
//             timeslot: time,
//             location: turfLocation,
//             price,
//             paymentMode: mode,
//         };

//         try {
//             await PaymentService.createPayment(payment);
//             setPaymentMode(mode);
//             setIsPopupOpen(true);
//         } catch (error) {
//             console.error('Error creating payment:', error);
//             if (error.response && error.response.data && error.response.data.message) {
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 setErrorMessage('Failed to process payment, as Booking not allowed: Turf is already booked for the selected date and time.' + 
//                     '\nSelect different time slot or different turf');
//             }
//         }
//     };

//     return (
//         <div className="payment-page">
//             <h1>Payment Page</h1>
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//             {turfName && date && time && price ? (
//                 <div className="booking-details">
//                     <p><strong>Booking for:</strong> {turfName}</p>
//                     <p><strong>Date:</strong> {date}</p>
//                     <p><strong>Time:</strong> {time}</p>
//                     <p><strong>Price:</strong> ₹{price}</p>
//                     <div className="payment-options">
//                         <h2>Select Mode of Payment</h2>
//                         <button onClick={() => handlePayment('online')}>Online</button>
//                         <button onClick={() => handlePayment('offline')}>Offline</button>
//                     </div>
//                 </div>
//             ) : (
//                 <p>No booking details available.</p>
//             )}
//             <PaymentPopup
//                 isOpen={isPopupOpen}
//                 onClose={() => setIsPopupOpen(false)}
//                 turfName={turfName}
//                 date={date}
//                 time={time}
//                 price={price}
//                 paymentMode={paymentMode}
//             />
//         </div>
//     );
// };

// export default PaymentPage;








// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './PaymentPage.css';
// import PaymentService from '../services/PaymentService';
// import PaymentPopup from '../component/PaymentPopup';
// import BookingService from '../component/BookingService';
// // import BookingService from '../services/BookingService';

// const PaymentPage = () => {
//     const location = useLocation();
//     const { turfName, date, time, price, location: turfLocation } = location.state || {};
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [paymentMode, setPaymentMode] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handlePayment = async (mode) => {
//         if (!date || !time || !mode) {
//             alert('Please select a date, time, and payment mode.');
//             return;
//         }

//         const payment = {
//             turfName,
//             date,
//             timeslot: time,
//             location: turfLocation,
//             price,
//             paymentMode: mode,
//         };

//         try {
//             await PaymentService.createPayment(payment);
//             setPaymentMode(mode);
//             setIsPopupOpen(true);

//             // Store booking data
//             BookingService.addBooking(payment);
//         } catch (error) {
//             console.error('Error creating payment:', error);
//             if (error.response && error.response.data && error.response.data.message) {
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 setErrorMessage('Failed to process payment, as Booking not allowed: Turf is already booked for the selected date and time.' + 
//                     '\nSelect different time slot or different turf');
//             }
//         }
//     };

//     return (
//         <div className="payment-page">
//             <h1>Payment Page</h1>
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//             {turfName && date && time && price ? (
//                 <div className="booking-details">
//                     <p><strong>Booking for:</strong> {turfName}</p>
//                     <p><strong>Date:</strong> {date}</p>
//                     <p><strong>Time:</strong> {time}</p>
//                     <p><strong>Price:</strong> ₹{price}</p>
//                     <div className="payment-options">
//                         <h2>Select Mode of Payment</h2>
//                         <button onClick={() => handlePayment('online')}>Online</button>
//                         <button onClick={() => handlePayment('offline')}>Offline</button>
//                     </div>
//                 </div>
//             ) : (
//                 <p>No booking details available.</p>
//             )}
//             <PaymentPopup
//                 isOpen={isPopupOpen}
//                 onClose={() => setIsPopupOpen(false)}
//                 turfName={turfName}
//                 date={date}
//                 time={time}
//                 price={price}
//                 paymentMode={paymentMode}
//             />
//         </div>
//     );
// };

// export default PaymentPage;










// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './PaymentPage.css';
// import PaymentService from '../services/PaymentService';
// import PaymentPopup from '../component/PaymentPopup';
// import BookingService from '../component/BookingService';
// // import BookingService from '../services/BookingService';

// const PaymentPage = () => {
//     const location = useLocation();
//     const { turfName, date, time, price, location: turfLocation } = location.state || {};
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [paymentMode, setPaymentMode] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handlePayment = async (mode) => {
//         if (!date || !time || !mode) {
//             alert('Please select a date, time, and payment mode.');
//             return;
//         }

//         const payment = {
//             turfName,
//             date,
//             timeslot: time,
//             location: turfLocation,
//             price,
//             paymentMode: mode,
//         };

//         try {
//             await PaymentService.createPayment(payment);
//             setPaymentMode(mode);
//             setIsPopupOpen(true);

//             // Store booking data
//             BookingService.addBooking(payment);
//         } catch (error) {
//             console.error('Error creating payment:', error);
//             if (error.response && error.response.data && error.response.data.message) {
//                 setErrorMessage(error.response.data.message);
//             } else {
//                 setErrorMessage('Failed to process payment, as Booking not allowed: Turf is already booked for the selected date and time.' + 
//                     '\nSelect different time slot or different turf');
//             }
//         }
//     };

//     return (
//         <div className="payment-page">
//             <h1>Payment Page</h1>
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//             {turfName && date && time && price ? (
//                 <div className="booking-details">
//                     <p><strong>Booking for:</strong> {turfName}</p>
//                     <p><strong>Date:</strong> {date}</p>
//                     <p><strong>Time:</strong> {time}</p>
//                     <p><strong>Price:</strong> ₹{price}</p>
//                     <div className="payment-options">
//                         <h2>Select Mode of Payment</h2>
//                         <button onClick={() => handlePayment('online')}>Online</button>
//                         <button onClick={() => handlePayment('offline')}>Offline</button>
//                     </div>
//                 </div>
//             ) : (
//                 <p>No booking details available.</p>
//             )}
//             <PaymentPopup
//                 isOpen={isPopupOpen}
//                 onClose={() => setIsPopupOpen(false)}
//                 turfName={turfName}
//                 date={date}
//                 time={time}
//                 price={price}
//                 paymentMode={paymentMode}
//             />
//         </div>
//     );
// };

// export default PaymentPage;
