import React from 'react';
import './SuccessPopup.css'; // Add custom styles for the popup

const SuccessPopup = ({ isOpen, onClose, turfName, purpose, locationName, locationUrl, price, image }) => {
    if (!isOpen) return null;

    return (
        <div className="success-popup-overlay">
            <div className="success-popup">
                <h2>Added Successfully!</h2>
                <p><strong>Name:</strong> {turfName}</p>
                <p><strong>Purpose:</strong> {purpose}</p>
                <p><strong>Location Name:</strong> {locationName}</p>
                <p><strong>Location URL:</strong> <a href={locationUrl} target="_blank" rel="noopener noreferrer">{locationUrl}</a></p>
                <p><strong>Price:</strong> ₹{price}</p>
                {/* {image && <img src={URL.createObjectURL(image)} alt="Turf Image" width="200" />} */}
                {/* <button onClick={() => window.location.href='https://www.swiggy.com/instamart/'}>Refreshment</button>  */}
                <button onClick={onClose}>Close</button>
                
                     
                
            </div>
        </div>
    );
};

export default SuccessPopup;
