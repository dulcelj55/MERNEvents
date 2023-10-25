import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Event from '../Event';


const EventList = ({events, setEvents}) => {
 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/server/events');
        console.log (response.data)
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async(eventId) =>{
let response = await axios({
    method: "DELETE",
    url: `server/events/${eventId}`
})
if (response.status === 200){
    setEvents(events.filter(event=> event._id !== eventId))
}


  }

  return (
    <div className="event-list">
        <h1 id="h1">Event List</h1>
      {events.map(event => (
        <Event key={event._id} event={event} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default EventList;