import { Container, Row, Col } from 'react-grid-system';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import logo from './logo-branco2.png';
import graph from './Graphs.png';
import { Button } from '@mui/material';



function BookClass() {
    
    const navigate = useNavigate();
    
    const navigateToPlaylist = () => {
        navigate('/home');
      };
    
    return (
      <>
      <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      
      <Container fluid>

      <h1>Book a Class!</h1>
      Classname: Yoga
      <br></br>
      Instructor: Luis P.
      <br></br>
      Capacity: 15
      <br></br>
      Duration: 30 days
      <br></br>
      Date: 26/06/2023 12:45

      <Row debug>
      <Button style={colStyle2} onClick={() => navigateToPlaylist()}>Join</Button>
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
    marginLeft: '42%',
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

  
const buttonTextStyle = {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '16px'
  }

export default BookClass