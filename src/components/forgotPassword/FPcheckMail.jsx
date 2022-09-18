import './FPcheckMail.css'
import React from 'react';
import { Link } from 'react-router-dom';

const FPcheckMail = (props) => {
    return (
        <div>
            <image></image>
            <h1>Check your email</h1>
            <p>We sent a password reset link to your email. Please click the link to reset your password</p>
            <p>Don’t receive the email? Click to Resend link</p>
            <Link to='/login'>
                <button>Back to Login</button>            
            </Link>
        </div>
    )
};

export default FPcheckMail;