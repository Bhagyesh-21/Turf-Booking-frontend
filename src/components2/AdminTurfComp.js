// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const navigate = useNavigate();

// // //     const handleOptionClick = (sport) => {
// // //         // Navigate to sport-specific page (not implemented here, just a placeholder)
// // //         console.log(`Navigating to ${sport}`);
// // //         // Example: navigate(`/admin-turf/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Sport</h2>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;









// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const navigate = useNavigate();

// // //     const handleOptionClick = (sport) => {
// // //         // Navigate to sport-specific page (not implemented here, just a placeholder)
// // //         console.log(`Navigating to ${sport}`);
// // //         // Example: navigate(`/admin-turf/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Your Sport and Register Your Turf</h2>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;









// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const navigate = useNavigate();

// // //     const handleOptionClick = (sport) => {
// // //         navigate(`/admin/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Sport</h2>
// // //             <div className="actions">
// // //                 <button onClick={() => navigate('/admin-registered-turfs')}>My Registered Turfs</button>
// // //                 <button onClick={() => navigate('/admin/new-turf')}>Add New Turf</button>
// // //             </div>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;






// // // import React, { useState } from 'react';
// // // import { Route, Routes, useNavigate } from 'react-router-dom';
// // // import AdminSportFormComp from './AdminSportFormComp';
// // // import AdminRegisteredTurfComp from './AdminRegisteredTurfComp';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const [turfs, setTurfs] = useState([]);
// // //     const navigate = useNavigate();

// // //     const handleAddTurf = (newTurf) => {
// // //         setTurfs([...turfs, newTurf]);
// // //     };

// // //     const handleOptionClick = (sport) => {
// // //         navigate(`/admin/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Sport</h2>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //             <div className="actions">
// // //                 <button onClick={() => navigate('/admin-registered-turfs')}>My Registered Turfs</button>
// // //                 <button onClick={() => navigate('/admin/new-turf')}>Add New Turf</button>
// // //             </div>
// // //             <Routes>
// // //                 <Route path="/admin/new-turf" element={<AdminSportFormComp onAddTurf={handleAddTurf} />} />
// // //                 <Route path="/admin-registered-turfs" element={<AdminRegisteredTurfComp turfs={turfs} />} />
// // //             </Routes>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;









// // // // // with api :

// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // // const AdminTurfComp = () => {
// // // //     const navigate = useNavigate();

// // // //     const handleOptionClick = (sport) => {
// // // //         navigate(`/admin/${sport.toLowerCase()}`);
// // // //     };

// // // //     return (
// // // //         <div className="admin-turf">
// // // //             <h2>Select Sport</h2>
// // // //             <div className="options">
// // // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AdminTurfComp;











// // // import React, { useState } from 'react';
// // // import { useNavigate, Routes, Route } from 'react-router-dom';
// // // import AdminSportFormComp from './AdminSportFormComp';
// // // import AdminRegisteredTurfComp from './AdminRegisteredTurfComp';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const [turfs, setTurfs] = useState([]);
// // //     const navigate = useNavigate();

// // //     const handleAddTurf = (newTurf) => {
// // //         setTurfs([...turfs, newTurf]);
// // //         navigate('/admin-registered-turfs'); // Navigate to registered turfs after adding
// // //     };

// // //     const handleOptionClick = (sport) => {
// // //         navigate(`/admin/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Sport</h2>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //             <div className="actions">
// // //                 <button onClick={() => navigate('/admin-registered-turfs')}>My Registered Turfs</button>
// // //                 <button onClick={() => navigate('/admin/new-turf')}>Add New Turf</button>
// // //             </div>
// // //             <Routes>
// // //                 <Route path="/admin/new-turf" element={<AdminSportFormComp onAddTurf={handleAddTurf} />} />
// // //                 <Route path="/admin-registered-turfs" element={<AdminRegisteredTurfComp turfs={turfs} />} />
// // //             </Routes>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;








// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const [turfs, setTurfs] = useState([]);
// // //     const navigate = useNavigate();

// // //     const handleAddTurf = (newTurf) => {
// // //         setTurfs([...turfs, newTurf]);
// // //         navigate('/admin-registered-turfs'); // Navigate to registered turfs after adding
// // //     };

// // //     const handleOptionClick = (sport) => {
// // //         navigate(`/admin/${sport.toLowerCase()}`);
// // //     };

