import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useAppDispatch } from "../state/hooks";
import { addClass } from "../state/classes";
import Logo from './Logo'

function CreateClass() {

    const navigate = useNavigate();
  
    const navigateToHome = () => {
      navigate('/homeadmin');
    };

    const navigateBack = () => {
        navigate('/homeadmin');
      };

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const dispatch = useAppDispatch()

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var {classname,ucapacity,uduration} = document.forms[0];
    dispatch(addClass({name:classname.value, instructor:value, capacity:ucapacity.value, duration:uduration.value}))
    setIsCreated(true)
  };


    const [value, setValue] = React.useState('Marco A.');

 const handleChange = (event) => {

   setValue(event.target.value);

 };
    
      return (
        <Fragment>
          <Logo/>
        <Button style={arrowStyle} size="large" onClick={() => navigateBack()}>
        <ArrowBackIcon />
      </Button>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container" style={inputStyle}>
              <label>Class name </label>
              <input type="text" name="classname" required />
            </div>
            <div>
                <label>
                Instructor
                <select value={value} onChange={handleChange}>
                    <option value="Marco A.">Marco A.</option>
                    <option value="Mariana V.">Mariana V.</option>
                    <option value="Carlos P.">Carlos P.</option>
                    <option value="Lara D.">Lara D.</option>
                </select>
                </label>
            </div>
            <div className="input-container" style={inputStyle}>
              <label>Capacity </label>
              <input type="text"name="ucapacity"  required/>
            </div>
            <div className="input-container" style={inputStyle}>
              <label>Duration</label>
              <input type="text" name="uduration" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            {isCreated ? <h5>Class was created</h5> : <></>}
          </form>
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

      const inputStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        margin: '10px',
        marginRight:'7%',
        marginLeft:'7%',
        borderRadius: '5px'
      
      }

  export default CreateClass