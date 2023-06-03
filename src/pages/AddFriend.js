import { Container, Row, Col } from 'react-grid-system';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import logo from './logo-branco2.png';
import graph from './Graphs.png';
import { Button } from '@mui/material';



function AddFriend() {
    
    const navigate = useNavigate();
    const navigateToPlaylist = () => {
        navigate('/blog');
      };
    
    return (
      <>
      <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      
      <Container fluid>
        <h1>Add Friend</h1>
  

        <Row debug>
        
        <form style={colStyle2}>  <label>
        Friend Code:  
        <input  size = "20" type="text" name="name" />
        </label>
        </form>
        </Row>
       
      <Row debug>
      <Button style={colStyle2Middle} onClick={() => navigateToPlaylist()}>Add Friend</Button>
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
    marginLeft: '15%',
    marginRight: '15%',
    borderRadius: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '10%',
    paddingTop:'5%'
    
  }
  

  const colStyle2Middle = {
    backgroundColor: '#DC354B',
    color: '#ffffff',
    height: '30px',
    marginTop: '15%',
    marginLeft: '36%',
    marginRight: '15%',
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

export default AddFriend