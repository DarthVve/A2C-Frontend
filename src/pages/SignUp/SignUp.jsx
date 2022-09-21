import React from "react";
import "./signUp.scss";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from '../../axios';
import { LogoWithTypeface, FormInput, Button } from "../../components";

const SignUp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [valid, setValid] = useState(false);
  const [validities, setValidity] = useState({});
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
    axios.post("/user/register", {...form})
    .then((res) => {
      if (res.status === 201) {
        toast.success(res.data.msg);
        navigate(`/verify-notice/${res.data.id}`)
      } else {
        toast.error(`${res.statusText}: ${res.data.msg}`);
      }
    })
    .catch(err => {
      toast.error(err.message);
    })
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <main>
          <LogoWithTypeface />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="back_btn">
              <IoMdArrowBack /> Go back
            </button>
          </Link>
          <section>
            <h1>Create an account</h1> 
            <div className="content">
              <form onSubmit={ handleSubmit }>
                <FormInput label="First Name" type="text" name="firstname" placeholder="Enter your first name"
                handleChange={handleChange} required={true} value={form.firstname} minLength={2} maxLength={250} setValidity={setValidity}/>
                <FormInput label="Last Name" type="text" name="lastname" placeholder="Enter your last name"
                handleChange={handleChange} required={true} value={form.lastname} minLength={2} maxLength={250} setValidity={setValidity}/>
                <FormInput label="Username" type="text" name="username" placeholder="Enter your username"
                handleChange={handleChange} required={true} value={form.username} minLength={2} maxLength={250} setValidity={setValidity}/>
                <FormInput label="Email" type="email" name="email" placeholder="Enter your email"
                handleChange={handleChange} required={true} value={form.email} minLength={3} maxLength={250} setValidity={setValidity}/>
                <FormInput label="Phone Number" type="tel" name="phonenumber" placeholder="Enter your phone number"
                handleChange={handleChange} required={true} value={form.phonenumber} minLength={11} maxLength={13} setValidity={setValidity}/>
                <FormInput label="Password" type="password" name="password" placeholder="Enter your password" 
                handleChange={handleChange} required={true} value={form.password} minLength={3} maxLength={30} setValidity={setValidity}/>
                <FormInput label="Confirm Password" type="password" name="confirm_password" placeholder="Confirm password" 
                handleChange={handleChange} required={true} value={form.confirm_password} minLength={3} maxLength={30} setValidity={setValidity}/>
                <Button type="submit" disabled={!valid} handleClick={handleSubmit}>Sign Up</Button>
              </form>
              <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span className="create-account">Sign In</span></Link></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
