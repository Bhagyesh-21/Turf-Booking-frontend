// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import { AuthPage } from ;
// // import './ProfilePopover.css'; // Add custom styles for the popover
// // import AuthPage from './AuthPage';

// // const ProfilePopover = ({ togglePopover }) => {
// //     const { user, logout } = AuthPage();
// //     const navigate = useNavigate();

// //     const handleLogout = async () => {
// //         try {
// //             await logout();
// //             navigate('/');
// //         } catch (err) {
// //             console.log(err.message);
// //         }
// //     };

// //     return (
// //         <div className="popover">
// //             <div className="popover-header">
// //                 {/* Welcome {user.email} */}
// //             </div>
// //             <div className="popover-body">
// //                 <button className="btn" onClick={() => navigate("/bookings")}>
// //                     Bookings
// //                 </button>
// //                 <button className="btn" onClick={handleLogout}>
// //                     Logout
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProfilePopover;







// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProfilePopover.css'; // Add custom styles for the popover

// const ProfilePopover = ({ togglePopover }) => {
//     const user = { email: "user@example.com" }; // Placeholder user data
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         console.log("User logged out");
//         navigate('/');
//     };

//     return (
//         <div className="popover">
//             <div className="popover-header">
//                 Welcome {user.email}
//             </div>
//             <div className="popover-body">
//                 <button className="btn-pop" onClick={() => {
//                     togglePopover();
//                     navigate("/bookings");
//                 }}>
//                     Bookings
//                 </button>
//                 <button className="btn-pop" onClick={handleLogout}>
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfilePopover;











// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProfilePopover.css'; // Add custom styles for the popover

// const ProfilePopover = ({ togglePopover }) => {
//     const user = {  }; // Placeholder user data
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         console.log("User logged out");
//         navigate('/');
//     };

//     return (
//         <div className="popover">
//             <div className="popover-header">
//                 Welcome {user.email}
//             </div>
//             <div className="popover-body">
//                 <button className="btn-pop" onClick={() => {
//                     togglePopover();
//                     navigate("/bookings");
//                 }}>
//                     Bookings
//                 </button>
//                 <button className="btn-pop" onClick={handleLogout}>
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfilePopover;








import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePopover.css'; // Add custom styles for the popover

const ProfilePopover = ({ togglePopover }) => {
    const username = { email: "" }; // Placeholder user data
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("User logged out");
        navigate('/');
    };    
    
    const handleAccount = () => {
        console.log("User data");
        navigate('/account');
    };

    return (
        <div className="popover">
            {/* <div className="popover-header">
                Welcome {username.email}
            </div> */}
            <div className="popover-body">
                {/* <button className="btn-pop" onClick={() => {
                    togglePopover();
                    navigate("/bookings");
                }}>
                    Bookings
                </button> */}
                <button className="btn-pop" onClick={handleLogout}>
                    Logout
                </button>
                <button className="btn-pop" onClick={handleAccount}>
                    Account
                </button>
            </div>
        </div>
    );
};

export default ProfilePopover;
