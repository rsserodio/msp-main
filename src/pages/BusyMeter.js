import { Container, Row, Col } from 'react-grid-system';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import logo from './logo-branco2.png';
import graph from './Graphs.png';
import busymeterSign from './busymeterSign.png';

function BusyMeter() {
    const date = new Date();
    const showTime = "Current Time: " +  date.getHours() + 
    "h" + ":" + date.getMinutes() + "m";
 
    return (
      <>
      <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      
      <Container fluid>
        <h1>Busy Meter</h1>
        <h2> { showTime }</h2>
        
        <Row debug>
        <img src={busymeterSign} alt="busymeterSign"  style={graphStyle}/>
        </Row>
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
  
const graphStyle = {
    maxWidth: '90%',
    maxHeight:'90%',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:'3%',
    paddingLeft:'5%'
  }

export default BusyMeter