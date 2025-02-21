import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:8081/api/users/register', {
        username,
        password,
      });
      console.log(response.data);
      alert('Registration successful');
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        alert(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        // No response received from the server
        console.error('Error request:', error.request);
        alert('Registration failed: No response from server');
      } else {
        // Other errors
        console.error('Error message:', error.message);
        alert(`Registration failed: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      {errors.username && <p className="error">{errors.username}</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
















// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/register', {
//         username,
//         password
//       });
//       console.log(response.data);
//       alert('Registration successful');
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthPage.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/users/register', {
//         username,
//         password,
//       });
//       console.log(response.data);
//       alert('Registration successful');
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         console.error('Error response:', error.response.data);
//         alert(`Registration failed: ${error.response.data.message}`);
//       } else if (error.request) {
//         // No response received from the server
//         console.error('Error request:', error.request);
//         alert('Registration failed: No response from server');
//       } else {
//         // Other errors
//         console.error('Error message:', error.message);
//         alert(`Registration failed: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
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
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;







