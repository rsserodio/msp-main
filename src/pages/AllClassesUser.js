import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useClassesSelector } from "../state/hooks";
import SingleClass from "./SingleClass";
import Header from '../components/Header'
import Logo from './Logo'
import Logout from "./Logout";

function AllClassesUser() {

    const navigate = useNavigate();
    const classes = useSelector(state => state.scheduledclasses.scheduledclasses)
    
    const navigateToBC = () => {
      navigate('/bookClass');
    };

    return (
        <Fragment>
          <Logo/>
          <div style={{marginTop:"2%"}}>
        {classes.map((c) => <SingleClass props={c} key={Math.random()}/>)}
        </div>
        <Header/>
        <div>
        <button debug style={colStyle2}  onClick={() => navigateToBC()}>Book Class</button>
          </div>
        </Fragment>
      
      );
    }

    const arrowStyle = {
        color: '#570F19',
        paddingTop: '6%',
        fontSize:"50px",
        marginRight:'80%',
        align: 'left',
        fontWeight:'bold'
      
      }

      const colStyle2 = {
        backgroundColor: '#DC354B',
        color: '#ffffff',
        height: '30px',
        marginTop: '15%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '15px',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: '10%',
        paddingTop:'5%'
        
      }

  export default AllClassesUser