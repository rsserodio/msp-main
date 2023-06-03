import React from 'react'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import logo from './logo-branco2.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import Header from '../components/Header'



  
function About() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  return (
    <>
    
    <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
    <Button style={arrowStyle} size="large" onClick={() => navigateToHome()}>
        <ArrowBackIcon />
      </Button>
    <div style={instStyle}>Scan the code to enter the gym</div>
    <div style={qrSquareStyle}><QrCode2Icon style={qrStyle} sx={{ fontSize: 300 }}/></div>
    <Header/>
    </>
  )
}



const qrStyle = {
  color: '#570F19'

}

const arrowStyle = {
  color: '#570F19',
  paddingTop: '6%',
  fontSize:"50px",
  marginRight:'80%',
  align: 'left',
  fontWeight:'bold'

}

const imageStyle = {
  height: '40px',

}

const topStyle = {
  backgroundColor: '#DC354B',
  height: '40px',
  paddingBottom:'5%',
  paddingTop:'5%'
}

const instStyle = {
  color: '#570F19',
  paddingTop: '10px',
  fontFamily: 'Helvetica, Arial,  sansSerif',
  fontSize: '2em',
  fontWeight: 'bold',
  marginLeft: '5%',
  marginRight: '5%'
}

const qrSquareStyle = {
  backgroundColor: '#DC354B',
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '5%',
  borderRadius: '25px'

}
export default About