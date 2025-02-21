// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // // import './AdminAddTurfFormComp.css'; // Add custom styles for the component
// // // import TurfService from './TurfService';
// // // import SuccessPopup from './SuccessPopup'; // Create a new SuccessPopup component for the success message

// // // const AdminAddTurfFormComp = () => {
// // //     const [turf, setTurf] = useState({
// // //         purpose: '',
// // //         turfName: '',
// // //         locationName: '',
// // //         locationUrl: '',
// // //         price: '',
// // //         imageUrl: ''
// // //     });
// // //     const [image, setImage] = useState(null);
// // //     const [isPopupOpen, setIsPopupOpen] = useState(false);
// // //     const navigate = useNavigate();

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setTurf({ ...turf, [name]: value });
// // //     };

// // //     const handleImageChange = (e) => {
// // //         setImage(e.target.files[0]);
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         // Create form data to send the image file along with other details
// // //         const formData = new FormData();
// // //         formData.append('purpose', turf.purpose);
// // //         formData.append('turfName', turf.turfName);
// // //         formData.append('locationName', turf.locationName);
// // //         formData.append('locationUrl', turf.locationUrl);
// // //         formData.append('price', turf.price);
// // //         if (image) {
// // //             formData.append('file', image);
// // //         }

// // //         try {
// // //             await TurfService.createTurf(formData);
// // //             setIsPopupOpen(true);
// // //             setTimeout(() => {
// // //                 setIsPopupOpen(false);
// // //                 navigate('/'); // Navigate back to the dashboard after 3 seconds
// // //             }, 3000);
// // //         } catch (error) {
// // //             console.error('Error adding turf:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Add New Turf</h2>
// // //             <form onSubmit={handleSubmit}>
// // //                 <div className="form-group">
// // //                     <label>Purpose:</label>
// // //                     <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Turf Name:</label>
// // //                     <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Location Name:</label>
// // //                     <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Location URL:</label>
// // //                     <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Price:</label>
// // //                     <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
// // //                 </div>
// // //                 <div className="form-group">
// // //                     <label>Image:</label>
// // //                     <input type="file" onChange={handleImageChange} className="form-control" />
// // //                 </div>
// // //                 <button type="submit" className="btn btn-primary">Add Turf</button>
// // //             </form>
// // //             <SuccessPopup
// // //                 isOpen={isPopupOpen}
// // //                 onClose={() => setIsPopupOpen(false)}
// // //                 turfName={turf.turfName}
// // //                 purpose={turf.purpose}
// // //                 locationName={turf.locationName}
// // //                 locationUrl={turf.locationUrl}
// // //                 price={turf.price}
// // //                 image={image}
// // //             />
// // //         </div>
// // //     );
// // // };

// // // export default AdminAddTurfFormComp;










// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import './AdminAddTurfFormComp.css'; // Add custom styles for the component
// // import TurfService from './TurfService';

// // const AdminAddTurfFormComp = () => {
// //     const [turf, setTurf] = useState({
// //         purpose: '',
// //         turfName: '',
// //         locationName: '',
// //         locationUrl: '',
// //         price: '',
// //         imageUrl: ''
// //     });
// //     const [image, setImage] = useState(null);
// //     const [isPopupOpen, setIsPopupOpen] = useState(false);
// //     const navigate = useNavigate();

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setTurf({ ...turf, [name]: value });
// //     };

// //     const handleImageChange = (e) => {
// //         setImage(e.target.files[0]);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const formData = new FormData();
// //         formData.append('purpose', turf.purpose);
// //         formData.append('turfName', turf.turfName);
// //         formData.append('locationName', turf.locationName);
// //         formData.append('locationUrl', turf.locationUrl);
// //         formData.append('price', turf.price);
// //         if (image) {
// //             formData.append('file', image);
// //         }

