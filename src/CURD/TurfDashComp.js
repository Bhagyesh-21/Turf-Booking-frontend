// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// import TurfService from './TurfService';

// const TurfDashComp = () => {
//   const [turfs, setTurfs] = useState([]);

//   useEffect(() => {
//     fetchTurfs();
//   }, []);

//   const fetchTurfs = async () => {
//     try {
//       const response = await TurfService.getTurfs();
//       setTurfs(response.data);
//     } catch (error) {
//       console.error('Error fetching turfs', error);
//     }
//   };

//   const deleteTurf = async (id) => {
//     try {
//       await TurfService.deleteTurf(id);
//       fetchTurfs(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting turf', error);
//     }
//   };

//   return (
//     <div>
//       <h1>This is TurfDashComp</h1>
//       <Link to="/turfadd" className='btn btn-outline-success'>
//         <AddIcon /> Add
//       </Link> <br />
//       <table className="table table-bordered table-hover table-striped">
//         <thead>
//           <tr>
//             <th>Sr.No.</th>
//             <th>Name</th>
//             <th>Purpose</th>
//             <th>Location</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             turfs.map((val, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{val.turfName}</td>
//                   <td>{val.purpose}</td>
//                   <td>{val.locationName}</td>
//                   <td>{val.price}</td>
//                   <td>
//                     <Link to={`/turfedit/${val.id}`} className='btn btn-outline-success'>
//                       <EditIcon />
//                     </Link>
//                     {" "}
//                     <button type='button' onClick={() => deleteTurf(val.id)} className='btn btn-outline-danger'>
//                       <DeleteForeverIcon />
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TurfDashComp;
