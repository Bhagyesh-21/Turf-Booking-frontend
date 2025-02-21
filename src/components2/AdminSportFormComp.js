// without api:
//    //1
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import './AdminSportFormComp.css'; // Add custom styles for the component

// const AdminSportFormComp = () => {
//     const { sport } = useParams();
//     const [turfName, setTurfName] = useState('');
//     const [locationName, setLocationName] = useState('');
//     const [locationUrl, setLocationUrl] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState(null);
//     const [purpose, setPurpose] = useState(sport.charAt(0).toUpperCase() + sport.slice(1)); // Initialize with sport name
//     const [message, setMessage] = useState('');

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Simulate successful form submission
//         setMessage(`Turf added successfully for ${turfName}`);
//     };

//     return (
//         <div className="admin-sport-form">
//             <h2>Add {sport.charAt(0).toUpperCase() + sport.slice(1)} Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Turf Name:</label>
//                     <input 
//                         type="text" 
//                         value={turfName}
//                         onChange={(e) => setTurfName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location Name:</label>
//                     <input 
//                         type="text" 
//                         value={locationName}
//                         onChange={(e) => setLocationName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location URL:</label>
//                     <input 
//                         type="url" 
//                         value={locationUrl}
//                         onChange={(e) => setLocationUrl(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input 
//                         type="number" 
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Upload Image:</label>
//                     <input 
//                         type="file" 
//                         onChange={handleImageChange}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Purpose:</label>
//                     <select value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
//                         <option value="Cricket">Cricket</option>
//                         <option value="Football">Football</option>
//                         <option value="Badminton">Badminton</option>
//                     </select>
//                 </div>
//                 <button type="submit">Add Turf</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AdminSportFormComp;





   //2
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdminSportFormComp.css'; // Add custom styles for the component

