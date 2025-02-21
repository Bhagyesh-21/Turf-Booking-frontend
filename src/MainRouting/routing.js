// // // import React, { Children } from 'react'
// // // import { createBrowserRouter } from 'react-router-dom'
// // // import LoginComp from '../layout/LoginComp'
// // // import HomeComp from '../component/HomeComp'
// // // import AboutComp from '../component/AboutComp'
// // // import ProductComp from '../component/ProductComp'
// // // import ContactComp from '../component/ContactComp'
// // // import MainDashboardComp from '../layout/MainDashboardComp'
// // // import EntryPage from '../layout/EntryPage'
// // // import LoginPage from '../layout/LoginPage'

// // import { createBrowserRouter } from "react-router-dom"
// // import EntryPage from "../component/EntryPage"
// // import LoginPage from "../layout/LoginPage"
// // import HomePage from "../layout/HomePage"
// // import { Children, useState } from "react"
// // import AboutComp from "../component/AboutComp"
// // import ContactForm from "../component/ContactComp"
// // import BadmintonComp from "../component/BadmintonComp"
// // import CricketComp from "../component/CricketComp"
// // import FootballComp from "../component/FootballComp"
// // import PaymentPage from "../layout/PaymentPage"
// // import BookingsComp from "../component/BookingComp"
// // // import AdminLoginComp from "../components2/AdminLoginComp"
// // import AdminDashboardComp from "../components2/AdminDashboardComp"
// // import AdminTurfComp from "../components2/AdminTurfComp"
// // import AdminSportFormComp from "../components2/AdminSportFormComp"
// // import AdminRegisteredTurfComp from "../components2/AdminRegisteredTurfComp"







// // // const AdminTurfWrapper = () => {
// // //     const [turfs, setTurfs] = useState([]);

// // //     const handleAddTurf = (newTurf) => {
// // //         setTurfs([...turfs, newTurf]);
// // //     };

// // //     return (
// // //         <AdminTurfComp 
// // //             turfs={turfs} 
// // //             onAddTurf={handleAddTurf} 
// // //         />
// // //     );
// // // };

// // // const [turfs, setTurfs] = useState([]);

// // // const handleAddTurf = (newTurf) => {
// // //     setTurfs([...turfs, newTurf]);
// // // };





// // const routing = createBrowserRouter([
// //     // {path:"", element:<LoginComp></LoginComp>},

// //     // {path:"", element:<EntryPage/>},
// //     // { path: '/login', element: <LoginPage /> , Children:[
// //     //     { path: "/home", element: <HomePage /> } 
// //     // ]}

// //     {path:"", element:<EntryPage/>},
// //     { path: '/login', element: <LoginPage /> },
// //     { path: "/turf", element: <HomePage /> },
// //     { path: "/about", element: <AboutComp /> },
// //     { path: "/contact", element: <ContactForm /> },
// //     { path: "/badminton", element: <BadmintonComp /> },
// //     { path: "/cricket", element: <CricketComp /> },
// //     { path: "/football", element: <FootballComp /> },
// //     { path: "/payment", element: <PaymentPage /> },
// //     { path: "/bookings", element: <BookingsComp /> },






// //     // { path: "/admin", element: <AdminDashboardComp /> },
// //     // { path: "/admin-turf", element: <AdminTurfComp /> },
// //     // { path: "/admin/:sport", element: <AdminSportFormComp /> },
// //     // { path: "/admin-registered-turfs", element: <AdminRegisteredTurfComp /> },
// //     // { path: "/admin/new-turf", element: <AdminSportFormComp /> },

// //     { path: "/admin", element: <AdminDashboardComp /> },
// //     { path: "/admin-turf", element: <AdminTurfComp /> },
// //     { path: "/admin/:sport", element: <AdminSportFormComp /> },
// //     { path: "/admin-registered-turfs", element: <AdminRegisteredTurfComp /> },




    
// //     // {path:"login", element:<LoginPage/>},

// //     // {path:"/m", element:<MainDashboardComp/>, children:[
// //     //     {path:"m", element:<HomeComp/>},
// //     //     {path:"about", element:<AboutComp/>},
// //     //     {path:"home", element:<HomeComp/>},
// //     //     {path:"products", element:<ProductComp/>},
// //     //     {path:"contact", element:<ContactComp/>}
// //     // ]},

// //     // {path:"", element:<HomeComp/>},
// //     // {path:"about", element:<AboutComp/>},
// //     // {path:"home", element:<HomeComp/>},
// //     // {path:"products", element:<ProductComp/>},
// //     // {path:"contact", element:<ContactComp/>}
    
    
// // ])
// // export default routing





// // // import React from 'react';
// // // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // // import EntryNavComp from '../component/EntryNavComp';
// // // import LoginPage from '../layout/LoginPage';

// // // const Routing = () => {
// // //   return (
// // //     <BrowserRouter>
// // //       <div>
// // //         <EntryNavComp />
// // //         <Routes>
// // //           <Route path="/Login" element={<LoginPage />} />
// // //           {/* Add more routes here */}
// // //         </Routes>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // };

// // // export default Routing;
















// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EntryPage from "../component/EntryPage";
// import LoginPage from "../layout/LoginPage";
// import HomePage from "../layout/HomePage";
// import AboutComp from "../component/AboutComp";
// import ContactForm from "../component/ContactComp";
// import BadmintonComp from "../component/BadmintonComp";
// import CricketComp from "../component/CricketComp";
// import FootballComp from "../component/FootballComp";
// import PaymentPage from "../layout/PaymentPage";
// import BookingsComp from "../component/BookingComp";
// import AdminDashboardComp from "../components2/AdminDashboardComp";
// import AdminTurfComp from "../components2/AdminTurfComp";
// import AdminSportFormComp from "../components2/AdminSportFormComp";
// import AdminRegisteredTurfComp from "../components2/AdminRegisteredTurfComp";
// import AdminTurfsComp from "../components2/AdminTurfsComp"; // New import
// import { useState } from "react";

// const App = () => { 
//     const [turfs, setTurfs] = useState([]);

//     const handleAddTurf = (newTurf) => {
//         setTurfs([...turfs, newTurf]);
//     };

//     const routing = createBrowserRouter([
//         { path: '', element: <EntryPage /> },
//         { path: '/login', element: <LoginPage /> },
//         { path: '/turf', element: <HomePage /> },
//         { path: '/about', element: <AboutComp /> },
//         { path: '/contact', element: <ContactForm /> },
//         { path: '/badminton', element: <BadmintonComp /> },
//         { path: '/cricket', element: <CricketComp /> },
//         { path: '/football', element: <FootballComp /> },
//         { path: '/payment', element: <PaymentPage /> },
//         { path: '/bookings', element: <BookingsComp /> },
//         { path: '/admin', element: <AdminDashboardComp /> },
//         {
//             path: '/admin-turf',
//             element: <AdminTurfComp />,
//             children: [
//                 { path: 'new-turf', element: <AdminSportFormComp onAddTurf={handleAddTurf} /> },
//                 { path: 'registered-turfs', element: <AdminRegisteredTurfComp turfs={turfs} /> },
//             ],
//         },
//         { path: '/admin/:sport', element: <AdminSportFormComp onAddTurf={handleAddTurf} /> },
//         { path: '/admin-registered-turfs', element: <AdminRegisteredTurfComp turfs={turfs} /> },
//         { path: '/admin-turfs', element: <AdminTurfsComp turfs={turfs} setTurfs={setTurfs} /> }, // New route
//     ]);

//     return <RouterProvider router={routing} />;
// };

// export default App;
