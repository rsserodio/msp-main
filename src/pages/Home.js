import React from 'react'
import logo from './logo-branco2.png';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '@mui/material';
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { Fragment } from 'react';
import Logout from './Logout'

function Home() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const { registerStatus } = state || false

  const navigateToQr = () => {
    navigate('/enter');
  };
  
  const navigateToPlaylist = () => {
    navigate('/playlist');
  };

  const navigateToBusyMeter = () => {
    navigate('/busyMeter');
  };

  const navigateToWrapped = () => {
    navigate('/wrapped');
  };

  return (
    <Fragment>
    <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>

    <Container fluid>
    <Row debug>
      <Logout/>
    </Row>
    <Row debug>
    <Col debug style={colStyle}>
      <Button style={buttonTextStyle} onClick={() => navigateToQr()}>Enter MyGym</Button>
    </Col>
    <Col debug style={colStyle}>
    <Button style={buttonTextStyle} onClick={() => navigateToWrapped()}>Gym Wrapped</Button>
    </Col>
  </Row>
  <Row debug>
    <Col debug style={colStyle}>
    <Button style={buttonTextStyle} onClick={() => navigateToBusyMeter()}>Busy meter</Button>
    </Col>
    <Col debug style={colStyle}>
    <Button style={buttonTextStyle} onClick={() => navigateToPlaylist()}>Playlists</Button>
    </Col>
  </Row>
  
  
  </Container>
  <Header/>
  </Fragment>
  )
}

const topStyle = {
  backgroundColor: '#DC354B',
  height: '50px',
  paddingBottom:'5%',
  paddingTop:'5%'
}

const buttonTextStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '16px'
}

const colStyle = {
  backgroundColor: '#DC354B',
  height: '100px',
  marginTop: '10%',
  marginLeft: '5%',
  marginRight: '5%',
  borderRadius: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '5%',
  paddingTop:'5%'
  
}

const imageStyle = {
  height: '50px',

}
export default Home