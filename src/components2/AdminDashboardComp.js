// // // import React, { useState } from 'react';
// // // import AdminLoginComp from './AdminLoginComp';
// // // import AdminRegisterComp from './AdminRegisterComp';
// // // import AdminForgotPasswordComp from './AdminForgotPasswordComp';
// // // import AdminRememberMeComp from './AdminRememberMeComp';
// // // import AdminGetTurfOwnerComp from './AdminGetTurfOwnerComp';
// // // import './AdminStyle.css';


// // // const AdminDashboardComp = () => {
// // //     const [activeSection, setActiveSection] = useState(null);

// // //     const toggleSection = (section) => {
// // //         setActiveSection(activeSection === section ? null : section);
// // //     };

// // //     return (
// // //         <div>
// // //             <h1>Admin Dashboard</h1>

// // //             <div>
// // //                 <h2 onClick={() => toggleSection('login')}>Admin Login</h2>
// // //                 {activeSection === 'login' && <AdminLoginComp />}
// // //             </div>

// // //             <div>
// // //                 <h2 onClick={() => toggleSection('register')}>Admin Register</h2>
// // //                 {activeSection === 'register' && <AdminRegisterComp />}
// // //             </div>

// // //             <div>
// // //                 <h2 onClick={() => toggleSection('forgot-password')}>Forgot Password</h2>
// // //                 {activeSection === 'forgot-password' && <AdminForgotPasswordComp />}
// // //             </div>

// // //             <div>
// // //                 <h2 onClick={() => toggleSection('remember-me')}>Remember Me</h2>
// // //                 {activeSection === 'remember-me' && <AdminRememberMeComp />}
// // //             </div>

// // //             <div>
// // //                 <h2 onClick={() => toggleSection('get-turf-owner')}>Get Turf Owner</h2>
// // //                 {activeSection === 'get-turf-owner' && <AdminGetTurfOwnerComp />}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminDashboardComp;




// // import React, { useState } from 'react';
// // import AdminLoginComp from './AdminLoginComp';
// // import AdminRegisterComp from './AdminRegisterComp';
// // import AdminForgotPasswordComp from './AdminForgotPasswordComp';
// // import AdminRememberMeComp from './AdminRememberMeComp';
// // import AdminGetTurfOwnerComp from './AdminGetTurfOwnerComp';

// // const AdminDashboardComp = () => {
// //     const [visibleSection, setVisibleSection] = useState(null);

// //     const renderSection = () => {
// //         switch (visibleSection) {
// //             case 'login':
// //                 return (
// //                     <>
// //                         <section>
// //                             <AdminLoginComp onLogin={() => setVisibleSection('remember-me')} />
// //                         </section>
// //                         <section>
// //                             <AdminRememberMeComp />
// //                         </section>
// //                     </>
// //                 );
// //             case 'register':
// //                 return (
// //                     <section>
// //                         <AdminRegisterComp />
// //                     </section>
// //                 );
// //             case 'forgot-password':
// //                 return (
// //                     <section>
// //                         <AdminForgotPasswordComp />
// //                     </section>
// //                 );
// //             case 'remember-me':
// //                 return (
// //                     <section>
// //                         <AdminRememberMeComp />
// //                     </section>
// //                 );
// //             case 'get-turf-owner':
// //                 return (
// //                     <section>
// //                         <AdminGetTurfOwnerComp />
// //                     </section>
// //                 );
// //             default:
// //                 return null;
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Admin Dashboard</h1>
// //             <div>
// //                 <h2 onClick={() => setVisibleSection('login')}>Admin Login</h2>
// //             </div>
// //             <div>
// //                 <h2 onClick={() => setVisibleSection('register')}>Admin Register</h2>
// //             </div>
// //             <div>
// //                 <h2 onClick={() => setVisibleSection('forgot-password')}>Forgot Password</h2>
// //             </div>
// //             <div>
// //                 <h2 onClick={() => setVisibleSection('get-turf-owner')}>Get Turf Owner</h2>
// //             </div>
// //             {renderSection()}
// //         </div>
// //     );
// // };

// // export default AdminDashboardComp;













// import React, { useState } from 'react';
// import AdminLoginComp from './AdminLoginComp';
// import AdminRegisterComp from './AdminRegisterComp';
// import AdminForgotPasswordComp from './AdminForgotPasswordComp';
// import AdminRememberMeComp from './AdminRememberMeComp';
// import AdminGetTurfOwnerComp from './AdminGetTurfOwnerComp';
// import './AdminStyle.css';


// const AdminDashboardComp = () => {
//     const [visibleSection, setVisibleSection] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const renderSection = () => {
//         switch (visibleSection) {
//             case 'login':
//                 return (
//                     <>
//                         <section>
//                             <AdminLoginComp onLogin={() => setIsLoggedIn(true)} />
//                         </section>
//                         {isLoggedIn && (
//                             <section>
//                                 <AdminRememberMeComp />
//                             </section>
//                         )}
//                     </>
//                 );
//             case 'register':
//                 return (
//                     <section>
//                         <AdminRegisterComp />
//                     </section>
//                 );
//             case 'forgot-password':
//                 return (
//                     <section>
//                         <AdminForgotPasswordComp />
//                     </section>
//                 );
//             case 'get-turf-owner':
//                 return (
//                     <section>
//                         <AdminGetTurfOwnerComp />
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             <div>
//                 <h2 onClick={() => setVisibleSection('login')}>Admin Login</h2>
//             </div>
//             <div>
//                 <h2 onClick={() => setVisibleSection('register')}>Admin Register</h2>
//             </div>
//             <div>
//                 <h2 onClick={() => setVisibleSection('forgot-password')}>Forgot Password</h2>
//             </div>
//             <div>
//                 <h2 onClick={() => setVisibleSection('get-turf-owner')}>Get Turf Owner</h2>
//             </div>
//             {renderSection()}
//         </div>
//     );
// };

// export default AdminDashboardComp;









// import React from 'react';
// import { Route, Router, Routes } from 'react-router-dom';
// import AdminLoginComp from './AdminLoginComp';
// import AdminRegisterComp from './AdminRegisterComp';
// import AdminForgotPasswordComp from './AdminForgotPasswordComp';
// import AdminAuthPage from './AdminAuthPage';

// const AdminDashboardComp = () => {
//     return (
//         <div>
//             <h2>Admin Dashboard</h2>
//             <p>Welcome to the Admin Dashboard!</p>
            
//             {/* <Routes>
//                 <Route path="/admin-login" element={<AdminLoginComp />} />
//                 <Route path="/admin-register" element={<AdminRegisterComp />} />
//                 <Route path="/admin-forgot-password" element={<AdminForgotPasswordComp />} />
//                 <Route path="/admin-dashboard" element={<AdminDashboardComp />} />
//             </Routes> */}


//            <AdminAuthPage/>
        
//         </div>
//     );
// };

// export default AdminDashboardComp;








// FINAL 

import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './AdminDashboardComp.css'; // Add custom styles for the component
import AdminLoginComp from './AdminLoginComp';
import AdminRegisterComp from './AdminRegisterComp';
import AdminForgotPasswordComp from './AdminForgotPasswordComp';
import AdminAuthPage from './AdminAuthPage';

const AdminDashboardComp = () => {
    return (
        <div id="admin-dashboard">
            {/* <h2>Admin Dashboard</h2> */}
            {/* <p id='admin-dashboard-p'>Welcome to the Admin Dashboard!
                <br/>
                
            </p> */}
            
            <AdminAuthPage/>
        
        </div>
    );
};

export default AdminDashboardComp;
