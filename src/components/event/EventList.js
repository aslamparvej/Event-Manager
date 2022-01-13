import React from "react";
import classes from "./EventList.module.css";
import Card from "../UI/Card";

const EventList = (props) => {
  return (
    <div >
    <Card className={classes.eventList}>
      <ul>
        {props.events.map((eventList) => (
          <li key={eventList.key}>
            {eventList.title}({eventList.date})
          </li>
        ))}
      </ul>
    </Card>
    </div>
  );
};
export default EventList;
