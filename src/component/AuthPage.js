// import React, { useState } from 'react';
// import Register from './Register';
// import Login from './Login';
// import ForgotPassword from './ForgotPassword';
// import './AuthPage.css'; // Import the CSS file

// const AuthPage = () => {
//   const [showRegister, setShowRegister] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   return (
//     <div className="auth-page">
//     <div className="card">
//       {showForgotPassword ? (
//         <ForgotPassword />
//       ) : showRegister ? (
//         <Register />  
//       ) : (
//         <Login />
//       )}
//       <div className="toggle-buttons">
//         {showForgotPassword ? (
//           <button id='user-login-btn' onClick={() => setShowForgotPassword(false)}>Back to Login</button>
//         ) : (
//           <>
//             <button id='user-re-btn' onClick={() => setShowRegister(!showRegister)}>
//               {showRegister ? 'Back to Login' : 'Register'}
//             </button>
//             <button id='user-re-btn' onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
//           </>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AuthPage;




//=====with firebase
// import React, { useState } from 'react';
// import Register from './Register';
// import Login from './Login';
// import ForgotPassword from './ForgotPassword';
// import './AuthPage.css'; // Import the CSS file
// import GoogleSignIn from './GoogleSignIn';

// const AuthPage = () => {
//   const [showRegister, setShowRegister] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   return (
//     <div className="auth-page">
//       <div className="card">
//         {showForgotPassword ? (
//           <ForgotPassword />
//         ) : showRegister ? (
//           <Register />
//         ) : (
//           <div>
//             <Login />
//             <GoogleSignIn />
//           </div>
//         )}
//         <div className="toggle-buttons">
//           {showForgotPassword ? (
//             <button id='user-login-btn' onClick={() => setShowForgotPassword(false)}>Back to Login</button>
//           ) : (
//             <>
//               <button id='user-re-btn' onClick={() => setShowRegister(!showRegister)}>
//                 {showRegister ? 'Back to Login' : 'Register'}
//               </button>
//               <button id='user-re-btn' onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



///============

import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import './AuthPage.css'; // Import the CSS file
import GoogleSignIn from './GoogleSignIn';

const AuthPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="card">
        {showForgotPassword ? (
          <ForgotPassword />
        ) : showRegister ? (
          <Register />
        ) : (
          <div>
            <Login />
            <GoogleSignIn />
          </div>
        )}
        <div className="toggle-buttons">
          {showForgotPassword ? (
            <button id='user-login-btn' onClick={() => setShowForgotPassword(false)}>Back to Login</button>
          ) : (
            <>
              <button id='user-re-btn' onClick={() => setShowRegister(!showRegister)}>
                {showRegister ? 'Back to Login' : 'Register'}
              </button>
              <button id='user-re-btn' onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
