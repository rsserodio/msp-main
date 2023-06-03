import React from 'react'
import logo from './logo-branco2.png';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '@mui/material';
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Logout from './Logout'

function HomeAdmin() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const { registerStatus } = state || false


  const navigateToQr = () => {
    navigate('/enter');
  };

  const navigateToCreate = () => {
    navigate('/create');
  };

  const navigateToAll = () => {
    navigate('/allclasses');
  };

  const navigateToSchedule = () => {
    navigate('/scheduleclasses');
  };

  return (
    <>
    <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>

    <Container fluid>
      <Row debug>
      <Logout/>
      </Row>
    <Row debug> 
    <Col debug style={colStyle}>
      <Button style={buttonTextStyle} onClick={() => navigateToCreate()}>create class</Button>
    </Col>
    </Row>
    <Row debug> 
    <Col debug style={colStyle}>
      <Button style={buttonTextStyle} onClick={() => navigateToSchedule()}>schedule class</Button>
    </Col>
    </Row>
    <Row debug> 
    <Col debug style={colStyle}>
      <Button style={buttonTextStyle} onClick={() => navigateToAll()}>all classes</Button>
    </Col>
    </Row>
</Container>
    </>
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
  marginTop:'4%',
  fontSize: '16px'
}

const colStyle = {
  backgroundColor: '#DC354B',
  height: '100px',
  marginTop: '10%',
  marginLeft: '10%',
  marginRight: '10%',
  borderRadius: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '5%',
  paddingTop:'5%',
  textAlign: 'center'
  
}

const imageStyle = {
  height: '50px',

}
export default HomeAdmin