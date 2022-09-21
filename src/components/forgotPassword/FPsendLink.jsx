import './FPsendLink.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { toast } from 'react-toastify';

const FPsendLink = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            const response = await axios.patch('user/forgotPassword', { email });
            response.status === 200 ? toast.success(response.data.msg) : toast.error(response.data.msg);
            navigate('/forgotPassword/resend', { state: { email } });
            console.log(response)
        } catch (err) { console.error(err) };
    }

    return (
        <div className='fpsl'>
            <div className='fpsl-main'>
                <form className='fpsl-form' onSubmit={ submitHandler }>
                    <div className='fpsl-heading'>
                        <h1>Forget Password</h1>
                        <p>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
                    </div>
                        <div className='fpsl-form-field'>
                            <label>Email</label>
                            <input name='email' type='email' placeholder='Enter your email' value={ email } onChange={ emailHandler } required />
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