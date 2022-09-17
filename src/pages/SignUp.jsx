import React from "react";
import "../styles/SignUp.css";
import { IoMdArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
// install&import axios from "axios";

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
  // States for checking the error & success
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
      setError(true);
    } else {
      setSuccess(true);
      setError(false);
    }
    //CLEAR INPUT FIELDS
  //   setUser({
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  //   confirmPassword: "",
  // })

    // try {
    //   const response = axios.post("http://localhost:3000/user/register", {
    //     name: user.userName,
    //     email: user.email,
    //     phonenumber: user.phoneNumber,
    //     password: user.password,
    //     confirm_password: user.confirm_password,
    //   });
    //   console.log('backend',response);
    // } catch (err) {
    //   console.log(err)
    // }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: success ? '' : 'none',
        }}>
        <h1>User {user.username} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('This will be called after 2 seconds');
    }, 2000);
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="signup_container">
       {/* Calling to the methods */}
       <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
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
