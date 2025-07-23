import React, { useState } from 'react';
// import BookingModal from './BookingModal';
import './CardStyles.css';
import './BadmintonComp.css'; 

import BookingModal from './BookingModal';

const BadmintonComp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTurf, setSelectedTurf] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleOpenModal = (turfName, location, price) => {
        setSelectedTurf(turfName);
        setSelectedLocation(location);
        setSelectedPrice(price);
        setIsModalOpen(true);
    };

    return (
        <div className="bad-sport-body">
            <h1>Badminton Courts</h1>
            <div className="card-container">
                <div className="card">
                    <img src="/images/bgimg.png" alt="Court 1" className="card-image" />
                    <h2 className="card-title">Court 1</h2>
                    <p className="card-description">A well-maintained indoor badminton court.</p>
                    <p className="card-location">Location: Mumbai</p>
                    <p className="card-price">Price: ₹300/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Court 1", "Mumbai", 300)}>Book Now</button>               
                </div>
                {/* Add more cards as needed */}
            </div>
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                turfName={selectedTurf}
                location={selectedLocation}
                price={selectedPrice}
            />
        </div>
    );
}

export default BadmintonComp;
