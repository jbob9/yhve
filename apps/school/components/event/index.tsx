import React from 'react'
import EventCard from './event-card'

const Event = () => {
  return (
    <section className="section event" id="event" aria-label="event">
      <div className="container">

        <p className="section-subtitle">Upcomming Event</p>

        <h2 className="h2 section-title">Let’s Join Our Community</h2>

        <ul className="grid-list">
          <li><EventCard/></li>
          <li><EventCard/></li>
          <li><EventCard/></li>
        </ul>
      </div>
    </section> 
  )
}

export default Event