import React, { useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import { useClassesSelector } from "../state/hooks";
import { useAppDispatch } from "../state/hooks";
import { addScheduledClass } from "../state/scheduledclasses";

function SingleScheduleClass(props) {

    const classes = useSelector(state => state.classes.classes)

  // React States
  const [scheduled, setScheduled] = useState(false);

  const dispatch = useAppDispatch()

 const handleSubmit = (event) => {
    event.preventDefault();
    var {date} = document.forms[0];
    var stringDate = String(date.value)
    var splitDate = stringDate.split('T')
    var calendarDate = splitDate[0].split('-')
    var finalDate = calendarDate[2] + '/' + calendarDate[1] + '/' + calendarDate[0] + ' ' + splitDate[1]
    var obj = {...props.props,date:finalDate}
    dispatch(addScheduledClass(obj))
    setScheduled(true);
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
                    <b>Duration (Max 30 Days):</b> {props.props.duration}
                </Typography>
            </CardContent>
            <CardActions>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Date</label>
                        <input type="datetime-local" name="date" required />
                    </div>
                    <div className="button-container" >
                        <input type="submit"/>
                    </div>
                    {scheduled}
                </form>
            </CardActions>
            {scheduled ? <h5>Class was scheduled</h5>: <></>}
        </Card>
      );
}

export default SingleScheduleClass