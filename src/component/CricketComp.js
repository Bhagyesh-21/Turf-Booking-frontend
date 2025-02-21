// import React, { useState } from 'react';
// import BookingModal from './BookingModal';
// // import './CricketComp.css'; // Add your custom styles if needed

// const CricketComp = () => {
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
//             <h1>Cricket Grounds</h1>
//             <div className="card-container">
//                 <div className="card">
//                     <img src="/path/to/image1.jpg" alt="Ground 1" className="card-image" />
//                     <h2 className="card-title">Ground 1</h2>
//                     <p className="card-description">A spacious cricket ground with excellent facilities.</p>
//                     <p className="card-location">Location: Pune</p>
//                     <p className="card-price">Price: ₹1000/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Court 1", 300)}>Book Now</button>                               </div>
//                 {/* Add more cards as needed */}
//             </div>
//             <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} turfName={selectedTurf} price={selectedPrice} />
//         </div>
//     );
// }
 
// export default CricketComp;











// import React, { useState } from 'react';
// import BookingModal from './BookingModal';
// import './CardStyles.css'; // Import the common card styles
// // import './CricketComp.css'; // Add your custom styles if needed

// const CricketComp = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedTurf, setSelectedTurf] = useState('');
//     const [selectedPrice, setSelectedPrice] = useState(0);
//     const [selectedLocation, setSelectedLocation] = useState('');

//     const handleOpenModal = (turfName, location, price) => {
//         setSelectedTurf(turfName);
//         setSelectedLocation(location);
//         setSelectedPrice(price);
//         setIsModalOpen(true);
//     };

//     return (
//         <div className="sport-body">
//             <h1>Cricket Grounds</h1>
//             <div className="card-container">
//                 <div className="card">
//                     <img src="/path/to/image1.jpg" alt="Ground 1" className="card-image" />
//                     <h2 className="card-title">Ground 1</h2>
//                     <p className="card-description">A spacious cricket ground with excellent facilities.</p>
//                     <p className="card-location">Location: Pune</p>
//                     <p className="card-price">Price: ₹1000/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Ground 1", "Pune", 1000)}>Book Now</button>
//                 </div>
//                 <div className="card">
//                     <img src="/path/to/image2.jpg" alt="Ground 2" className="card-image" />
//                     <h2 className="card-title">Ground 2</h2>
//                     <p className="card-description">An international standard cricket ground.</p>
//                     <p className="card-location">Location: Mumbai</p>
//                     <p className="card-price">Price: ₹1500/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Ground 2", "Mumbai", 1500)}>Book Now</button>
//                 </div>
//                 <div className="card">
//                     <img src="/path/to/image3.jpg" alt="Ground 3" className="card-image" />
//                     <h2 className="card-title">Ground 3</h2>
//                     <p className="card-description">A picturesque ground with lush green outfield.</p>
//                     <p className="card-location">Location: Delhi</p>
//                     <p className="card-price">Price: ₹1200/hour</p>
//                     <button className="book-now-btn" onClick={() => handleOpenModal("Ground 3", "Delhi", 1200)}>Book Now</button>
//                 </div>
//                 {/* Add more cards as needed */}
//             </div>
//             <BookingModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 turfName={selectedTurf}
//                 location={selectedLocation}
//                 price={selectedPrice}
//             />
//         </div>
//     );
// }

// export default CricketComp;



import React, { useState } from 'react';
import BookingModal from './BookingModal';
import './CardStyles.css'; // Import the common card styles
import './CricketComp.css'; // Add your custom styles

const CricketComp = () => {
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
        <div className="sport-body">
            <h1>Available Grounds</h1>
            <div className="card-container">
                <div className="card">
                    <img src="../images/ball.png" alt="Ground 1" className="card-image" />
                    <h2 className="card-title">Ground 1</h2>
                    <p className="card-description">A spacious cricket ground with excellent facilities.</p>
                    <p className="card-location">Location: Pune</p>
                    <p className="card-price">Price: ₹1000/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Ground 1", "Pune", 1000)}>Book Now</button>
                </div>
                <div className="card">
                    <img src="../images/ball.png" alt="Ground 2" className="card-image" />
                    <h2 className="card-title">Ground 2</h2>
                    <p className="card-description">An international standard cricket ground.</p>
                    <p className="card-location">Location: Mumbai</p>
                    <p className="card-price">Price: ₹1500/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Ground 2", "Mumbai", 1500)}>Book Now</button>
                </div>
                <div className="card">
                    <img src="../images/ball.png" alt="Ground 3" className="card-image" />
                    <h2 className="card-title">Ground 3</h2>
                    <p className="card-description">A picturesque ground with lush green outfield.</p>
                    <p className="card-location">Location: Delhi</p>
                    <p className="card-price">Price: ₹1200/hour</p>
                    <button className="book-now-btn" onClick={() => handleOpenModal("Ground 3", "Delhi", 1200)}>Book Now</button>
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

export default CricketComp;
