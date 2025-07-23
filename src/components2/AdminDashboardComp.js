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
