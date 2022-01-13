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
            <div >
              <h2>{eventList.title}</h2>
              <p>{eventList.desc}</p>
            </div>
            <div>
              <h3>{eventList.time}</h3>
              <p>{eventList.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
    </div>
  );
};
export default EventList;