// // //     return (
// // //         <div className="admin-turf">
// // //             <h2>Select Sport</h2>
// // //             <div className="options">
// // //                 <button onClick={() => handleOptionClick('Cricket')}>Cricket</button>
// // //                 <button onClick={() => handleOptionClick('Football')}>Football</button>
// // //                 <button onClick={() => handleOptionClick('Badminton')}>Badminton</button>
// // //             </div>
// // //             <div className="actions">
// // //                 <button onClick={() => navigate('/admin/new-turf')}>Add New Turf</button>
// // //                 <button onClick={() => navigate('/admin-registered-turfs')}>My Registered Turfs</button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;











// // // import React, { useEffect, useState } from 'react';
// // // import { DeleteForever as DeleteForeverIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
// // // import { Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const [turfs, setTurfs] = useState([]);

// // //     useEffect(() => {
// // //         fetchData();
// // //     }, []);

// // //     const fetchData = () => {
// // //         axios.get('http://localhost:8888/turfs')
// // //             .then((res) => {
// // //                 setTurfs(res.data);
// // //             })
// // //             .catch((error) => {
// // //                 console.log('Error fetching turfs:', error);
// // //             });
// // //     };

// // //     const deleteTurf = (id) => {
// // //         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
// // //             axios.delete(`http://localhost:8888/turfs/${id}`)
// // //                 .then(() => {
// // //                     window.alert('Turf deleted successfully');
// // //                     fetchData();
// // //                 })
// // //                 .catch((error) => {
// // //                     console.log('Error deleting turf:', error);
// // //                 });
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h1>Turf Dashboard</h1>
// // //             <Link to='/admin/new-turf' className='btn btn-outline-success'>
// // //                 <AddIcon /> Add New Turf
// // //             </Link>
// // //             <br />
// // //             <table className="table table-bordered table-hover table-striped">
// // //                 <thead>
// // //                     <tr>
// // //                         <th>Index</th>
// // //                         <th>Purpose</th>
// // //                         <th>Turf Name</th>
// // //                         <th>Location Name</th>
// // //                         <th>Location URL</th>
// // //                         <th>Price</th>
// // //                         <th>Image</th>
// // //                         <th>Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {turfs.map((turf, index) => (
// // //                         <tr key={turf.id}>
// // //                             <td>{index + 1}</td>
// // //                             <td>{turf.purpose}</td>
// // //                             <td>{turf.turfName}</td>
// // //                             <td>{turf.locationName}</td>
// // //                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
// // //                             <td>{turf.price}</td>
// // //                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
// // //                             <td>
// // //                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
// // //                                     <EditIcon />
// // //                                 </Link>
// // //                                 {" "}
// // //                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
// // //                                     <DeleteForeverIcon />
// // //                                 </button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;













// // // import React, { useState } from 'react';
// // // import { DeleteForever as DeleteForeverIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import './AdminTurfComp.css'; // Add custom styles for the component

// // // const AdminTurfComp = () => {
// // //     const [turfs, setTurfs] = useState([
// // //         {
// // //             id: 1,
// // //             purpose: 'Cricket',
// // //             turfName: 'Sunny Cricket Ground',
// // //             locationName: 'Mumbai, India',
// // //             locationUrl: 'https://example.com/mumbai-cricket-ground',
// // //             price: '1500',
// // //             imageUrl: 'https://via.placeholder.com/150'
// // //         },
// // //         {
// // //             id: 2,
// // //             purpose: 'Football',
// // //             turfName: 'Green Field Football',
// // //             locationName: 'Delhi, India',
// // //             locationUrl: 'https://example.com/delhi-football-field',
// // //             price: '2000',
// // //             imageUrl: 'https://via.placeholder.com/150'
// // //         },
// // //         {
// // //             id: 3,
// // //             purpose: 'Badminton',
// // //             turfName: 'Ace Badminton Court',
// // //             locationName: 'Bangalore, India',
// // //             locationUrl: 'https://example.com/bangalore-badminton-court',
// // //             price: '1000',
// // //             imageUrl: 'https://via.placeholder.com/150'
// // //         }
// // //     ]);
// // //     const navigate = useNavigate();

