import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
const ProctectedRoute = () => {
    const {user} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    if(!user){
        return navigate('/');
    }
    return <Outlet/>
}

export default ProctectedRoute