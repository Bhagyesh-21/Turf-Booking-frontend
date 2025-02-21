// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminRememberMeComp = () => {
//     const [emailId, setEmailId] = useState('');
//     const [message, setMessage] = useState('');

//     const handleRememberMe = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8084/api/turfOwner/remember-me', null, {
//                 params: { emailId }
//             });
//             setMessage('Remember me token generated.');
//         } catch (error) {
//             setMessage('Failed to generate remember me token');
//         }
//     };

//     return (
//         <form onSubmit={handleRememberMe}>
//             <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
//             <button type="submit">Generate Token</button>
//             <p>{message}</p>
//         </form>
//     );
// };

// export default AdminRememberMeComp;
