// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useUserAuth } from '../context/Authcontext';
// // import { database } from '../firebase'; // Import your firebase config
// // import { ref, onValue, remove } from 'firebase/database';
// // import './BookingsComp.css'; // Add your custom styles if needed

// // const BookingsComp = () => {
// //     const { user } = useUserAuth();
// //     const [name, setName] = useState("");
// //     const [image, setImage] = useState("");
// //     const [address, setAddress] = useState("");
// //     const [time, setTime] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [date, setDate] = useState("");
// //     const [error, setError] = useState("");
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();

// //     const getUserData = (uid) => {
// //         setLoading(true);
// //         const userRef = ref(database, "users/" + uid);
// //         onValue(userRef, (snapshot) => {
// //             const data = snapshot.val();
// //             if (data === null) {
// //                 setError("No Bookings found");
// //                 setLoading(false);
// //             } else {
// //                 const bookingData = data;
// //                 setName(bookingData.booking.name);
// //                 setImage(bookingData.booking.image);
// //                 setAddress(bookingData.booking.address);
// //                 setTime(bookingData.time);
// //                 setEmail(bookingData.email);
// //                 setDate(bookingData.bookingDate);
// //                 setLoading(false);
// //             }
// //         });
// //     };

// //     useEffect(() => {
// //         if (user) {
// //             getUserData(user.uid);
// //         }
// //     },
// //     []);

// //     const handleCancel = () => {
// //         const userRef = ref(database, "users/" + user.uid);
// //         remove(userRef).then(() => {
// //             alert("Successfully Canceled Booking");
// //             navigate("/turf");
// //         });
// //     };

// //     return (
// //         <div>
// //             {loading ? (
// //                 <div>Loading...</div>
// //             ) : error ? (
// //                 <div>
// //                     <p>No Bookings found</p>
// //                     <button onClick={() => navigate("/turf")}>Let's find turf</button>
// //                 </div>
// //             ) : (
// //                 <div>
// //                     <h2>Current Booking</h2>
// //                     <img src={image} alt="Turf" />
// //                     <p>Name: {name}</p>
// //                     <p>Address: {address}</p>
// //                     <p>Date: {date}</p>
// //                     <p>Time: {time}</p>
// //                     <button onClick={handleCancel}>Cancel Booking</button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default BookingsComp;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useUserAuth } from '../context/Authcontext';
// // import './BookingsComp.css'; // Add your custom styles if needed

// const BookingsComp = () => {
//     const { user } = useUserAuth();
//     const [booking, setBooking] = useState(null);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         setLoading(true);
//         // Simulate an API call or data retrieval
//         setTimeout(() => {
//             // Example booking data
//             const exampleBooking = {
//                 name: "Turf Name",
//                 image: "path_to_image.jpg", // Ensure the image path is correct
//                 address: "Turf Address",
//                 time: "10:00 AM - 12:00 PM",
//                 date: "2023-04-06",
//                 email: user.email
//             };

//             if (exampleBooking) {
//                 setBooking(exampleBooking);
//                 setError("");
//             } else {
//                 setError("No Bookings found");
//             }
//             setLoading(false);
//         }, 1000); // Simulate a delay
//     }


// )}







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
        }, 1000); // Simulate a delay
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
