// import React, { useState } from 'react';
// // import './FootballComp.css'; // Add your custom styles if needed
// import './CardStyles.css';
// import BookingModal from './BookingModal';

// const FootballComp = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedTurf, setSelectedTurf] = useState('');
//     const [selectedPrice, setSelectedPrice] = useState(0);

//     const handleOpenModal = (turfName, price) => {
//         setSelectedTurf(turfName);
//         setSelectedPrice(price);
//         setIsModalOpen(true);
//     };
//     return (
//         <div className="sport-body">
//             <h1>Football Fields</h1>
//             <div className="card-container">
//                 <div className="card">
//                     <img src="../images/ball.png" alt="Field 1" className="card-image" />
//                     <h2 className="card-title">Field 1</h2>
//                     <p className="card-description">A top-notch football field with great amenities.</p>
//                     <p className="card-location">Location: Delhi</p>
//                     <p className="card-price">Price: ₹800/hour</p>
//                     <button className="book-now-btn">Book Now</button>
//                 </div>
//                 {/* Add more cards as needed */}
//                 <div className="card">
//                     <img src="../images/ball.png" alt="Field 1" className="card-image" />
//                     <h2 className="card-title">Field 1</h2>
//                     <p className="card-description">A top-notch football field with great amenities.</p>
//                     <p className="card-location">Location: Delhi</p>
//                     <p className="card-price">Price: ₹1000/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Court 1", 300)}>Book Now</button>                               </div>
//                 <div className="card">
//                     <img src="../images/ball.png" alt="Field 1" className="card-image" />
//                     <h2 className="card-title">Field 1</h2>
//                     <p className="card-description">A top-notch football field with great amenities.</p>
//                     <p className="card-location">Location: Delhi</p>
//                     <p className="card-price">Price: ₹950/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Court 1", 300)}>Book Now</button>                               </div>
//             </div>
//             <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} turfName={selectedTurf} price={selectedPrice} />
//         </div>
//     );
// }

// export default FootballComp;










import React, { useState } from 'react';
import './CardStyles.css'; // Import the common card styles
import './FootballComp.css'; 
import BookingModal from './BookingModal';

const FootballComp = () => {
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
        <div className="football-sport-body">
            <h1>Football Fields</h1>
            <div className="card-container">
                <div className="card">
                    <img src="../images/ball.png" alt="Field 1" className="card-image" />
                    <h2 className="card-title">Field 1</h2>
                    <p className="card-description">A top-notch football field with great amenities.</p>
                    <p className="card-location">Location: Delhi</p>
                    <p className="card-price">Price: ₹800/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Field 1", "Delhi", 800)}>Book Now</button>
                </div>
                <div className="card">
                    <img src="../images/ball.png" alt="Field 2" className="card-image" />
                    <h2 className="card-title">Field 2</h2>
                    <p className="card-description">A professional football field with modern facilities.</p>
                    <p className="card-location">Location: Mumbai</p>
                    <p className="card-price">Price: ₹1000/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Field 2", "Mumbai", 1000)}>Book Now</button>
                </div>
                <div className="card">
                    <img src="../images/ball.png" alt="Field 3" className="card-image" />
                    <h2 className="card-title">Field 3</h2>
                    <p className="card-description">An excellent football field with top-tier amenities.</p>
                    <p className="card-location">Location: Bangalore</p>
                    <p className="card-price">Price: ₹950/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Field 3", "Bangalore", 950)}>Book Now</button>
                </div>
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

export default FootballComp;