const AdminSportFormComp = () => {
    const { sport } = useParams();
    const [turfName, setTurfName] = useState('');
    const [locationName, setLocationName] = useState('');
    const [locationUrl, setLocationUrl] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [purpose, setPurpose] = useState(sport.charAt(0).toUpperCase() + sport.slice(1)); // Initialize with sport name
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate successful form submission
        setMessage(`Turf added successfully for ${turfName}`);
        setShowModal(true);
    };

    return (
        <div className="admin-sport-form">
            <h2>Add {sport.charAt(0).toUpperCase() + sport.slice(1)} Turf</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Turf Name:</label>
                    <input 
                        type="text" 
                        value={turfName}
                        onChange={(e) => setTurfName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label>Location Name:</label>
                    <input 
                        type="text" 
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label>Location URL:</label>
                    <input 
                        type="url" 
                        value={locationUrl}
                        onChange={(e) => setLocationUrl(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input 
                        type="file" 
                        onChange={handleImageChange}
                        required 
                    />
                </div>
                <div>
                    <label>Purpose:</label>
                    <select value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Badminton">Badminton</option>
                    </select>
                </div>
                <button type="submit">Add Turf</button>
            </form>
            {message && <p>{message}</p>}
            
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Turf Details</h2>
                        <p><strong>Turf Name:</strong> {turfName}</p>
                        <p><strong>Turf Purpose:</strong> {purpose}</p>
                        <p><strong>Turf Location Name:</strong> {locationName}</p>
                        <p><strong>Turf Location URL:</strong> <a href={locationUrl} target="_blank" rel="noopener noreferrer">{locationUrl}</a></p>
                        <p><strong>Price:</strong> {price}</p>
                        {image && (
                            <div>
                                <p><strong>Turf Image:</strong></p>
                                <img id='ad-turf' src={URL.createObjectURL(image)} alt="Turf" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminSportFormComp;













// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './AdminSportFormComp.css'; // Add custom styles for the component

// const AdminSportFormComp = ({ onAddTurf }) => {
//     const { sport } = useParams();
//     const [turfName, setTurfName] = useState('');
//     const [locationName, setLocationName] = useState('');
//     const [locationUrl, setLocationUrl] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState(null);
//     const [purpose, setPurpose] = useState(sport.charAt(0).toUpperCase() + sport.slice(1)); // Initialize with sport name
//     const [showModal, setShowModal] = useState(false);
//     const navigate = useNavigate();

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTurf = {
//             id: Date.now(),
//             turfName,
//             purpose,
//             locationName,
//             locationUrl,
//             price,
//             imageUrl: URL.createObjectURL(image)
//         };
//         onAddTurf(newTurf);
//         setShowModal(true);
//     };

//     const handleSeeRegisteredTurfs = () => {
//         navigate('/admin-registered-turfs');
//     };

//     return (
//         <div className="admin-sport-form">
//             <h2>Add {sport.charAt(0).toUpperCase() + sport.slice(1)} Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Turf Name:</label>
//                     <input 
//                         type="text" 
//                         value={turfName}
//                         onChange={(e) => setTurfName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location Name:</label>
//                     <input 
//                         type="text" 
//                         value={locationName}
//                         onChange={(e) => setLocationName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location URL:</label>
//                     <input 
//                         type="url" 
//                         value={locationUrl}
//                         onChange={(e) => setLocationUrl(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input 
//                         type="number" 
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Upload Image:</label>
//                     <input 
//                         type="file" 
//                         onChange={handleImageChange}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Purpose:</label>
//                     <select value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
//                         <option value="Cricket">Cricket</option>
//                         <option value="Football">Football</option>
//                         <option value="Badminton">Badminton</option>
//                     </select>
//                 </div>
//                 <button type="submit">Add Turf</button>
//             </form>

//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//                         <h2>Turf Details</h2>
//                         <p><strong>Turf Name:</strong> {turfName}</p>
//                         <p><strong>Turf Purpose:</strong> {purpose}</p>
//                         <p><strong>Turf Location Name:</strong> {locationName}</p>
//                         <p><strong>Turf Location URL:</strong> <a href={locationUrl} target="_blank" rel="noopener noreferrer">{locationUrl}</a></p>
//                         <p><strong>Price:</strong> {price}</p>
//                         {image && (
//                             <div>
//                                 <p><strong>Turf Image:</strong></p>
//                                 <img id='ad-turf' src={URL.createObjectURL(image)} alt="Turf" />
//                             </div>
//                         )}
//                         <button onClick={handleSeeRegisteredTurfs}>See Registered Turfs</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminSportFormComp;


















   







//with API :

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// // import './AdminSportFormComp.css'; // Add custom styles for the component

// const AdminSportFormComp = () => {
//     const { sport } = useParams();
//     const [turfName, setTurfName] = useState('');
//     const [locationName, setLocationName] = useState('');
//     const [locationUrl, setLocationUrl] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState(null);
//     const [purpose, setPurpose] = useState(sport.charAt(0).toUpperCase() + sport.slice(1)); // Initialize with sport name
//     const [message, setMessage] = useState('');

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('turfName', turfName);
//         formData.append('locationName', locationName);
//         formData.append('locationUrl', locationUrl);
//         formData.append('price', price);
//         formData.append('image', image);
//         formData.append('purpose', purpose);

//         try {
//             const response = await axios.post(`http://localhost:8084/api/turfOwner/addTurf`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             setMessage(`Turf added successfully: ${response.data.turfName}`);
//         } catch (error) {
//             setMessage('Failed to add turf: ' + (error.response ? error.response.data : error.message));
//         }
//     };

//     return (
//         <div className="admin-sport-form">
//             <h2>Add {sport.charAt(0).toUpperCase() + sport.slice(1)} Turf</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Turf Name:</label>
//                     <input 
//                         type="text" 
//                         value={turfName}
//                         onChange={(e) => setTurfName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location Name:</label>
//                     <input 
//                         type="text" 
//                         value={locationName}
//                         onChange={(e) => setLocationName(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Location URL:</label>
//                     <input 
//                         type="url" 
//                         value={locationUrl}
//                         onChange={(e) => setLocationUrl(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input 
//                         type="number" 
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Upload Image:</label>
//                     <input 
//                         type="file" 
//                         onChange={handleImageChange}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Purpose:</label>
//                     <select value={purpose} onChange={(e) => setPurpose(e.target.value)} required>
//                         <option value="Cricket">Cricket</option>
//                         <option value="Football">Football</option>
//                         <option value="Badminton">Badminton</option>
//                     </select>
//                 </div>
//                 <button type="submit">Add Turf</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AdminSportFormComp;
