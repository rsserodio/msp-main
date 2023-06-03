import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import Header from '../components/Header'
import Logo from './Logo'

function Register() {

    const navigate = useNavigate();
  
    const navigateToHome = () => {
      navigate('/home', { state : true });
    };

    const navigateBack = () => {
        navigate('/home', { state : false });
      };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    navigateToHome()

  };
    
      return (
        <Fragment>
          <Logo/>
        <div style={{backgroundColor: '#DC354B', marginTop:'2%', padding:'3%', fontWeight:'bold', color:'white' }}>YOU ARE A FIRST TIME USER. REGISTER FOR ACCESS TO ALL MYGYM FEATURES</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container" style={inputStyle}>
              <label>Name </label>
              <input type="text" name="uname"/>
            </div>
            <div className="input-container" style={inputStyle}>
              <label>Birthday </label>
              <input type="date" name="date"  placeholder="dd/mm/aaaa" />
            </div>
            <div className="input-container " style={inputStyle}>
              <label>Phone Number </label>
              <input type="text" name="phone"  placeholder="Phone number (+351)"/>
            </div>
            <div className="input-container" style={inputStyle}>
              <label>Email </label>
              <input type="text" name="email"/>
            </div>
            <div className="input-container" style={inputStyle}>
              <label>NIF </label>
              <input type="text" name="nif"  />
            </div>
            <div className="input-container" style={inputStyle}>
              <label>IBAN </label>
              <input type="text" name="iban"  />
            </div>
            <div className="button-container" >
              <input type="submit" style={StyledButton}/>
            </div>
          </form>
        </div>
        </Fragment>
      );
    }

    
    const StyledButton = {
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '10px',
        marginTop: '10px',
        border: 'none',
        borderRadius: '5px'
    }

    const arrowStyle = {
        color: '#570F19',
        paddingTop: '6%',
        fontSize:"50px",
        marginRight:'80%',
        align: 'left',
        fontWeight:'bold'
      
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

      const loginFormStyle = {
        backgroundColor: 'white',
        padding: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      
      }

  export default Register