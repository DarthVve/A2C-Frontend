import './FPsendLink.css'
import React from 'react';
import { Link } from 'react-router-dom';

const FPsendLink = (props) => {
    return (
        <div className='fpsl'>
            <div className='fpsl-main'>
                <form className='fpsl-form'>
                    <div className='fpsl-heading'>
                        <h1>Forget Password</h1>
                        <p>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
                    </div>
                        <div className='fpsl-form-field'>
                            <label>Email</label>
                            <input name='email' type='email' placeholder='Enter your email' />
                        </div>
                        <button type='submit' className='fpsl-subBtn'>Reset password</button>
                </form>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <button className='fpsl-back2login'>Back to Login</button>
                </Link>
            </div>
        </div>
    )
};

export default FPsendLink;