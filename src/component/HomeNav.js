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