// //         try {
// //             await TurfService.createTurf(formData);
// //             setIsPopupOpen(true);
// //             setTimeout(() => {
// //                 setIsPopupOpen(false);
// //                 navigate('/');
// //             }, 3000);
// //         } catch (error) {
// //             console.error('Error adding turf:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Add New Turf</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Purpose:</label>
// //                     <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Turf Name:</label>
// //                     <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location Name:</label>
// //                     <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Location URL:</label>
// //                     <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Price:</label>
// //                     <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Image:</label>
// //                     <input type="file" onChange={handleImageChange} className="form-control" />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Add Turf</button>
// //             </form>
// //             {isPopupOpen && (
// //                 <div className="success-popup-overlay">
// //                     <div className="success-popup">
// //                         <h2>Added Successfully!</h2>
// //                         <p><strong>Name:</strong> {turf.turfName}</p>
// //                         <p><strong>Purpose:</strong> {turf.purpose}</p>
// //                         <p><strong>Location Name:</strong> {turf.locationName}</p>
// //                         <p><strong>Location URL:</strong> <a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></p>
// //                         <p><strong>Price:</strong> ₹{turf.price}</p>
// //                         {image && <img src={URL.createObjectURL(image)} alt="Turf Image" width="200" />}
// //                         <button onClick={() => setIsPopupOpen(false)}>Close</button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AdminAddTurfFormComp;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './AdminAddTurfFormComp.css';
// import TurfService from './TurfService';

