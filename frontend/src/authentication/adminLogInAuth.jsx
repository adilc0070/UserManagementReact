import React from 'react'
import { Navigate } from 'react-router-dom';

function AdminLoginAuth({ children }) {
    const isAdmin = Boolean(localStorage.getItem('token'));
    return isAdmin ? children : <Navigate to='/' />


}

export default AdminLoginAuth
