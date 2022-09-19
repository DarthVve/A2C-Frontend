import './FPsendLink.css'
import React from 'react';

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
                <button className='fpsl-back2login'>Back to Login</button>
            </div>
        </div>
    )
};

export default FPsendLink;