// // //     const deleteTurf = (id) => {
// // //         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
// // //             setTurfs(turfs.filter(turf => turf.id !== id));
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h1>Turf Dashboard</h1>
// // //             <Link to='/admin/new-turf' className='btn btn-outline-success'>
// // //                 <AddIcon /> Add New Turf
// // //             </Link>
// // //             <br />
// // //             <table className="table table-bordered table-hover table-striped">
// // //                 <thead>
// // //                     <tr>
// // //                         <th>Index</th>
// // //                         <th>Purpose</th>
// // //                         <th>Turf Name</th>
// // //                         <th>Location Name</th>
// // //                         <th>Location URL</th>
// // //                         <th>Price</th>
// // //                         <th>Image</th>
// // //                         <th>Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {turfs.map((turf, index) => (
// // //                         <tr key={turf.id}>
// // //                             <td>{index + 1}</td>
// // //                             <td>{turf.purpose}</td>
// // //                             <td>{turf.turfName}</td>
// // //                             <td>{turf.locationName}</td>
// // //                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
// // //                             <td>{turf.price}</td>
// // //                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
// // //                             <td>
// // //                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
// // //                                     <EditIcon />
// // //                                 </Link>
// // //                                 {" "}
// // //                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
// // //                                     <DeleteForeverIcon />
// // //                                 </button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // };

// // // export default AdminTurfComp;














// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './AdminTurfComp.css'; // Add custom styles for the component

// // const AdminTurfComp = () => {
// //     const [turfs, setTurfs] = useState([
// //         {
// //             id: 1,
// //             purpose: 'Cricket',
// //             turfName: 'Sunny Cricket Ground',
// //             locationName: 'Mumbai, India',
// //             locationUrl: 'https://example.com/mumbai-cricket-ground',
// //             price: '1500',
// //             imageUrl: 'https://via.placeholder.com/150'
// //         },
// //         {
// //             id: 2,
// //             purpose: 'Football',
// //             turfName: 'Green Field Football',
// //             locationName: 'Delhi, India',
// //             locationUrl: 'https://example.com/delhi-football-field',
// //             price: '2000',
// //             imageUrl: 'https://via.placeholder.com/150'
// //         },
// //         {
// //             id: 3,
// //             purpose: 'Badminton',
// //             turfName: 'Ace Badminton Court',
// //             locationName: 'Bangalore, India',
// //             locationUrl: 'https://example.com/bangalore-badminton-court',
// //             price: '1000',
// //             imageUrl: 'https://via.placeholder.com/150'
// //         }
// //     ]);
// //     const navigate = useNavigate();

// //     const deleteTurf = (id) => {
// //         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
// //             setTurfs(turfs.filter(turf => turf.id !== id));
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Turf Dashboard</h1>
// //             <Link to='/admin/new-turf' className='btn btn-outline-success'>
// //                 Add New Turf
// //             </Link>
// //             <br />
// //             <table className="table table-bordered table-hover table-striped">
// //                 <thead>
// //                     <tr>
// //                         <th>Index</th>
// //                         <th>Purpose</th>
// //                         <th>Turf Name</th>
// //                         <th>Location Name</th>
// //                         <th>Location URL</th>
// //                         <th>Price</th>
// //                         <th>Image</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {turfs.map((turf, index) => (
// //                         <tr key={turf.id}>
// //                             <td>{index + 1}</td>
// //                             <td>{turf.purpose}</td>
// //                             <td>{turf.turfName}</td>
// //                             <td>{turf.locationName}</td>
// //                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
// //                             <td>{turf.price}</td>
// //                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
// //                             <td>
// //                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
// //                                     Edit
// //                                 </Link>
// //                                 {" "}
// //                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
// //                                     Delete
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default AdminTurfComp;















// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './AdminTurfComp.css'; // Add custom styles for the component

// const AdminTurfComp = () => {
//     const [turfs, setTurfs] = useState([
//         {
//             id: 1,
//             purpose: 'Cricket',
//             turfName: 'Sunny Cricket Ground',
//             locationName: 'Mumbai, India',
//             locationUrl: 'https://example.com/mumbai-cricket-ground',
//             price: '1500',
//             imageUrl: '../images/cricket1.jpg'
//         },
//         {
//             id: 2,
//             purpose: 'Football',
//             turfName: 'Green Field Football',
//             locationName: 'Delhi, India',
//             locationUrl: 'https://example.com/delhi-football-field',
//             price: '2000',
//             imageUrl: '../images/football1.jpg'
//         },
//         {
//             id: 3,
//             purpose: 'Badminton',
//             turfName: 'Ace Badminton Court',
//             locationName: 'Bangalore, India',
//             locationUrl: 'https://example.com/bangalore-badminton-court',
//             price: '1000',
//             imageUrl: '../images/badminton1.jpg'
//         }
//     ]);
//     const navigate = useNavigate();

