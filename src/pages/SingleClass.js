import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import { useClassesSelector } from "../state/hooks";
import { useAppDispatch } from "../state/hooks";

function SingleClass(props) {

    const classes = useSelector(state => state.classes.classes)

  // React States
  const [scheduled, setScheduled] = useState(false);

  const dispatch = useAppDispatch()

 const handleSubmit = (event) => {
    event.preventDefault();
    setScheduled(true);
    dispatch()
 };
      return (
        <Card style={{margin:"5%", border:'1px solid #DC354B'}}>
            <CardContent>
                <Typography>
                    <b>Classname:</b> {props.props.name}
                </Typography>
                <Typography>
                    <b>Instructor:</b> {props.props.instructor}
                </Typography>
                <Typography>
                    <b>Capacity:</b> {props.props.capacity}
                </Typography>
                <Typography>
                    <b>Duration:</b> {props.props.duration}
                </Typography>
                <Typography>
                    <b>Date:</b> {props.props.date}
                </Typography>
            </CardContent>
        </Card>
      );
}

export default SingleClass