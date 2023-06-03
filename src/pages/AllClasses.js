import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useClassesSelector } from "../state/hooks";
import SingleClass from "./SingleClass";
import Header from '../components/Header'
import Logo from './Logo'

function AllClasses() {

    const navigate = useNavigate();

    const navigateBack = () => {
          navigate('/homeadmin');
      };

    const classes = useSelector(state => state.scheduledclasses.scheduledclasses)
    
    return (
        <Fragment>
          <Logo/>
          <Fragment>
        <Button style={arrowStyle} size="large" onClick={() => navigateBack()}>
        <ArrowBackIcon />
      </Button>
        {classes.map((c) => <SingleClass props={c} key={Math.random()}/>)}
        </Fragment>
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

  export default AllClasses