import React from "react";
import "./SignUp.css";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mainAxios } from '../../Axios';
// import axios from "axios";

const SignUp = () => {
//setup state for user
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirm_password: ""
  });

  // Handles user details change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // Handles success form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.firstname === "" ||
      user.lastname === "" ||
      user.username === "" ||
      user.email === "" ||
      user.phonenumber === "" ||
      user.password === "" ||
      user.confirm_password === ""
    ) {
        toast.info("Kindly,fill all fields", {
            position: toast.POSITION.TOP_CENTER
        });
    } 
    try {
      const response = await mainAxios.post("user/register", {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        phonenumber: user.phonenumber,
        password: user.password,
        confirm_password: user.confirm_password,
      });
      console.log('backend',response);
      if (response.status === 201){
          toast.success("User created successfully, check mail for verification", {
            position: toast.POSITION.TOP_CENTER
        });
      }

    } catch (err) {
        if(err){
            toast.error("Enter a unique username, email, or phonenumber", {
                position: toast.POSITION.TOP_CENTER
            });   
        }
      console.log(err)
    }
    //CLEAR INPUT FIELDS
    setUser({ firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirm_password: ""})
  };

  return (
    <div className="signup_container">

{/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
       {/* Calling to the methods */}
       {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> */}
      <div className="icon_container">
        <div className="icon">&nbsp;</div>
        <h4 className="icon_text">
          Airtime<span style={{ color: "orange" }}>2cash</span>
        </h4>
      </div>
      <div className="content_container">
        <a href="/">
        <button className="back_btn">
          <IoMdArrowBack />
          Go back
        </button>
        </a>
        <h3 className="title">Create an account</h3>
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="form_group">
            <div>
              <label htmlFor='firstname'>first name</label>
            </div>
            <div>
              <input
                id='firstname'
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="lastname">last name</label>
            </div>
            <div>
              <input
              id='lastname'
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="username">user name</label>
            </div>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Enter your user name"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="email">email</label>
            </div>
            <div>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="phonenumber">phone number</label>
            </div>
            <div>
              <input
                type="text"
                id="phonenumber"
                placeholder="Enter your phone number"
                name="phonenumber"
                value={user.phonenumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="password">password</label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <div>
              <label htmlFor="confirmpassword">confirm password</label>
            </div>
            <div>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                name="confirm_password"
                value={user.confirm_password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_group">
            <button className="signup_btn" >sign up</button>
          </div>
          <div className="form_group">
            <p>
              Already have an account? <span><a href="/login">sign in</a></span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
