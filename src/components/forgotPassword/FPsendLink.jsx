import './FPsendLink.css'
import React from 'react';

const FPsendLink = (props) => {
    return (
        <div>
            <h1>Forget Password</h1>
            <p>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
            <form>
                <label>Email</label>
                <input name='email' type='email' placeholder='Enter your email' />
                <button>Reset password</button>
            </form>
            <button>Back to Login</button>
        </div>
    )
};

export default FPsendLink;