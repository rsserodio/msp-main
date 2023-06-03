import "./styles/Style.module.css";
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector } from "react-redux";

import { useAppDispatch } from "../state/hooks";
import { userLogIn, userLogOut } from "../state/credentials";
import { Fragment } from "react";
import Logo from "./Logo";



function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const database = useSelector(state => state.credentials.credentials)
  const dispatch = useAppDispatch()


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.name === uname.value);

    // Compare user info
    if (userData) {
      if (userData.pass !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        if(userData.role === 'USER') {
          dispatch(userLogIn())
          navigate('/register');
        } else {
          navigate('/homeadmin');
        }
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }


  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form" >
      <form onSubmit={handleSubmit}>
        <div className="input-container" style={inputStyle}>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container" style={inputStyle}>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <Fragment>
    <Logo/>
    <div className="app">
      <div className="login-form" >
      <div style={{backgroundColor: '#DC354B', marginTop:'2%', padding:'3%', fontWeight:'bold', color:'white' }}>SIGN IN</div>
        
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </Fragment>
  );
}

const inputStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  margin: '10px',
  marginRight:'7%',
  marginLeft:'7%',
  borderRadius: '5px'

}

export default Login;