// const AdminAddTurfFormComp = () => {
//     const [turf, setTurf] = useState({
//         purpose: '',
//         turfName: '',
//         locationName: '',
//         locationUrl: '',
//         price: ''
//     });
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [popupData, setPopupData] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTurf({ ...turf, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('purpose', turf.purpose);
//         formData.append('turfName', turf.turfName);
//         formData.append('locationName', turf.locationName);
//         formData.append('locationUrl', turf.locationUrl);
//         formData.append('price', turf.price);

//         try {
//             await TurfService.createTurf(formData);
//             setPopupData({
//                 turfName: turf.turfName,
//                 purpose: turf.purpose,
//                 locationName: turf.locationName,
//                 locationUrl: turf.locationUrl,
//                 price: turf.price
//             });
//             setIsPopupOpen(true);
//             setTimeout(() => {
//                 setIsPopupOpen(false);
//                 navigate('/');
//             }, 3000);
//         } catch (error) {
//             console.error('Error adding turf:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Add New Turf</h2>
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
//                 <button type="submit" className="btn btn-primary">Add Turf</button>
//             </form>
//             {isPopupOpen && (
//                 <div className="success-popup-overlay">
//                     <div className="success-popup">
//                         <h2>Added Successfully!</h2>
//                         <p><strong>Name:</strong> {popupData.turfName}</p>
//                         <p><strong>Purpose:</strong> {popupData.purpose}</p>
//                         <p><strong>Location Name:</strong> {popupData.locationName}</p>
//                         <p><strong>Location URL:</strong> <a href={popupData.locationUrl} target="_blank" rel="noopener noreferrer">{popupData.locationUrl}</a></p>
//                         <p><strong>Price:</strong> ₹{popupData.price}</p>
//                         <button onClick={() => setIsPopupOpen(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminAddTurfFormComp;











// // ==> FINAL for add turf and API in TurfService

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminAddTurfFormComp.css';
// import TurfService from './TurfService';

// const AdminAddTurfFormComp = () => {
//     const [turf, setTurf] = useState({
//         purpose: '',
//         turfName: '',
//         locationName: '',
//         locationUrl: '',
//         price: ''
//     });
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [popupData, setPopupData] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTurf({ ...turf, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await TurfService.createTurf(turf);
//             setPopupData({
//                 turfName: turf.turfName,
//                 purpose: turf.purpose,
//                 locationName: turf.locationName,
//                 locationUrl: turf.locationUrl,
//                 price: turf.price
//             });
//             setIsPopupOpen(true);
//             setTimeout(() => {
//                 setIsPopupOpen(false);
//                 navigate('/admin-turf');
//             }, 3000);
//         } catch (error) {
//             console.error('Error adding turf:', error);
//         }
//     };

//     return (
//         <div id='admin-add-turf'>
//             <h2>Add New Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="add-turf-form-group">
//                     <label>Purpose:</label>
//                     <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Turf Name:</label>
//                     <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Location Name:</label>
//                     <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Location URL:</label>
//                     <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Price:</label>
//                     <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Add Turf</button>
//             </form>
//             {isPopupOpen && (
//                 <div className="success-popup-overlay">
//                     <div className="success-popup">
//                         <h2>Added Successfully!</h2>
//                         <p><strong>Name:</strong> {popupData.turfName}</p>
//                         <p><strong>Purpose:</strong> {popupData.purpose}</p>
//                         <p><strong>Location Name:</strong> {popupData.locationName}</p>
//                         <p><strong>Location URL:</strong> <a href={popupData.locationUrl} target="_blank" rel="noopener noreferrer">{popupData.locationUrl}</a></p>
//                         <p><strong>Price:</strong> ₹{popupData.price}</p>
//                         <button onClick={() => setIsPopupOpen(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminAddTurfFormComp;












import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAddTurfFormComp.css';
import TurfService from './TurfService';

const AdminAddTurfFormComp = () => {
    const [turf, setTurf] = useState({
        purpose: '',
        turfName: '',
        locationName: '',
        locationUrl: '',
        price: ''
    });
    const [errors, setErrors] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTurf({ ...turf, [name]: value });
    };

    const validate = () => {
        let errors = {};
        if (!turf.purpose) errors.purpose = 'Purpose is required';
        if (!turf.turfName) errors.turfName = 'Turf Name is required';
        if (!turf.locationName) errors.locationName = 'Location Name is required';
        if (!turf.locationUrl) {
            errors.locationUrl = 'Location URL is required';
        } else if (!/^https?:\/\/\S+$/.test(turf.locationUrl)) {
            errors.locationUrl = 'Location URL is invalid';
        }
        if (!turf.price) {
            errors.price = 'Price is required';
        } else if (!/^\d+(\.\d{1,2})?$/.test(turf.price)) {
            errors.price = 'Price must be a valid number';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                await TurfService.createTurf(turf);
                setPopupData({
                    turfName: turf.turfName,
                    purpose: turf.purpose,
                    locationName: turf.locationName,
                    locationUrl: turf.locationUrl,
                    price: turf.price
                });
                setIsPopupOpen(true);
                setTimeout(() => {
                    setIsPopupOpen(false);
                    navigate('/admin-turf');
                }, 3000);
            } catch (error) {
                console.error('Error adding turf:', error);
            }
        }
    };

    return (
        <div id='admin-add-turf'>
            <h2>Add New Turf</h2>
            <form id='turf-form' onSubmit={handleSubmit}>
                <div className="add-turf-form-group">
                    <label>Purpose:</label>
                    <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
                    {errors.purpose && <div className="error">{errors.purpose}</div>}
                </div>
                <div className="add-turf-form-group">
                    <label>Turf Name:</label>
                    <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
                    {errors.turfName && <div className="error">{errors.turfName}</div>}
                </div>
                <div className="add-turf-form-group">
                    <label>Location Name:</label>
                    <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
                    {errors.locationName && <div className="error">{errors.locationName}</div>}
                </div>
                <div className="add-turf-form-group">
                    <label>Location URL:</label>
                    <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
                    {errors.locationUrl && <div className="error">{errors.locationUrl}</div>}
                </div>
                <div className="add-turf-form-group">
                    <label>Price:</label>
                    <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
                    {errors.price && <div className="error">{errors.price}</div>}
                </div>
                <button id='admin-add-turf-btn' type="submit" className="btn btn-primary">Add Turf</button>
            </form>
            {isPopupOpen && (
                <div className="success-popup-overlay">
                    <div className="success-popup">
                        <h2>Added Successfully!</h2>
                        <p><strong>Name:</strong> {popupData.turfName}</p>
                        <p><strong>Purpose:</strong> {popupData.purpose}</p>
                        <p><strong>Location Name:</strong> {popupData.locationName}</p>
                        <p><strong>Location URL:</strong> <a href={popupData.locationUrl} target="_blank" rel="noopener noreferrer">{popupData.locationUrl}</a></p>
                        <p><strong>Price:</strong> ₹{popupData.price}</p>
                        <button onClick={() => setIsPopupOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAddTurfFormComp;










// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminAddTurfFormComp.css'; // Add custom styles for the component
// import TurfService from './TurfService';

// const AdminAddTurfFormComp = () => {
//     const [turf, setTurf] = useState({
//         purpose: '',
//         turfName: '',
//         locationName: '',
//         locationUrl: '',
//         price: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [popupData, setPopupData] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTurf({ ...turf, [name]: value });
//     };

//     const validate = () => {
//         let formErrors = {};
//         if (!turf.purpose) formErrors.purpose = "Purpose is required";
//         if (!turf.turfName) formErrors.turfName = "Turf Name is required";
//         if (!turf.locationName) formErrors.locationName = "Location Name is required";
//         if (!turf.locationUrl) {
//             formErrors.locationUrl = "Location URL is required";
//         } else if (!/^https?:\/\/\S+$/.test(turf.locationUrl)) {
//             formErrors.locationUrl = "Location URL must be a valid URL";
//         }
//         if (!turf.price) {
//             formErrors.price = "Price is required";
//         } else if (!/^\d+(\.\d{1,2})?$/.test(turf.price)) {
//             formErrors.price = "Price must be a valid number";
//         }
//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//             try {
//                 await TurfService.createTurf(turf);
//                 setPopupData({
//                     turfName: turf.turfName,
//                     purpose: turf.purpose,
//                     locationName: turf.locationName,
//                     locationUrl: turf.locationUrl,
//                     price: turf.price
//                 });
//                 setIsPopupOpen(true);
//                 setTimeout(() => {
//                     setIsPopupOpen(false);
//                     navigate('/');
//                 }, 3000);
//             } catch (error) {
//                 console.error('Error adding turf:', error);
//             }
//         }
//     };

//     return (
//         <div id='admin-add-turf'>
//             <h2>Add New Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="add-turf-form-group">
//                     <label>Purpose:</label>
//                     <input type="text" name="purpose" value={turf.purpose} onChange={handleChange} className="form-control" />
//                     {errors.purpose && <span className="error-message">{errors.purpose}</span>}
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Turf Name:</label>
//                     <input type="text" name="turfName" value={turf.turfName} onChange={handleChange} className="form-control" />
//                     {errors.turfName && <span className="error-message">{errors.turfName}</span>}
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Location Name:</label>
//                     <input type="text" name="locationName" value={turf.locationName} onChange={handleChange} className="form-control" />
//                     {errors.locationName && <span className="error-message">{errors.locationName}</span>}
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Location URL:</label>
//                     <input type="text" name="locationUrl" value={turf.locationUrl} onChange={handleChange} className="form-control" />
//                     {errors.locationUrl && <span className="error-message">{errors.locationUrl}</span>}
//                 </div>
//                 <div className="add-turf-form-group">
//                     <label>Price:</label>
//                     <input type="text" name="price" value={turf.price} onChange={handleChange} className="form-control" />
//                     {errors.price && <span className="error-message">{errors.price}</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary">Add Turf</button>
//             </form>
//             {isPopupOpen && (
//                 <div className="success-popup-overlay">
//                     <div className="success-popup">
//                         <h2>Added Successfully!</h2>
//                         <p><strong>Name:</strong> {popupData.turfName}</p>
//                         <p><strong>Purpose:</strong> {popupData.purpose}</p>
//                         <p><strong>Location Name:</strong> {popupData.locationName}</p>
//                         <p><strong>Location URL:</strong> <a href={popupData.locationUrl} target="_blank" rel="noopener noreferrer">{popupData.locationUrl}</a></p>
//                         <p><strong>Price:</strong> ₹{popupData.price}</p>
//                         <button onClick={() => setIsPopupOpen(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminAddTurfFormComp;
