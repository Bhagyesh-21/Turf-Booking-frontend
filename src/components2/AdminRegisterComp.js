// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import './AdminStyle.css';


// // // const AdminRegisterComp = () => {
// // //     const [turfOwner, setTurfOwner] = useState({
// // //         turfOwnerName: '',
// // //         turfOwnerUserName: '',
// // //         mobileNo: '',
// // //         emailId: '',
// // //         password: ''
// // //     });
// // //     const [message, setMessage] = useState('');

// // //     const handleRegister = async () => {
// // //         try {
// // //             const response = await axios.post('http://localhost:8084/api/turfOwner/register', turfOwner);
// // //             setMessage(`Registered successfully as ${response.data.turfOwnerName}`);
// // //         } catch (error) {
// // //             setMessage('Registration failed');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Admin Register</h2>
// // //             <input type="text" placeholder="Name" value={turfOwner.turfOwnerName} onChange={(e) => setTurfOwner({...turfOwner, turfOwnerName: e.target.value})} />
// // //             <input type="text" placeholder="Username" value={turfOwner.turfOwnerUserName} onChange={(e) => setTurfOwner({...turfOwner, turfOwnerUserName: e.target.value})} />
// // //             <input type="text" placeholder="Mobile No" value={turfOwner.mobileNo} onChange={(e) => setTurfOwner({...turfOwner, mobileNo: e.target.value})} />
// // //             <input type="text" placeholder="Email" value={turfOwner.emailId} onChange={(e) => setTurfOwner({...turfOwner, emailId: e.target.value})} />
// // //             <input type="password" placeholder="Password" value={turfOwner.password} onChange={(e) => setTurfOwner({...turfOwner, password: e.target.value})} />
// // //             <button onClick={handleRegister}>Register</button>
// // //             <p>{message}</p>
// // //         </div>
// // //     );
// // // };

// // // export default AdminRegisterComp;










// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AdminRegisterComp = () => {
// //     const [turfOwner, setTurfOwner] = useState({
// //         turfOwnerName: '',
// //         turfOwnerUserName: '',
// //         mobileNo: '',
// //         emailId: '',
// //         password: ''
// //     });
// //     const [message, setMessage] = useState('');

// //     const handleRegister = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:8084/api/turfOwner/register', turfOwner);
// //             setMessage(`Registered successfully as ${response.data.turfOwnerName}`);
// //         } catch (error) {
// //             setMessage('Registration failed');
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleRegister}>
// //             <input type="text" placeholder="Name" value={turfOwner.turfOwnerName} onChange={(e) => setTurfOwner({...turfOwner, turfOwnerName: e.target.value})} required />
// //             <input type="text" placeholder="Username" value={turfOwner.turfOwnerUserName} onChange={(e) => setTurfOwner({...turfOwner, turfOwnerUserName: e.target.value})} required />
// //             <input type="text" placeholder="Mobile No" value={turfOwner.mobileNo} onChange={(e) => setTurfOwner({...turfOwner, mobileNo: e.target.value})} required />
// //             <input type="email" placeholder="Email" value={turfOwner.emailId} onChange={(e) => setTurfOwner({...turfOwner, emailId: e.target.value})} required />
// //             <input type="password" placeholder="Password" value={turfOwner.password} onChange={(e) => setTurfOwner({...turfOwner, password: e.target.value})} required />
// //             <button type="submit">Register</button>
// //             <p>{message}</p>
// //         </form>
// //     );
// // };

// // export default AdminRegisterComp;












// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminRegisterComp = () => {
//     const [ownerName, setOwnerName] = useState('');
//     const [username, setUsername] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8084/api/turfOwner/register', {
//                 ownerName,
//                 username,
//                 mobile,
//                 email,
//                 password
//             });
//             // Handle successful registration
//             console.log(response.data);
//         } catch (error) {
//             // Handle error
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h2>Admin Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Turf Owner Name:</label>
//                     <input 
//                         type="text" 
//                         value={ownerName}
//                         onChange={(e) => setOwnerName(e.target.value)}
//                         required 
//                     />
//                 </div>
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
//                     <label>Mobile No:</label>
//                     <input 
//                         type="text" 
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Email ID:</label>
//                     <input 
//                         type="email" 
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
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
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default AdminRegisterComp;








// with API
import React, { useState } from 'react';
import axios from 'axios';

const AdminRegisterComp = () => {
    const [turfOwner, setTurfOwner] = useState({
        turfOwnerName: '',
        turfOwnerUserName: '',
        mobileNo: '',
        emailId: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/api/turfOwner/register', turfOwner);
            setMessage(`Registered successfully as ${response.data.turfOwnerName}`);
            console.log(response.data);
        } catch (error) {
            setMessage('Registration failed');
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Turf Owner Name:</label>
                    <input 
                        type="text" 
                        value={turfOwner.turfOwnerName}
                        onChange={(e) => setTurfOwner({...turfOwner, turfOwnerName: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={turfOwner.turfOwnerUserName}
                        onChange={(e) => setTurfOwner({...turfOwner, turfOwnerUserName: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input 
                        type="text" 
                        value={turfOwner.mobileNo}
                        onChange={(e) => setTurfOwner({...turfOwner, mobileNo: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Email ID:</label>
                    <input 
                        type="email" 
                        value={turfOwner.emailId}
                        onChange={(e) => setTurfOwner({...turfOwner, emailId: e.target.value})}
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={turfOwner.password}
                        onChange={(e) => setTurfOwner({...turfOwner, password: e.target.value})}
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default AdminRegisterComp;
