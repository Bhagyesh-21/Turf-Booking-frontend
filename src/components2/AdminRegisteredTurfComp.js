// import React, { useState } from 'react';
// // import './AdminRegisteredTurfComp.css'; // Add custom styles for the component

// const AdminRegisteredTurfComp = () => {
//     const [turfs, setTurfs] = useState([
//         {
//             id: 1,
//             turfName: 'Sunny Cricket Ground',
//             purpose: 'Cricket',
//             locationName: 'Mumbai, India',
//             locationUrl: 'https://example.com/mumbai-cricket-ground',
//             price: '1500',
//             imageUrl: 'https://via.placeholder.com/150'
//         },
//         {
//             id: 2,
//             turfName: 'Green Field Football',
//             purpose: 'Football',
//             locationName: 'Delhi, India',
//             locationUrl: 'https://example.com/delhi-football-field',
//             price: '2000',
//             imageUrl: 'https://via.placeholder.com/150'
//         },
//         {
//             id: 3,
//             turfName: 'Ace Badminton Court',
//             purpose: 'Badminton',
//             locationName: 'Bangalore, India',
//             locationUrl: 'https://example.com/bangalore-badminton-court',
//             price: '1000',
//             imageUrl: 'https://via.placeholder.com/150'
//         },
//     ]);

//     return (
//         <div className="admin-registered-turf">
//             <h2>Registered Turfs</h2>
//             <div className="turf-list">
//                 {turfs.map((turf) => (
//                     <div key={turf.id} className="turf-item">
//                         <img src={turf.imageUrl} alt={`${turf.turfName}`} />
//                         <div className="turf-details">
//                             <h3>{turf.turfName}</h3>
//                             <p><strong>Purpose:</strong> {turf.purpose}</p>
//                             <p><strong>Location:</strong> <a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationName}</a></p>
//                             <p><strong>Price:</strong> {turf.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminRegisteredTurfComp;














// import React from 'react';
// import './AdminRegisteredTurfComp.css'; // Add custom styles for the component

// const AdminRegisteredTurfComp = ({ turfs }) => {
//     return (
//         <div className="admin-registered-turf">
//             <h2>Registered Turfs</h2>
//             <div className="turf-list">
//                 {turfs.map((turf) => (
//                     <div key={turf.id} className="turf-item">
//                         <img src={turf.imageUrl} alt={`${turf.turfName}`} />
//                         <div className="turf-details">
//                             <h3>{turf.turfName}</h3>
//                             <p><strong>Purpose:</strong> {turf.purpose}</p>
//                             <p><strong>Location:</strong> <a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationName}</a></p>
//                             <p><strong>Price:</strong> {turf.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminRegisteredTurfComp;






// import React from 'react';
// import './AdminRegisteredTurfComp.css'; // Add custom styles for the component

// const AdminRegisteredTurfComp = ({ turfs }) => {
//     if (!turfs || turfs.length === 0) {
//         return <div className="admin-registered-turf"><p>No turfs registered yet.</p></div>;
//     }

//     return (
//         <div className="admin-registered-turf">
//             <h2>Registered Turfs</h2>
//             <div className="turf-list">
//                 {turfs.map((turf) => (
//                     <div key={turf.id} className="turf-item">
//                         <img src={turf.imageUrl} alt={`${turf.turfName}`} />
//                         <div className="turf-details">
//                             <h3>{turf.turfName}</h3>
//                             <p><strong>Purpose:</strong> {turf.purpose}</p>
//                             <p><strong>Location:</strong> <a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationName}</a></p>
//                             <p><strong>Price:</strong> {turf.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminRegisteredTurfComp;









// import React from 'react';
// import './AdminRegisteredTurfComp.css'; // Add custom styles for the component

// const AdminRegisteredTurfComp = ({ turfs }) => {
//     if (!turfs || turfs.length === 0) {
//         return <div className="admin-registered-turf"><p>No turfs registered yet.</p></div>;
//     }

//     return (
//         <div className="admin-registered-turf">
//             <h2>Registered Turfs</h2>
//             <div className="turf-list">
//                 {turfs.map((turf) => (
//                     <div key={turf.id} className="turf-item">
//                         <img src={turf.imageUrl} alt={`${turf.turfName}`} />
//                         <div className="turf-details">
//                             <h3>{turf.turfName}</h3>
//                             <p><strong>Purpose:</strong> {turf.purpose}</p>
//                             <p><strong>Location:</strong> <a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationName}</a></p>
//                             <p><strong>Price:</strong> {turf.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminRegisteredTurfComp;












import React from 'react';
import './AdminRegisteredTurfComp.css'; // Add custom styles for the component

const AdminRegisteredTurfComp = ({ turfs }) => {
    if (!turfs || turfs.length === 0) {
        return <div className="admin-registered-turf"><p>No turfs registered yet.</p></div>;
    }

    return (
        <div className="admin-registered-turf">
            <h2>Registered Turfs</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Purpose</th>
                        <th>Name</th>
                        <th>Location Name</th>
                        <th>Location URL</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map((turf, index) => (
                        <tr key={turf.id}>
                            <td>{index + 1}</td>
                            <td>{turf.purpose}</td>
                            <td>{turf.turfName}</td>
                            <td>{turf.locationName}</td>
                            <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
                            <td>{turf.price}</td>
                            <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminRegisteredTurfComp;
