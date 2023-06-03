import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import logo from './logo-branco2.png';
import { Button } from '@mui/material';
import { useState } from 'react';
import graph from './Graphs.png';
import Header from '../components/Header'

function Stats() {
  const [isMeasuring, setMeasuring] = useState(0)

  const handleSubmit = (event) => {
    setMeasuring(isMeasuring+1)
  };
  return (
    <>
    <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      <Container fluid>
    <Row debug> 
    <Col debug style={colStyle}>
      <Button style={buttonTextStyle} onClick={() => handleSubmit()}>{(isMeasuring % 2 === 0) ? 'Measure performance': 'Stop measuring'}</Button>
    </Col>
    </Row>
</Container>
    {(isMeasuring > 0 && isMeasuring % 2 === 0) && <div style={divStyle}><img src={graph} alt="graph"  style={graphStyle}/></div>}
    <div></div>
    <Header/>
    </>
  )
}

const buttonTextStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  marginTop:'4%',
  fontSize: '16px'
}

const graphStyle = {
  maxWidth: '90%',
  maxHeight:'90%',
  display: 'flex',
  alignItems:'center',
  justifyContent:'center',
  paddingTop:'3%'
}

const divStyle = {
  display: 'flex',
  alignItems:'center',
  justifyContent:'center'
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

const topStyle = {
    backgroundColor: '#DC354B',
    height: '50px',
    paddingBottom:'5%',
    paddingTop:'5%'
}

export default Stats