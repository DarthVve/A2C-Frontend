import './FPupdatePassword.css'
import React from 'react';
import FPlogo from '../../assets/FPlogo.svg'

const FPupdatePassword = (props) => {
    return (
        <div className='fpup'>
            <div className='fpup-main'>
                <div className='fpup-logo'>
                    <img src={FPlogo} alt='Airtime2Cash logo'/>
                    <p>Airtime2Cash</p>
                </div>
                <div className='fpup-form-group'>
                    <h1>Reset password</h1>
                    <form className='fpup-form'>
                        <div className='fpup-form-fields'>
                            <div className='fpup-form-fields1'>
                                <label>New password</label>
                                <input name='password' type='password' placeholder='Enter your new password' />
                            </div>
                            <div className='fpup-form-fields2'>
                                <label>Confirm password</label>
                                <input name='confirmPassword' type='password' placeholder='Confirm your new password' />
                            </div>
                        </div>
                        <button className='fpup-subBtn'>Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FPupdatePassword;