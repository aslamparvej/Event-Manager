import React, { useState } from "react";
import Card from "../UI/Card";
import Buttom from "../UI/Button";
import classes from "./AddEvent.module.css";

const AddEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (eventTitle.trim().length === 0 || !eventDate || !eventTime) {
      if (eventTitle.trim().length === 0) {
        console.log("Please Fill title box");
        return;
      }
      if (!eventTime) {
        console.log("Please fill time");
        return;
      }
      if (!eventDate) {
        console.log("Please fill date");
        return;
      }
    }

    console.log(eventTitle);
    console.log(eventDescription);
    console.log(eventTime);
    console.log(eventDate);
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
  return (
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
  );
};
export default AddEvent;
