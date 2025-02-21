import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteForever as DeleteForeverIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';

const AdminTurfsComp = ({ turfs, setTurfs }) => {
    const navigate = useNavigate();

    const deleteTurf = (id) => {
        if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
            setTurfs(turfs.filter(turf => turf.id !== id));
        }
    };

    return (
        <div>
            <h1>Admin Turfs Management</h1>
            <button className='btn btn-outline-success' onClick={() => navigate('/admin/new-turf')}>
                <AddIcon /> Add New Turf
            </button>
            <br />
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Purpose</th>
                        <th>Turf Name</th>
                        <th>Location Name</th>
                        <th>Location URL</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map((turf, index) => (
                        <tr key={turf.id}>
                            <td>{index + 1}</td>
                            <td>{turf.purpose}</td>
                            <td>{turf.turfName}</td>
                            <td>{turf.locationName}</td>
                            <td><a href={turf.locationUrl} target="_blank" rel="noopener noreferrer">{turf.locationUrl}</a></td>
                            <td>{turf.price}</td>
                            <td><img src={turf.imageUrl} alt={turf.turfName} width="50" /></td>
                            <td>
                                <button type='button' className='btn btn-outline-success' onClick={() => navigate(`/admin/edit-turf/${turf.id}`)}>
                                    <EditIcon />
                                </button>
                                {" "}
                                <button type='button' className='btn btn-outline-danger' onClick={() => deleteTurf(turf.id)}>
                                    <DeleteForeverIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTurfsComp;










// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { DeleteForever as DeleteForeverIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';

// const AdminTurfsComp = ({ turfs, setTurfs }) => {
//     const navigate = useNavigate();

//     const deleteTurf = (id) => {
//         if (window.confirm(`Are you sure to delete turf with ID: ${id}?`)) {
//             setTurfs(turfs.filter(turf => turf.id !== id));
//         }
//     };

//     return (
//         <div>
//             <h1>Admin Turfs Management</h1>
//             <button className='btn btn-outline-success' onClick={() => navigate('/admin/new-turf')}>
//                 <AddIcon /> Add New Turf
//             </button>
//             <br />
//             <table className="table table-bordered table-hover table-striped">
//                 <thead>
//                     <tr>
//                         <th>#</th>
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
//                                 <button type='button' className='btn btn-outline-success' onClick={() => navigate(`/admin/edit-turf/${turf.id}`)}>
//                                     <EditIcon />
//                                 </button>
//                                 {" "}
//                                 <button type='button' className='btn btn-outline-danger' onClick={() => deleteTurf(turf.id)}>
//                                     <DeleteForeverIcon />
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminTurfsComp;
