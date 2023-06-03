import { Container, Row, Col } from 'react-grid-system';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import logo from './logo-branco2.png';
import graph from './Graphs.png';



function Wrapped() {
    
    return (
      <>
      <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      
      <Container fluid>
        <h1>Gym Wrapped</h1>
        <h2>Year-End Statistics</h2>
        <h4>You lost 30569 calories!</h4>
        <h4>Your medium heart rate was 111 bpm!</h4>
        <h4>You frequented the gym for 300 days!</h4>
        <h4>You listened to your favourite playlist for 954 hours!</h4>
        <h4>You are on the top 2% of gym users, in terms of calorie loss!</h4>
        <h4>You frequented different classes for 234 days!</h4>
        <h4>We hope you return and do even better next year!</h4>
    
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

export default Wrapped