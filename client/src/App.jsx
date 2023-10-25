import { useState } from 'react'

import './App.css'
import EventForm from './Components/EventForm'
import EventList from './Components/EventList'

function App() {
  const [events, setEvents] = useState([]);


  return (
    <>
    <h1>My Events</h1>
     <EventForm setEvents={setEvents}/>
     <EventList event={events} setEvents={setEvents}/>
    </>
  )
}

export default App
