// import React from 'react';
// import './EntryNavComp.css';

// const EntryNavComp = () => {
//     return (
//         <div>
//             <nav 
//             // style={{ backgroundImage: `url(/images/animal.jpg)`, 
//             //     height: '500px',
//             //     backgroundRepeat: 'no-repeat',
//             //     backgroundSize: 'cover',
//             //     // display: 'flex',
//             //     // alignItems: 'center',
//             //     // justifyContent: 'center'
//             //  }}
//             >
//                 {/* <a href="/">Home</a> */}
//                 <a href="/login">Login/Register</a>
//                 {/* <a href="/contact">Contact</a> */}
//             </nav>
//         </div>
//     );
// }

// export default EntryNavComp;






// import React from 'react';
// import './EntryNavComp.css';

// const EntryNavComp = () => {
//     return (
//         <div>
//             <nav className='entry-nav'>
//                 <a href="/login">Login/Register</a> {/* Ensure the path matches your route */}
//             </nav>
//         </div>
//     );
// }

// export default EntryNavComp;








// import React from "react";
// // import homebg from "../images/bgimg.png";
// // import navLogo from "../images/navlogo.png";
// import { Link } from "react-router-dom";
// import "./EntryNavComp.css";
// import { jImages } from "../shared/constantData/staticData";



// const EntryNavComp = () => {
//   return (
//     <div>
//       <nav className='entry-nav'>
//       <h1 style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>LetsPLAY</h1>
//         <a href="/login">User Login/Register</a>
//         <a href="/admin">Admin Login/Register</a>
//         <a href="/about">About us</a>
//       </nav>
//     </div>
//   );
// }

// export default EntryNavComp;




// https://dev.to/nnnirajn/crafting-the-perfect-navigation-bar-in-react-a-comprehensive-guide-42o1

// import React from "react";
// import "./EntryNavComp.css";

// const EntryNavComp = () => {
//   return (
//     <div className="entry-nav-container">
//       <div className="logo-container">
//         <h1>LetsPLAY</h1>
//       </div>
//       <div className="buttons-container">
//         <a href="/login">User Login/Register</a>
//         <a href="/admin">Admin Login/Register</a>
//         <a href="/about">About us</a>
//       </div>
//     </div>
//   );
// }

// export default EntryNavComp;



import React from "react";
import "./EntryNavComp.css";
import { Typewriter } from "react-simple-typewriter";

const EntryNavComp = () => {
  return (
    <div className="entry-nav">
      <div className="logo-container">
        <h1>LetsPLAY</h1>
      </div>
      <div className="buttons-container">
        <a href="/login">User Login</a>
        <a href="/admin">Admin Login</a>
        <a href="/about">About us</a>
      </div>

      <div id="homeTxt">
        <h2
          style={{
            color: "#fff",
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "150px", // Adjust this to move the text down
          }}
        >
          <Typewriter
            words={[
              "Unleash Your Inner Athlete!",
              "Book Your Turf in Seconds!",
              "Every Game Begins with a Click!",
              "Play, Compete, Win!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </div>
  );
}

export default EntryNavComp;
