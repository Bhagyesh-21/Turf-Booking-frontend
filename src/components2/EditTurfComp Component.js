import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditTurfComp.css'; // Add custom styles for the component

const EditTurfComp = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [turf, setTurf] = useState({
        purpose: '',
        turfName: '',
        locationName: '',
        locationUrl: '',
        price: ''
    });

    useEffect(() => {
        const fetchTurf = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/api/turfs/${id}`);
                setTurf(response.data);
            } catch (error) {
                console.error('Error fetching turf:', error);
            }
        };

        fetchTurf();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTurf({ ...turf, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8088/api/turfs/${id}`, turf);
            navigate('/admin-turf');
        } catch (error) {
            console.error('Error updating turf:', error);
        }
    };

    return (
        <div id= 'edit-body'>
            <h2 id='edit-h2'>Edit Turf</h2>
            <form id='edit-form' onSubmit={handleSubmit}>
                <div className="edit-form-group">
                    <label>Purpose:</label>
                    <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
                </div>
                <div className="edit-form-group">
                    <label>Turf Name:</label>
                    <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
                </div>
                <div className="edit-form-group">
                    <label>Location Name:</label>
                    <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
                </div>
                <div className="edit-form-group">
                    <label>Location URL:</label>
                    <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
                </div>
                <div className="edit-form-group">
                    <label>Price:</label>
                    <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
                </div>
                <button id='edit-btn' type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditTurfComp;
