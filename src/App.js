import React, { useState } from "react";
import AddEvent from "./components/event/AddEvent";
import EventList from "./components/event/EventList";

const App = () => {
  const [eventList, SetEventList] = useState([]);
  const onAddEventHnadler = (eTitle, eDesc, eTime, eDate, id) => {
    SetEventList((prevEventList) => {
      return [...prevEventList,{title: eTitle,desc: eDesc, time:eTime, date:eDate, key:id}]
    });
  };
  return (
    <div className="App">
      <h1>Event Manager</h1>
      <AddEvent onAddEvent={onAddEventHnadler} />
      <EventList events={eventList} />
    </div>
  );
};

export default App;
