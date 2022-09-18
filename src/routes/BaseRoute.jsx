import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Login, UserProfile } from '../pages';


const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/register" element={<></>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/userprofile" element={<UserProfile/>} />
            <Route path="/" element={<></>}/>
            
            {/*Protected Routes*/}
            <Route element={<ProtectedRoute/>}>
                <Route path="" element={<></>}/>
                <Route path="" element={<></>}/>
                <Route path="" element={<></>}/>
            </Route>

            {/*Catch Error*/}
            <Route path='*' element={<></>}/>
        </Routes>
    )
};

export default BaseRoute;