//     const deleteTurf = (id) => {
//         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
//             setTurfs(turfs.filter(turf => turf.id !== id));
//         }
//     };

//     return (
//         <div>
//             <h1 id='turfdashboard'>Turf Dashboard</h1>
//             <Link to='/admin/new-turf' className='btn btn-outline-success' id='add-new'>
//                 Add New Turf
//             </Link>
//             <br />
//             <table className="table table-bordered table-hover table-striped">
//                 <thead>
//                     <tr>
//                         <th>Index</th>
//                         <th>Purpose</th>
//                         <th>Turf Name</th>
//                         <th>Location Name</th>
//                         <th>Location URL</th>
//                         <th>Price</th>
//                         <th>Image</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {turfs.map((turf, index) => (
//                         <tr key={turf.id}>
//                             <td>{index + 1}</td>
//                             <td>{turf.purpose}</td>
//                             <td>{turf.turfName}</td>
//                             <td>{turf.locationName}</td>
//                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
//                             <td>{turf.price}</td>
//                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
//                             <td>
//                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
//                                     Edit
//                                 </Link>
//                                 {" "}
//                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminTurfComp;






// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './AdminTurfComp.css'; // Add custom styles for the component
// import TurfService from './TurfService';

// const AdminTurfComp = () => {
//     const [turfs, setTurfs] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchTurfs();
//     }, []);

//     const fetchTurfs = async () => {
//         try {
//             const response = await TurfService.getTurfs();
//             setTurfs(response.data);
//         } catch (error) {
//             console.error('Error fetching turfs', error);
//         }
//     };

//     const deleteTurf = async (id) => {
//         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
//             try {
//                 await TurfService.deleteTurf(id);
//                 fetchTurfs(); // Refresh the list after deletion
//             } catch (error) {
//                 console.error('Error deleting turf', error);
//             }
//         }
//     };

//     return (
//         <div>
//             <h1 id='turfdashboard'>Turf Dashboard</h1>
//             <Link to='/admin/new-turf' className='btn btn-outline-success' id='add-new'>
//                 Add New Turf
//             </Link>
//             <br />
//             <table className="table table-bordered table-hover table-striped">
//                 <thead>
//                     <tr>
//                         <th>Index</th>
//                         <th>Purpose</th>
//                         <th>Turf Name</th>
//                         <th>Location Name</th>
//                         <th>Location URL</th>
//                         <th>Price</th>
//                         <th>Image</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {turfs.map((turf, index) => (
//                         <tr key={turf.id}>
//                             <td>{index + 1}</td>
//                             <td>{turf.purpose}</td>
//                             <td>{turf.turfName}</td>
//                             <td>{turf.locationName}</td>
//                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
//                             <td>{turf.price}</td>
//                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
//                             <td>
//                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
//                                     Edit
//                                 </Link>
//                                 {" "}
//                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminTurfComp;






// //==> FINAL WITH API But with link:

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AdminTurfComp.css'; // Add custom styles for the component
// import axios from 'axios';

// const AdminTurfComp = () => {
//     const [turfs, setTurfs] = useState([]);
//     const [showTurfs, setShowTurfs] = useState(false);

//     const BASE_URL = 'http://localhost:8088/api/turfs';

//     const fetchTurfs = async () => {
//         try {
//             const response = await axios.get(BASE_URL);
//             setTurfs(response.data);
//             setShowTurfs(true);
//         } catch (error) {
//             console.error('Error fetching turfs', error);
//         }
//     };

//     const deleteTurf = async (id) => {
//         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
//             try {
//                 await axios.delete(`${BASE_URL}/${id}`);
//                 fetchTurfs(); // Refresh the list after deletion
//             } catch (error) {
//                 console.error('Error deleting turf', error);
//             }
//         }
//     };

//     return (
//         <div>
//             <h1 id='turfdashboard'>Turf Dashboard</h1>
//             <div className="button-container">
//                 <Link to='/admin/new-turf' className='btn btn-outline-success' id='add-new'>
//                     Add New Turf
//                 </Link>
//                 <button onClick={fetchTurfs} className='btn btn-outline-info' id='show-all'>
//                     Show All Turfs
//                 </button>
//             </div>
//             <br />
//             {showTurfs && (
//                 <table className="table table-bordered table-hover table-striped">
//                     <thead>
//                         <tr>
//                             <th>Index</th>
//                             <th>Turf Name</th>
//                             <th>Location Name</th>
//                             <th>Location URL</th>
//                             <th>Price</th>
//                             <th>Purpose</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {turfs.map((turf, index) => (
//                             <tr key={turf.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{turf.turfName}</td>
//                                 <td>{turf.locationName}</td>
//                                 <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
//                                 <td>{turf.price}</td>
//                                 <td>{turf.purpose}</td>
//                                 <td>
//                                     <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
//                                         Edit
//                                     </Link>
//                                     {" "}
//                                     <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default AdminTurfComp;










