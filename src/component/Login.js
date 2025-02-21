// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Login = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:8080/api/users', {
// //         username,
// //         password
// //       });
// //       console.log(response.data);
// //       alert('Login successful');
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //       alert('Login failed');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
// //       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // };

// // export default Login;








// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Login = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [rememberMe, setRememberMe] = useState(false);

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:8080/api/users/login', {
// //         username,
// //         password,
// //         rememberMe,
// //       });
// //       console.log(response.data);
// //       alert('Login successful');
// //     } catch (error) {
// //       if (error.response) {
// //         console.error('Error response:', error.response.data);
// //         alert(`Login failed: ${error.response.data.message}`);
// //       } else if (error.request) {
// //         console.error('Error request:', error.request);
// //         alert('Login failed: No response from server');
// //       } else {
// //         console.error('Error message:', error.message);
// //         alert(`Login failed: ${error.message}`);
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input
// //         type="text"
// //         placeholder="Username"
// //         value={username}
// //         onChange={e => setUsername(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={e => setPassword(e.target.value)}
// //       />
// //       <div className="remember-me">
// //         <input
// //           type="checkbox"
// //           checked={rememberMe}
// //           onChange={e => setRememberMe(e.target.checked)}
// //         />
// //         <label>Remember Me</label>
// //       </div>
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // };

// // export default Login;










// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/users/login', {
//         username,
//         password,
//         rememberMe,
//       });
//       console.log(response.data);
//       alert('Login successful');
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         alert(`Login failed: ${error.response.data.message}`);
//       } else if (error.request) {
//         console.error('Error request:', error.request);
//         alert('Login failed: No response from server');
//       } else {
//         console.error('Error message:', error.message);
//         alert(`Login failed: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <div className="remember-me">
//         <input
//           type="checkbox"
//           checked={rememberMe}
//           onChange={e => setRememberMe(e.target.checked)}
//         />
//         <label>Remember Me</label>
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;   






// MYCODE ==================================================================


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/users/login', {
//         username,
//         password,
//         rememberMe,
//       });
//       console.log(response.data);
//       alert('Login successful');
//       // navigate('/home'); // Redirect to HomePage on successful login
//       navigate("/turf")
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         alert(`Login failed: ${error.response.data.message}`);
//       } else if (error.request) {
//         console.error('Error request:', error.request);
//         alert('Login failed: No response from server');
//       } else {
//         console.error('Error message:', error.message);
//         alert(`Login failed: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <div className="remember-me">
//         <input
//           type="checkbox"
//           checked={rememberMe}
//           onChange={e => setRememberMe(e.target.checked)}
//         />
//         <label>Remember Me</label>
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
//==========================================================================





import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/users/login', {
        username,
        password,
        rememberMe,
      });
      console.log(response.data);
      alert('Login successful');
      navigate("/turf");
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        alert('Login failed: No response from server');
      } else {
        console.error('Error message:', error.message);
        alert(`Login failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="login-body">
    <div id="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="remember-me">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={e => setRememberMe(e.target.checked)}
        />
        <label>Remember Me</label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;








// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/users/login', {
//         username,
//         password,
//         rememberMe,
//       });
//       console.log(response.data);
//       alert('Login successful');
//       // navigate('/home'); // Redirect to HomePage on successful login
//       navigate("/turf")
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         alert(`Login failed: ${error.response.data.message}`);
//       } else if (error.request) {
//         console.error('Error request:', error.request);
//         alert('Login failed: No response from server');
//       } else {
//         console.error('Error message:', error.message);
//         alert(`Login failed: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div id="login-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <div className="remember-me">
//         <input
//           type="checkbox"
//           checked={rememberMe}
//           onChange={e => setRememberMe(e.target.checked)}
//         />
//         <label>Remember Me</label>
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
