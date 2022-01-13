import React, { useState } from "react";
import Card from "../UI/Card";
import Buttom from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddEvent.module.css";

const AddEvent = (props) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [error,setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (eventTitle.trim().length === 0 || !eventDate || !eventTime) {
      setError({
        title:"An error occured!",
        message:"Fill the input(Event Title, Description, Date and Time)"
      })
      return;
    }
    props.onAddEvent(
      eventTitle,
      eventDescription,
      eventTime,
      eventDate,
      Math.random().toString()
    );
    setEventTitle("");
    setEventDescription("");
    setEventTime("");
    setEventDate("");
  };
  const titleChangeHandler = (e) => {
    setEventTitle(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setEventDescription(e.target.value);
  };
  const timeChangeHandler = (e) => {
    setEventTime(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEventDate(e.target.value);
  };
  const errorHandler = ()=> {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="title">Event Title</label>
          <input
            id="title"
            type="text"
            value={eventTitle}
            onChange={titleChangeHandler}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={eventDescription}
            onChange={descriptionChangeHandler}
          ></textarea>

          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            value={eventTime}
            onChange={timeChangeHandler}
          />
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={eventDate}
            onChange={dateChangeHandler}
          />

          <Buttom type="submit">Submit</Buttom>
        </form>
      </Card>
    </div>
  );
};
export default AddEvent;
