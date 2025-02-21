import React from 'react';
import './AboutComp.css';

const AboutComp = () => {
    return (
        <div className="about-container">
            <h1 className="heading_about">About Us</h1>
            <div className="about-content">
                <section className="about-section">
                    <h2>Our Vision</h2>
                    <p>
                        At <strong id='about-letsplay'>let'sPLAY</strong> , we believe in creating a seamless and efficient platform that brings convenience and accessibility to all sports enthusiasts. Our goal is to revolutionize the way you book and manage sports facilities.
                    </p>
                </section>
                <section className="about-section">
                    <h2>What We Offer</h2>
                    <ul className="about-list">
                        <li><strong>Convenience:</strong> Book sports facilities easily from the comfort of your home.</li>
                        <li><strong>Availability Check:</strong> Check availability of turfs and select your preferred timings effortlessly.</li>
                        <li><strong>Easy Payment:</strong> Choose from various payment options like credit/debit cards, net banking, and digital wallets.</li>
                        <li><strong>Management:</strong> Admins can oversee turf locations, assign managers, set prices, and view booking details.</li>
                        <li><strong>User-Friendly:</strong> Our platform is designed to be intuitive and easy to use for both admins and users.</li>
                    </ul>
                </section>
                <section className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Our passionate team is dedicated to providing the best experience for our users. We continuously innovate and improve our platform to meet your needs and exceed your expectations.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or feedback? Feel free to reach out to us at <a href="mailto:letsplay@gmail.com">letsplay@gmail.com</a> or <a href="tel:+91 8010677695">8010677695</a>. We’re here to help!
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutComp;