// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './UserAccountComp.css';

// // const UserAccountComp = () => {
// //     const [bookings, setBookings] = useState([]);

// //     useEffect(() => {
// //         // Fetch user bookings data from the API
// //         const fetchBookings = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:8082/api/payments/{id}');
// //                 setBookings(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching bookings:', error);
// //             }
// //         };

// //         fetchBookings();
// //     }, []);

// //     return (
// //         <div id="user-account">
// //             <h2>User Account</h2>
// //             <h3>Your Turf Bookings</h3>
// //             <table className="table table-bordered table-hover table-striped">
// //                 <thead>
// //                     <tr>
// //                         <th>Booking ID</th>
// //                         <th>Turf Name</th>
// //                         <th>Date</th>
// //                         <th>Time</th>
// //                         <th>Price</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {bookings.map((booking) => (
// //                         <tr key={booking.id}>
// //                             <td>{booking.id}</td>
// //                             <td>{booking.turfName}</td>
// //                             <td>{booking.date}</td>
// //                             <td>{booking.time}</td>
// //                             <td>{booking.price}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default UserAccountComp;




// //===============



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











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UserAccountComp.css';

// const UserAccountComp = () => {
//     const [booking, setBooking] = useState(null);

//     useEffect(() => {
//         // Fetch the latest user booking data from the API
//         const fetchLatestBooking = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8082/api/bookings/latest');
//                 setBooking(response.data);
//             } catch (error) {
//                 console.error('Error fetching latest booking:', error);
//             }
//         };

//         fetchLatestBooking();
//     }, []);

//     return (
//         <div id="user-account">
//             <h2>User Account</h2>
//             <h3>Your Latest Turf Booking</h3>
//             {booking ? (
//                 <table className="table table-bordered table-hover table-striped">
//                     <thead>
//                         <tr>
//                             <th>Booking ID</th>
//                             <th>Turf Name</th>
//                             <th>Date</th>
//                             {/* <th>Time</th> */}
//                             <th>Timeslot</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{booking.id}</td>
//                             <td>{booking.turfName}</td>
//                             <td>{booking.date}</td>
//                             {/* <td>{booking.time}</td> */}
//                             <td>{booking.timeslot}</td>
//                             <td>{booking.price}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No bookings found.</p>
//             )}
//         </div>
//     );
// };

// export default UserAccountComp;
