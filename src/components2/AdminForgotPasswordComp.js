// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './AdminStyle.css';


// // const AdminForgotPasswordComp = () => {
// //     const [emailId, setEmailId] = useState('');
// //     const [message, setMessage] = useState('');

// //     const handleForgotPassword = async () => {
// //         try {
// //             await axios.post('http://localhost:8084/api/turfOwner/forgot-password', null, {
// //                 params: { emailId }
// //             });
// //             setMessage('Password reset link sent to your email.');
// //         } catch (error) {
// //             setMessage('Failed to send password reset link');
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Forgot Password</h2>
// //             <input type="text" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
// //             <button onClick={handleForgotPassword}>Send Reset Link</button>
// //             <p>{message}</p>
// //         </div>
// //     );
// // };

// // export default AdminForgotPasswordComp;








// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminForgotPasswordComp = () => {
//     const [emailId, setEmailId] = useState('');
//     const [message, setMessage] = useState('');

//     const handleForgotPassword = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8084/api/turfOwner/forgot-password', null, {
//                 params: { emailId }
//             });
//             setMessage('Password reset link sent to your email.');
//         } catch (error) {
//             setMessage('Failed to send password reset link');
//         }
//     };

//     return (
//         <form onSubmit={handleForgotPassword}>
//             <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
//             <button type="submit">Send Reset Link</button>
//             <p>{message}</p>
//         </form>
//     );
// };

// export default AdminForgotPasswordComp;











import React, { useState } from 'react';
import axios from 'axios';

const AdminForgotPasswordComp = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/forgot-password', {
                email
            });
            // Handle successful request
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email ID:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default AdminForgotPasswordComp;
