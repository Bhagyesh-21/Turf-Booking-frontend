import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import './EditTurfComp.css'; // Add custom styles for the component

const EditTurfComp = ({ turfs, setTurfs }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [turf, setTurf] = useState(null);

    useEffect(() => {
        const turfToEdit = turfs.find((turf) => turf.id === parseInt(id));
        if (turfToEdit) {
            setTurf(turfToEdit);
        }
    }, [id, turfs]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTurf({ ...turf, [name]: value });
    };

    const handleImageChange = (e) => {
        setTurf({ ...turf, imageUrl: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTurfs(turfs.map((t) => (t.id === parseInt(id) ? turf : t)));
        navigate('/admin-edit-turf');
    };

    if (!turf) return <div>Loading...</div>;

    return (
        <div className="edit-turf-comp">
            <h2>Edit Turf</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Turf Name:</label>
                    <input
                        type="text"
                        name="turfName"
                        value={turf.turfName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Location Name:</label>
                    <input
                        type="text"
                        name="locationName"
                        value={turf.locationName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Location URL:</label>
                    <input
                        type="url"
                        name="locationUrl"
                        value={turf.locationUrl}
                        onChange={handleInputChange}
                        pattern="https?://.+"
                        title="Please enter a valid URL starting with http:// or https://"
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={turf.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                    />
                </div>
                <div>
                    <label>Purpose:</label>
                    <select
                        name="purpose"
                        value={turf.purpose}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Badminton">Badminton</option>
                    </select>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditTurfComp;
