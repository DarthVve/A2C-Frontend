import './FPupdatePassword.css'
import React from 'react';

const FPupdatePassword = (props) => {
    return (
        <div>
            <image></image>
            <h1>Reset password</h1>
            <form>
                <label>New password</label>
                <input name='password' type='password' placeholder='Enter your new password' />
                <label>Confirm password</label>
                <input name='confirmPassword' type='password' placeholder='Confirm your new password' />
                <button>Reset Password</button>
            </form>
        </div>
    )
};

export default FPupdatePassword;