import React from 'react'
import logo from './logo-branco2.png';
import { Container, Row, Col } from 'react-grid-system';
import Header from '../components/Header'
import {useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

function Blog() {

  const navigate = useNavigate();
  const navigateToAddFriend = () => {
      navigate('/addFriend');
    };
  const navigateToRemoveFriend = () => {
      navigate('/removeFriend');
    };

  return (
    <>
    <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
    
    <Container fluid>
      <h1>Friends</h1>
  <Row debug>
    <Col debug style={colStyle}>J. Silva</Col>
    <Col debug style={colStyle}>A. Figueira</Col>
  </Row>
  <Row debug>
    <Col debug style={colStyle}>Y. Attres</Col>
    <Col debug style={colStyle}>M. Minezza</Col>
  </Row>
  <Button debug style={colStyle2} onClick={() => navigateToAddFriend()}>Add Friend</Button>
  <Button debug style={colStyle2} onClick={() => navigateToRemoveFriend()}>Remove Friend</Button>
</Container>
<Header/>
    </>
  )
}

const topStyle = {
  backgroundColor: '#DC354B',
  height: '50px',
  paddingBottom:'5%',
  paddingTop:'5%'
}

const colStyle = {
  backgroundColor: '#DC354B',
  color: '#ffffff',
  height: '100px',
  marginTop: '15%',
  marginLeft: '5%',
  marginRight: '5%',
  borderRadius: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '5%',
  paddingTop:'5%'
  
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

const imageStyle = {
  height: '50px',

}
export default Blog