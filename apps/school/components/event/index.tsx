import EventCard from './event-card'
import s from "./index.module.css"
import cn from 'classnames'

const Event = () => {
  return (
    <section className={cn("section", s.event)} id="event" aria-label="event">
      <div className="mx-6">

        <p className={s.section_subtitle}>Upcomming Event</p>

        <h2 className={cn("h2", s.section_title)}>Let’s Join Our Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </div>
    </section> 
  )
}

export default Event