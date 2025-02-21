// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './EditTurfComp.css'; // Add custom styles for the component
// import TurfService from './TurfService';

// const EditTurfComp = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [turf, setTurf] = useState({
//         purpose: '',
//         turfName: '',
//         locationName: '',
//         locationUrl: '',
//         price: '',
//         imageUrl: ''
//     });

//     useEffect(() => {
//         const fetchTurf = async () => {
//             try {
//                 const response = await TurfService.getTurfById(id);
//                 setTurf(response.data);
//             } catch (error) {
//                 console.error('Error fetching turf:', error);
//             }
//         };

//         fetchTurf();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTurf({ ...turf, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await TurfService.updateTurf(turf, id);
//             navigate('/'); // Navigate back to the dashboard
//         } catch (error) {
//             console.error('Error updating turf:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Edit Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Purpose:</label>
//                     <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label>Turf Name:</label>
//                     <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label>Location Name:</label>
//                     <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label>Location URL:</label>
//                     <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label>Price:</label>
//                     <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label>Image URL:</label>
//                     <input type="text" name="imageUrl" value={turf.imageUrl} onChange={handleChange} className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Save</button>
//             </form>
//         </div>
//     );
// };

// export default EditTurfComp;









import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTurfComp.css'; // Add custom styles for the component
import TurfService from './TurfService';

const EditTurfComp = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [turf, setTurf] = useState(null); // Initialize as null

    useEffect(() => {
        const fetchTurf = async () => {
            try {
                const response = await TurfService.getTurfById(id);
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
            await TurfService.updateTurf(turf, id);
            navigate('/'); // Navigate back to the dashboard
        } catch (error) {
            console.error('Error updating turf:', error);
        }
    };

    // Check if turf data is loaded
    if (!turf) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Edit Turf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Purpose:</label>
                    <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Turf Name:</label>
                    <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Location Name:</label>
                    <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Location URL:</label>
                    <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input type="text" name="imageUrl" value={turf.imageUrl} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditTurfComp; 