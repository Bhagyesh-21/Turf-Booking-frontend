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
