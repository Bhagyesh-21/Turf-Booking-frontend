import React from 'react'
import BootstrapComp from './BootstrapComp'
import './external.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// src/ContactForm.js
// import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can add code to send form data to your backend or an email service
  };

  return (
    <div>
      <strong className='heading_contact'>
        contact us
      </strong>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* <h1>Follow Us</h1> 
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"> 
       <FontAwesomeIcon icon={faInstagram} size="2x" /> 
      </a> 
      <a href="https://wa.me/yourphonenumber"  rel="noopener noreferrer"> 
        <FontAwesomeIcon icon={faWhatsapp} size="2x" /> </a>       */}
     
     <h1>Follow Us</h1> 
<a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link"> 
  <FontAwesomeIcon icon={faInstagram} size="2x" /> 
</a> 
<a href="https://wa.me/yourphonenumber" rel="noopener noreferrer" className="social-link"> 
  <FontAwesomeIcon icon={faWhatsapp} size="2x" /> 
</a> 

<a href="https://www.linkedin.com/in/bhagyesh-patil-09aa49265/" target="_blank" rel="noopener noreferrer" className="social-link"> 
  <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
</a>
<a href="https://github.com/Bhagyesh-21" target="_blank" rel="noopener noreferrer" className="social-link"> 
  <FontAwesomeIcon icon={faGithub} size="2x" /> 
</a>



        
        

    </div>
  );

  // here add icon
  
};

export default ContactForm;


// export default ContactComp
