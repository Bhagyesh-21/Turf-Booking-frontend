// import logo from './logo.svg';
// import './App.css';
// import LoginComp from './layout/LoginComp';
// import NavComp from './layout/NavComp';
// import HomeComp from './component/HomeComp';
// import AboutComp from './component/AboutComp';
// import ProductComp from './component/ProductComp';
// import ContactComp from './component/ContactComp';
// import MainDashboardComp from './layout/MainDashboardComp';
// import PageNotFoundComp from './layout/PageNotFoundComp';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

      
//       {/* <HomeComp/> {<hr/>}
//       <AboutComp/> {<hr/>}
//       <ProductComp/> {<hr/>}
//       <ContactComp/> {<hr/>} */}

//       {/* <LoginComp/> {<hr/>} */}
//       {/* <MainDashboardComp/> */}
//       {/* <NavComp/> {<hr/>} */}
//       {/* <PageNotFoundComp/> */}
//       {/*                                 <NavComp></NavComp>       //why not responding                  */}
//     </div>
//   );
// }

// export default App;





// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // function App() {
// //     const [greeting, setGreeting] = useState('');

// //     useEffect(() => {
// //         axios.get('/api/greeting')
// //             .then(response => {
// //                 setGreeting(response.data);
// //             })
// //             .catch(error => {
// //                 console.error('There was an error!', error);
// //             });
// //     }, []);

// //     return (
// //         <div className="App">
// //             <h1>{greeting}</h1>
// //         </div>
// //     );
// // }

// // export default App;













import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EntryPage from '../src/component/EntryPage';
// import LoginPage from '../src/component/Login';
import HomePage from '../src/layout/HomePage';
import AboutComp from '../src/component/AboutComp';
import ContactForm from '../src/component/ContactComp';
import BadmintonComp from '../src/component/BadmintonComp';
import CricketComp from '../src/component/CricketComp';
import FootballComp from '../src/component/FootballComp';
import PaymentPage from '../src/layout/PaymentPage';
import BookingsComp from '../src/component/BookingComp';
import AdminDashboardComp from '../src/components2/AdminDashboardComp';
import AdminTurfComp from '../src/components2/AdminTurfComp';
import AdminSportFormComp from '../src/components2/AdminSportFormComp';
import AdminRegisteredTurfComp from '../src/components2/AdminRegisteredTurfComp';
import AdminTurfsComp from '../src/components2/AdminTurfsComp';
// import EditTurfComp from '../src/CURD/EditTurfComp';
import TurfDashComp from './CURD/TurfDashComp';
import TurfService from './CURD/TurfService';
import PaymentPopup from './component/PaymentPopup';
// import Bookings from './component/Bookings';
import AdminAddTurfFormComp from './components2/AdminAddTurfFormComp';
import EditTurfComp from './components2/EditTurfComp Component';
import AuthPage from './component/AuthPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './component/Loader';
import LastFooter from './component/LastFooter';
import PayButton from './components3/PayButton';
import UserAccountComp from './component/UserAccountComp';
import ViewTurf from './component/ViewTurf';
import GoogleSignIn from './component/GoogleSignIn';
import PageNotFoundComp from './layout/PageNotFoundComp';


const App = () => {
    const [turfs, setTurfs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddTurf = (newTurf) => {
        setTurfs([...turfs, newTurf]);
    };

    const router = createBrowserRouter([
        { path: '', element: <EntryPage /> },
        // { path: '/login', element: <LoginPage /> },
        { path: '/login', element: <AuthPage  /> },
        { path: '/g-signin', element: <GoogleSignIn /> },
        { path: '/turf', element: <HomePage /> },
        { path: '/about', element: <AboutComp /> },
        { path: '/contact', element: <ContactForm /> },
        { path: '/badminton', element: <BadmintonComp /> },
        { path: '/cricket', element: <CricketComp /> },
        { path: '/football', element: <FootballComp /> },
        { path: '/payment', element: <PaymentPage /> },
        { path: '/bookings', element: <BookingsComp /> },
        { path: '/admin', element: <AdminDashboardComp /> },
        { path: '/admin-turf', element: <AdminTurfComp /> },
        // { path: '/admin-edit-turf', element: <EditTurfComp /> },
        { path: '/admin/:sport', element: <AdminSportFormComp onAddTurf={handleAddTurf} /> },
        { path: '/admin-registered-turfs', element: <AdminRegisteredTurfComp turfs={turfs} /> },
        { path: '/admin-turfs', element: <AdminTurfsComp turfs={turfs} setTurfs={setTurfs} /> },
        { path: '/admin-edit-turf1', element: <TurfDashComp /> },
        { path: '/admin-edit-turf2', element: <TurfService /> },
        { path: '/payment-popup', element: <PaymentPopup /> },
        // { path: '/my-bookings', element: <Bookings /> },
        // { path: '/admin/edit-turf/:id', element: <EditTurfComp /> },
        { path: '/admin/new-turf', element: <AdminAddTurfFormComp /> },
        { path: '/admin/edit-turf/:id', element: <EditTurfComp /> },
        { path: '/last-footer', element: <LastFooter /> },
        { path: '/pay', element: <PayButton /> },
        { path: '/account', element: <UserAccountComp /> },
        { path: '/view-turf', element: <ViewTurf /> },
    { path: '*', element: <PageNotFoundComp /> }, 
    ]);
 
    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setIsLoading(false);
        };

        // Listen for route changes
        const unlisten = router.subscribe((state) => {
            if (state.navigation.state === 'loading') {
                handleRouteChangeStart();
            } else if (state.navigation.state === 'idle') {
                // handturfleRouteChangeComplete();
            }
        });

        return () => {
            unlisten();
        };
    }, [router]);

    return (
        <>
            {isLoading && <Loader />}
            <RouterProvider router={router} />
        </>
    );
};

export default App;
