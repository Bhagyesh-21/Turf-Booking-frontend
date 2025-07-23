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
