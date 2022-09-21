import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { SignUp, Login, VerifyNotice, ForgotPasswordSL, ForgotPasswordCM, ForgotPasswordUP, NotFound } from '../pages';

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/register" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/verify-notice/:id" element={<VerifyNotice/>}/>
            <Route path="/forgotPassword" element={<ForgotPasswordSL/>} />
            <Route path="/forgotPassword/resend" element={<ForgotPasswordCM/>} />
            <Route path="/forgotPassword/update/:id" element={<ForgotPasswordUP/>} />
            
            {/*Protected Routes*/}
            <Route element={<ProtectedRoute/>}>
                {/* <Route path="" element={<></>}/>
                <Route path="" element={<></>}/>
                <Route path="" element={<></>}/> */}
            </Route>

            {/*Catch Error*/}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
};

export default BaseRoute;