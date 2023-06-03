
import { Container, Row, Col } from 'react-grid-system';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import logo from './logo-branco2.png';


function Playlist() {

  const navigate = useNavigate();
  const navigateToAddPlaylist = () => {
      navigate('/addPlaylist');
    };
    const navigateToRemovePlaylist = () => {
      navigate('/removePlaylist');
    };
  
  

    return (
      <>
      <div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>
      
      <Container fluid>
        <h1>Playlists</h1>
    <Row debug>
      <Col debug style={colStyle}>Super Cardio Playlist</Col>
      <Col debug style={colStyle}>Indie Playlist </Col>
    </Row>
    <Row debug>
      <Col debug style={colStyle}>Pop Playlist</Col>
      <Col debug style={colStyle}>Rock Playlist</Col>
    </Row>
    <Row debug>
    <button debug style={colStyle2} onClick={() => navigateToAddPlaylist()}>Add New Playlist</button>
    <button debug style={colStyle2} onClick={() => navigateToRemovePlaylist()}>Remove All Playlists</button>
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
    marginLeft: '8%',
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

export default Playlist