import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useClassesSelector } from "../state/hooks";
import SingleScheduleClass from "./SingleScheduleClass";
import Logo from './Logo'

function ScheduleClasses() {

    const navigate = useNavigate();
  
    const navigateToHome = () => {
      navigate('/homeadmin');
    };

    const navigateBack = () => {
        navigate('/homeadmin');
      };

    const classes = useSelector(state => state.classes.classes)

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        navigateToHome()

    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );

    const [value, setValue] = React.useState('fruit');

    const handleChange = (event) => {

        setValue(event.target.value);

    };
    
      return (
        <Fragment>
            <Logo/>
            <Button style={arrowStyle} size="large" onClick={() => navigateBack()}>
            <ArrowBackIcon />
            </Button>
            {classes.map((c) => <SingleScheduleClass key={Math.random()} props={c} />)}
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

  export default ScheduleClasses