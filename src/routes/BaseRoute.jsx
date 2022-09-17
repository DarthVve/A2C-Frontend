import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Login } from '../pages';
import SignUp from "../pages/SignUp";

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
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