// // ==> FINAL WITH API AND BUTTON
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminTurfComp.css'; // Add custom styles for the component
import axios from 'axios';

const AdminTurfComp = () => {
    const [turfs, setTurfs] = useState([]);
    const [showTurfs, setShowTurfs] = useState(false);
    const navigate = useNavigate();

    const BASE_URL = 'http://localhost:8088/api/turfs';

    const fetchTurfs = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setTurfs(response.data);
            setShowTurfs(true);
        } catch (error) {
            console.error('Error fetching turfs', error);
        }
    };

    const deleteTurf = async (id) => {
        if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
            try {
                await axios.delete(`${BASE_URL}/${id}`);
                fetchTurfs(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting turf', error);
            }
        }
    };

    const handleAddTurf = () => {
        navigate('/admin/new-turf');
    };

    const handleEditTurf = (id) => {
        navigate(`/admin/edit-turf/${id}`);
    };

    return (
        <div id='admin-turf-body'>
            <h1 id='turfdashboard'>Turf Dashboard</h1>
            <div className="button-container">
                <button onClick={handleAddTurf} className='btn btn-outline-success' id='add-new'>
                    Add New Turf
                </button>
                <button onClick={fetchTurfs} className='btn btn-outline-info' id='show-all'>
                    Show All Turfs
                </button>
            </div>
            <br />
            {showTurfs && (
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Turf Name</th>
                            <th>Location Name</th>
                            <th>Location URL</th>
                            <th>Price</th>
                            <th>Purpose</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turfs.map((turf, index) => (
                            <tr id='show-data-row' key={turf.id}>
                                <td>{index + 1}</td>
                                <td>{turf.turfName}</td>
                                <td>{turf.locationName}</td>
                                <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
                                <td>{turf.price}</td>
                                <td>{turf.purpose}</td>
                                <td>
                                    <button onClick={() => handleEditTurf(turf.id)} className='btn btn-outline-success'>
                                        Edit
                                    </button>
                                    {" "}
                                    <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminTurfComp;











// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './AdminTurfComp.css'; // Add custom styles for the component
// // import TurfService from './TurfService';

// // const AdminTurfComp = () => {
// //     const [turfs, setTurfs] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         fetchTurfs();
// //     }, []);

// //     const fetchTurfs = async () => {
// //         try {
// //             const response = await TurfService.getTurfs();
// //             setTurfs(response.data);
// //         } catch (error) {
// //             console.error('Error fetching turfs', error);
// //         }
// //     };

// //     const deleteTurf = async (id) => {
// //         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
// //             try {
// //                 await TurfService.deleteTurf(id);
// //                 fetchTurfs(); // Refresh the list after deletion
// //             } catch (error) {
// //                 console.error('Error deleting turf', error);
// //             }
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Turf Dashboard</h1>
// //             <Link to='/admin/new-turf' className='btn btn-outline-success'>
// //                 Add New Turf
// //             </Link>
// //             <br />
// //             <table className="table table-bordered table-hover table-striped">
// //                 <thead>
// //                     <tr>
// //                         <th>Index</th>
// //                         <th>Purpose</th>
// //                         <th>Turf Name</th>
// //                         <th>Location Name</th>
// //                         <th>Location URL</th>
// //                         <th>Price</th>
// //                         <th>Image</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {turfs.map((turf, index) => (
// //                         <tr key={turf.id}>
// //                             <td>{index + 1}</td>
// //                             <td>{turf.purpose}</td>
// //                             <td>{turf.turfName}</td>
// //                             <td>{turf.locationName}</td>
// //                             <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
// //                             <td>{turf.price}</td>
// //                             <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
// //                             <td>
// //                                 <Link to={`/admin/edit-turf/${turf.id}`} className='btn btn-outline-success'>
// //                                     Edit
// //                                 </Link>
// //                                 {" "}
// //                                 <button type='button' onClick={() => deleteTurf(turf.id)} className='btn btn-outline-danger'>
// //                                     Delete
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default AdminTurfComp;
