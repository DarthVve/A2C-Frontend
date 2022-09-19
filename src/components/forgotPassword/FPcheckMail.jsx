import './FPcheckMail.css'
import React from 'react';
import { Link } from 'react-router-dom';
import CMicon from '../../assets/checkMail.svg';

const FPcheckMail = (props) => {
    return (
        <div className='fpcm'>
            <img src={CMicon} alt='check email icon' />
            <h1>Check your email</h1>
            <p className='fpcm-text'>We sent a password reset link to your email. Please click the link to reset your password</p>
            <p className='fpcm-rslink'>Don’t receive the email? Click to Resend link</p>
            <Link to='/login'>
                <button className='fpcm-back2login'>Back to Login</button>            
            </Link>
        </div>
    )
};

export default FPcheckMail;