// // // import React from "react";
// // // // import homebg from "../images/bgimg.png";
// // // // import navLogo from "../images/navlogo.png";
// // // // import { Link } from "react-router-dom";
// // // // import { Button } from "@chakra-ui/react";

// // // export const HomeNav = () => {
// // //   return (
// // //     <>
// // //       <div id="Home">
        

// // //         <div id="homeTxt">
// // //           <p>
// // //             FIND AND BOOK YOUR NEAREST{" "}
// // //             <span style={{ color: "red" }}>TURF</span> JUST A CLICK AWAY!
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };




  
// // import React from 'react';
// // import './HomeNav.css'; // Add your custom styles if needed
// // import { jImages } from '../shared/constantData/staticData';

// // const HomeNav = () => {
// //     return (
// //         <nav>
// //            {/* <img src={{ jImages,ballImg }}; */}
// //             {/* <img src={jImages.Bgimg} className="about_img" alt='person1 img' style={{margin:"40px 40px 40px 160px", height:"220px"}}  />  */}
// //             <a src={jImages.B1} href="/about">About</a>
// //             <a href="/contact">Contact</a>
// //             <a href="/">Logout</a>
// //             {/* Add more navigation links as needed */}
// //         </nav>
// //     );
// // }

// // export default HomeNav;









// // import React from 'react';
// // import './HomeNav.css'; // Add your custom styles if needed
// // // import { Bookings } from './Bookings';
// // import { jImages } from '../shared/constantData/staticData';

// // const HomeNav = () => {
// //     return (
// //         <div>
// //             {/* <img src='../images/my.png'></img> */}
// //             <img src={jImages.myprofile}/>

        
// //         <p className='home-nav'> Welcome To Turfs</p>
        
// //         {/* // <nav className="home-nav">
// //         //     <a href="/cricket">Cricket</a>
// //         //     <a href="/football">Football</a>
// //         //     <a href="/badminton">Badminton</a> */}
// //         {/* // </nav> */}
// //         </div>
// //     );
// // }

// //export default HomeNav;








// // import React from 'react';
// // import './HomeNav.css'; // Add your custom styles if needed
// // import { jImages } from '../shared/constantData/staticData';

// // const HomeNav = () => {
// //     return (
// //         <div>
// //             {/* <p id='p'>
// //             <img id='profile' src={jImages.myprofile} alt="Profile" />
// //             </p> */}
            
// //             <p className='home-nav'> 
// //             <img id='profile' src={jImages.myprofile} alt="Profile" />
// //                 <strong id='welcome'> Welcome To Turfs </strong></p>
// //         </div>
// //     );
// // }

// // export default HomeNav;









// import React, { useState } from 'react';
// import './HomeNav.css'; // Add your custom styles if needed
// import { jImages } from '../shared/constantData/staticData';
// import ProfilePopover from './ProfilePopover';

// const HomeNav = () => {
//     const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//     const togglePopover = () => {
//         setIsPopoverOpen(!isPopoverOpen);
//     };

//     return (
//         <div className='home-nav-container'>
//             <div className='home-nav'>  
//                 <img 
//                     id='profile' 
//                     src={jImages.myprofile} 
//                     alt="Profile" 
//                     onClick={togglePopover} 
//                 />
//                 {isPopoverOpen && (
//                     <ProfilePopover togglePopover={togglePopover} />
//                 )}
//                 <strong id='welcome'>Welcome To Turfs</strong>
//             </div>
//         </div>
//     );
// }

// export default HomeNav;









// import React, { useState } from 'react';
// import './HomeNav.css'; // Add your custom styles if needed
// import { jImages } from '../shared/constantData/staticData';
// import ProfilePopover from './ProfilePopover';

// const HomeNav = () => {
//     const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//     const togglePopover = () => {
//         setIsPopoverOpen(!isPopoverOpen);
//     };

//     return (
//         <div className='home-nav-container'>
//             <div className='home-nav'>
//                 <img 
//                     id='profile' 
//                     src={jImages.myprofile} 
//                     alt="Profile" 
//                     onClick={togglePopover} 
//                 />
//                 {isPopoverOpen && (
//                     <ProfilePopover togglePopover={togglePopover} />
//                 )}
//                 <strong id='welcome'>Welcome To Turfs</strong>
//             </div>
//         </div>
//     );
// }

// export default HomeNav;

import React, { useState } from 'react';

import './HomeNav.css';
import { jImages } from '../shared/constantData/staticData';
import ProfilePopover from './ProfilePopover';
import HomeBody from './HomeBody';

const HomeNav = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <div className='home-nav-container'>
            <div className='home-nav'>
                <img 
                    id='profile' 
                    src={jImages.myprofile} 
                    alt="Profile" 
                    onClick={togglePopover} 
                />
                {isPopoverOpen && (
                    <ProfilePopover togglePopover={togglePopover} />
                )}
                {/* <strong id='welcome'>Welcome To Turfs</strong> */}
            </div>
            <HomeBody />
        </div>
    );
}

export default HomeNav;