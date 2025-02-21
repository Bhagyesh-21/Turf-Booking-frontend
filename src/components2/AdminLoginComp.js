// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import './AdminStyle.css';

// // // // // const AdminLoginComp = () => {
// // // // //     const [emailId, setEmailId] = useState('');
// // // // //     const [password, setPassword] = useState('');
// // // // //     const [message, setMessage] = useState('');

// // // // //     const handleLogin = async () => {
// // // // //         try {
// // // // //             const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
// // // // //                 params: { emailId, password }
// // // // //             });
// // // // //             setMessage(`Welcome, ${response.data.turfOwnerName}`);
// // // // //         } catch (error) {
// // // // //             setMessage('Login failed');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <h2>Admin Login</h2>
// // // // //             <input type="text" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
// // // // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // // // //             <button onClick={handleLogin}>Login</button>
// // // // //             <p>{message}</p>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AdminLoginComp;







// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const AdminLoginComp = ({ onLogin }) => {
// // // //     const [emailId, setEmailId] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const [message, setMessage] = useState('');

// // // //     const handleLogin = async () => {
// // // //         try {
// // // //             const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
// // // //                 params: { emailId, password }
// // // //             });
// // // //             setMessage(`Welcome, ${response.data.turfOwnerName}`);
// // // //             onLogin();
// // // //         } catch (error) {
// // // //             setMessage('Login failed');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <input type="text" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
// // // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // // //             <button onClick={handleLogin}>Login</button>
// // // //             <p>{message}</p>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AdminLoginComp;









// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const AdminLoginComp = ({ onLogin }) => {
// // //     const [emailId, setEmailId] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [message, setMessage] = useState('');

// // //     const handleLogin = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
// // //                 params: { emailId, password }
// // //             });
// // //             setMessage(`Welcome, ${response.data.turfOwnerName}`);
// // //             onLogin();
// // //         } catch (error) {
// // //             setMessage('Login failed');
// // //         }
// // //     };

// // //     return (
// // //         <form onSubmit={handleLogin}>
// // //             <input type="email" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
// // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// // //             <button type="submit">Login</button>
// // //             <p>{message}</p>
// // //         </form>
// // //     );
// // // };

// // // export default AdminLoginComp;








// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const AdminLoginComp = () => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [rememberMe, setRememberMe] = useState(false);
// //     const navigate = useNavigate();

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:8084/api/turfOwner/login', {
// //                 username,
// //                 password,
// //                 rememberMe
// //             });
// //             // Handle successful login
// //             console.log(response.data);
// //             navigate('/admin-dashboard');
// //         } catch (error) {
// //             // Handle error
// //             console.error(error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Admin Login</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Username:</label>
// //                     <input 
// //                         type="text" 
// //                         value={username}
// //                         onChange={(e) => setUsername(e.target.value)}
// //                         required 
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password:</label>
// //                     <input 
// //                         type="password" 
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required 
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>
// //                         <input 
// //                             type="checkbox" 
// //                             checked={rememberMe}
// //                             onChange={(e) => setRememberMe(e.target.checked)}
// //                         />
// //                         Remember Me
// //                     </label>
// //                 </div>
// //                 <button type="submit">Login</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default AdminLoginComp;














// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLoginComp = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8084/api/turfOwner/login', {
//                 username,
//                 password,
//                 rememberMe
//             });
//             // Handle successful login
//             console.log(response.data);
//             setMessage(`Welcome, ${response.data.username}`);
//             navigate('/admin-dashboard');
//         } catch (error) {
//             // Handle error
//             setMessage('Login failed: ' + (error.response ? error.response.data : error.message));
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input 
//                         type="text" 
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>
//                         <input 
//                             type="checkbox" 
//                             checked={rememberMe}
//                             onChange={(e) => setRememberMe(e.target.checked)}
//                         />
//                         Remember Me
//                     </label>
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AdminLoginComp;










//without api :

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLoginComp = () => {
//     const [emailId, setEmailId] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Simulate successful login
//         setMessage(`Welcome, ${emailId}`);
//         navigate('/admin-turf');
//     };

//     return (
//         <div>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email ID:</label>
//                     <input 
//                         type="email" 
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>
//                         <input 
//                             type="checkbox" 
//                             checked={rememberMe}
//                             onChange={(e) => setRememberMe(e.target.checked)}
//                         />
//                         Remember Me
//                     </label>
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AdminLoginComp;







//with API:

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminLoginComp.css'

// const AdminLoginComp = () => {
//     const [emailId, setEmailId] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
//                 params: { emailId, password }
//             });
//             // Handle successful login
//             console.log(response.data);
//             setMessage(`Welcome, ${response.data.turfOwnerName}`);
//             // navigate('/admin-dashboard');
//             navigate('/admin-turf');
//         } catch (error) {
//             // Handle error
//             setMessage('Login failed: ' + (error.response ? error.response.data : error.message));
//             console.error(error);
//         }
//     };

//     return (
//         <div id='admin-login'>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email ID:</label>
//                     <input 
//                         type="email" 
//                         value={emailId}
//                         onChange={(e) => setEmailId(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label id='admin-remember-me'>
//                         <input 
//                             type="checkbox" 
//                             checked={rememberMe}
//                             onChange={(e) => setRememberMe(e.target.checked)}
//                         />
//                         Remember Me
//                     </label>
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AdminLoginComp;









import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLoginComp.css';

const AdminLoginComp = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/login', null, {
                params: { emailId, password }
            });
            // Handle successful login
            console.log(response.data);
            setMessage(`Welcome, ${response.data.turfOwnerName}`);
            // navigate('/admin-dashboard');
            navigate('/admin-turf');
        } catch (error) {
            // Handle error
            setMessage('Login failed: ' + (error.response ? error.response.data : error.message));
            console.error(error);
        }
    };

    return (
        <div id="admin-login">
            <h2 >Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label >Email ID:</label> */}
                    <input 
                        type="email" 
                        placeholder='Email id'
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    {/* <label>Password:</label> */}
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div id="admin-remember-me">
                    <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    {/* <label style={{ color:'black'}}>Remember Me</label> */}
                    <label>Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLoginComp;
