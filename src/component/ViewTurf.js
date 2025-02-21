// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const ViewTurf = () => {
// // //     const [turfs, setTurfs] = useState([]);

// // //     useEffect(() => {
// // //         const fetchTurfs = async () => {
// // //             try {
// // //                 const response = await axios.get('http://localhost:8088/api/turfs');
// // //                 setTurfs(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching turfs:', error);
// // //             }
// // //         };

// // //         fetchTurfs();
// // //     }, []);

// // //     return (
// // //         <div>
// // //             <h2>Available Turfs</h2>
// // //             <ul>
// // //                 {turfs.map(turf => (
// // //                     <li key={turf.id}>{turf.name} - {turf.location}</li>
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // };

// // // export default ViewTurf;




// // //==============================================

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ViewTurf = () => {
// //     const [turfs, setTurfs] = useState([]);

// //     useEffect(() => {
// //         const fetchTurfs = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:8088/api/turfs');
// //                 setTurfs(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching turfs:', error);
// //             }
// //         };

// //         fetchTurfs();
// //     }, []);

// //     return (
// //         <div>
// //             <h2>Available Turfs</h2>
// //             <ul>
// //                 {turfs.map(turf => (
// //                     <li key={turf.id}>
// //                         <p><strong>Name:</strong> {turf.turfName}</p>
// //                         <p><strong>Purpose:</strong> {turf.purpose}</p>
// //                         <p><strong>Location:</strong> {turf.locationName}</p>
// //                         <p><strong>Price:</strong> {turf.price}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default ViewTurf;






// //-===============

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ViewTurf.css';

// const ViewTurf = () => {
//     const [turfs, setTurfs] = useState([]);

//     useEffect(() => {
//         const fetchTurfs = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8088/api/turfs');
//                 setTurfs(response.data);
//             } catch (error) {
//                 console.error('Error fetching turfs:', error);
//             }
//         };

//         fetchTurfs();
//     }, []);

//     return (
//         <div id="view-turf-container">
//             <h2>Available Turfs</h2>
//             <ul id="view-turf-list">
//                 {turfs.map(turf => (
//                     <li key={turf.id}>
//                         <p><strong>Name:</strong> {turf.turfName}</p>
//                         <p><strong>Purpose:</strong> {turf.purpose}</p>
//                         <p><strong>Location:</strong> {turf.locationName}</p>
//                         <p><strong>Price:</strong> {turf.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ViewTurf;









// ////===================

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ViewTurf.css';

// const ViewTurf = () => {
//     const [turfs, setTurfs] = useState([]);

//     useEffect(() => {
//         const fetchTurfs = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8088/api/turfs');
//                 setTurfs(response.data);
//             } catch (error) {
//                 console.error('Error fetching turfs:', error);
//             }
//         };

//         fetchTurfs();
//     }, []);

//     return (
//         <div id="view-turf-container">
//             <h2>Available Turfs</h2>
//             <table id="view-turf-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Turf Name</th>
//                         <th>Purpose</th>
//                         <th>Location Name</th>
//                         <th>Location URL</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {turfs.map(turf => (
//                         <tr key={turf.id}>
//                             <td>{turf.id}</td>
//                             <td>{turf.turfName}</td>
//                             <td>{turf.purpose}</td>
//                             <td>{turf.locationName}</td>
//                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
//                             <td>{turf.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ViewTurf;














import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewTurf.css';
import { useNavigate } from 'react-router-dom';

const ViewTurf = () => {
    const [turfs, setTurfs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTurfs = async () => {
            try {
                const response = await axios.get('http://localhost:8088/api/turfs');
                setTurfs(response.data);
            } catch (error) {
                console.error('Error fetching turfs:', error);
            }
        };

        fetchTurfs();
    }, []);

    const handleBooking = (turfId) => {
        navigate(`/book-turf/${turfId}`);
    };

    return (
        <div id="view-turf-container">
            <h2>Available Turfs</h2>
            <table id="view-turf-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Turf Name</th>
                        <th>Purpose</th>
                        <th>Location Name</th>
                        <th>Location URL</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map(turf => (
                        <tr key={turf.id}>
                            <td>{turf.id}</td>
                            <td>{turf.turfName}</td>
                            <td>{turf.purpose}</td>
                            <td>{turf.locationName}</td>
                            <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
                            <td>{turf.price}</td>
                            <td>
                                {/* <button id='book-btn' onClick={() => handleBooking(turf.id)}>Book Now</button> */}
                                <button id='book-btn' onClick={(navigate())}>Book Now</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTurf;
