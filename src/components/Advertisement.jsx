// import React from 'react';
// import "../style/Advertisement.css";

// const Advertisement = () => {
//   return (
//     <div className="advertisement">
//       <h3>Advertisement</h3>
//       <div className="ad-content">
//         {/* Replace this with your ad content */}
//         <p>Your Ad Here</p>
//       </div>
//     </div>
//   );
// };

// export default Advertisement;








// import React, { useEffect, useState } from 'react';
// import "../style/Advertisement.css";

// const Advertisement = () => {
//   const ads = [
//     { id: 1, content: 'Buy One Get One Free at FashionHub!' },
//     { id: 2, content: 'Upgrade your tech with 20% off at TechStore!' },
//     { id: 3, content: 'Delicious meals delivered fast by FoodExpress!' },
//     { id: 4, content: 'Travel to exotic locations with TravelPro discounts!' },
//     { id: 5, content: 'Discover books at unbeatable prices at BookBarn!' }
//   ];

//   const [ad, setAd] = useState({});

//   useEffect(() => {
//     const randomAd = ads[Math.floor(Math.random() * ads.length)];
//     setAd(randomAd);
//   }, []);

//   return (
//     <div className="advertisement">
//       <h3>Advertisement</h3>
//       <div className="ad-content">
//         <p>{ad.content}</p>
//       </div>
//     </div>
//   );
// };

// export default Advertisement;





import React, { useEffect, useState } from 'react';
import "../style/Advertisement.css";

const Advertisement = () => {
  const ads = [
    { id: 1, content: 'Buy One Get One Free at FashionHub!', image: '../images/fashionhub.jpg' },
    { id: 2, content: 'Upgrade your tech with 20% off at TechStore!', image: '../images/techstore.jpg' },
    { id: 3, content: 'Delicious meals delivered fast by FoodExpress!', image: '../images/foodexpress.jpg' },
    { id: 4, content: 'Travel to exotic locations with TravelPro discounts!', image: '../images/travelpro.jpg' },
    { id: 5, content: 'Discover books at unbeatable prices at BookBarn!', image: '../images/book..jpg' }
  ];

  const [ad, setAd] = useState({});

  useEffect(() => {
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    setAd(randomAd);
  }, []);

  return (
    <div className="advertisement">
      <h3>Advertisement</h3>
      <div className="ad-content">
        <img src={ad.image} alt="Ad" className="ad-image" />
        <p>{ad.content}</p>
      </div>
    </div>
  );
};

export default Advertisement;
