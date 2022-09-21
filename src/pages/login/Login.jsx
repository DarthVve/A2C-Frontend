import "./Login.scss"
import { LogoWithTypeface, FormInput, Button } from "../../components";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useAuth } from "../../hooks/useAuth";
import { toast } from 'react-toastify';

const Login = () => {
    const [form, setForm] = useState({
        emailOrUsername: '',
        password: ''
    });
    const [valid, setValid] = useState(false);
    const [validities, setValidity] = useState({ emailOrUsername: false, password: false });
    const { login } = useAuth();
    const navigate = useNavigate();

    const validate = useCallback(() => {
        for (const key in validities) {
            if (!validities[key]) {
                setValid(false);
                return;
            }
        }
        setValid(true);
    }, [validities]);

    useEffect(() => {
        validate();
    }, [validities, validate]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/user/login", {...form})
        .then((res) => {
            if (res.status === 200) {
                toast.success("Login successful");
                login(res.data.id)
                navigate('/dashboard')
            } else {
                res.data.msg && toast.error(res.data.msg);
            }
        })
        .catch(err => {

            toast.error(err.message);
        })
    }

    return (
    <div className="login">
        <div className="login__container">
            <main>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <LogoWithTypeface />
                </Link>
                <section>
                    <h1>Login</h1> 
                    <div className="content">
                        <form onSubmit={ handleSubmit } >
                            <FormInput label="Email" type="email" name="emailOrUsername" placeholder="Enter your email"
                             handleChange={handleChange} required={true} value={form.emailOrUsername} minLength={3} maxLength={250} setValidity={setValidity}/>
                            <FormInput label="Password" type="password" name="password" placeholder="Enter your password" 
                            handleChange={handleChange} required={true} value={form.password} minLength={3} maxLength={30} setValidity={setValidity}/>
                            <Link to='/forgot-password' style={{ textDecoration: 'none' }}><span className="forgot-password">Forgot password?</span></Link>
                            <Button type="submit" disabled={!valid} handleClick={handleSubmit}>Login</Button>
                        </form>
                        <p>Don't have an account? <Link to='/register' style={{ textDecoration: 'none' }}><span className="create-account">Create Account</span></Link></p>
                    </div>
                </section>
            </main> 
        </div>
    </div>
    )
};

export default Login;