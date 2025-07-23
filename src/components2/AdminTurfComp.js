
// // ==> FINAL WITH API AND BUTTON
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminTurfComp.css'; // Add custom styles for the component
import axios from 'axios';

const AdminTurfComp = () => {
    const [turfs, setTurfs] = useState([]);
    const [showTurfs, setShowTurfs] = useState(false);
    const navigate = useNavigate();

    const BASE_URL = 'http://localhost:8088/api/turfs';

    const fetchTurfs = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setTurfs(response.data);
            setShowTurfs(true);
        } catch (error) {
            console.error('Error fetching turfs', error);
        }
    };

    const deleteTurf = async (id) => {
        if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
            try {
                await axios.delete(`${BASE_URL}/${id}`);
                fetchTurfs(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting turf', error);
            }
        }
    };

    const handleAddTurf = () => {
        navigate('/admin/new-turf');
    };

    const handleEditTurf = (id) => {
        navigate(`/admin/edit-turf/${id}`);
    };

    return (
        <div id='admin-turf-body'>
            <h1 id='turfdashboard'>Turf Dashboard</h1>
            <div className="button-container">
                <button onClick={handleAddTurf} className='btn btn-outline-success' id='add-new'>
                    Add New Turf
                </button>
                <button onClick={fetchTurfs} className='btn btn-outline-info' id='show-all'>
                    Show All Turfs
                </button>
            </div>
            <br />
            {showTurfs && (
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Turf Name</th>
                            <th>Location Name</th>
                            <th>Location URL</th>
                            <th>Price</th>
                            <th>Purpose</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turfs.map((turf, index) => (
                            <tr id='show-data-row' key={turf.id}>
                                <td>{index + 1}</td>
                                <td>{turf.turfName}</td>
                                <td>{turf.locationName}</td>
                                <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
                                <td>{turf.price}</td>
                                <td>{turf.purpose}</td>
                                <td>
                                    <button onClick={() => handleEditTurf(turf.id)} className='btn btn-outline-success'>
                                        Edit
                                    </button>
                                    {" "}
                                    <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminTurfComp;