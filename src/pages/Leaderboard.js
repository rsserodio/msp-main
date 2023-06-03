import { Fragment } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Logo from './Logo';
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Leaderboard() {
    const members = [{name:'Rui',points:1000, position:1},{name:'Andreia',points:800,position:2},
    {name:'Luísa',points:650,position:3},{name:'Afonso',points:500,position:4},{name:'Alexandre',points:200,position:5}]

    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/home');
    };

    return (
    <Fragment>
        <Logo/>
        <Container fluid>
        <h2>Weekly Leaderboard</h2>
        <Row debug>
            <Col>Place</Col>
            <Col>Name</Col>
            <Col>Points</Col>
        </Row>
        {members.map((m) => <Row key={Math.random()} debug>
            <Col>#{m.position}</Col>
            <Col>{m.name}</Col>
            <Col>{m.points}</Col>
            </Row>)}
        </Container>
        <Header/>
    </Fragment>)
}

const arrowStyle = {
    color: '#570F19',
    paddingTop: '6%',
    fontSize:"50px",
    marginRight:'80%',
    align: 'left',
    fontWeight:'bold'
  
  }

export default Leaderboard