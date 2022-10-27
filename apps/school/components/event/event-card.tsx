import {  IconMapPin } from "@tabler/icons"
import s from "./index.module.css"

const EventCard = () => {
  return (
    <div className={s.event_card}>
      <figure className={s.card_banner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
        src="./assets/images/event-1.jpg" width="370" height="250" loading="lazy"
        alt="Innovation & Technological Entrepreneurship Team" 
        className="h-full w-full object-cover"
        />
      </figure>

      <time className={s.badge} dateTime="2022-12-04">04 Dec 2022</time>

      <div className="p-5">

      <address className="flex space-x-2">
        <IconMapPin/>
        <span className="span">Alpaca Way Anaheim, CA 92805</span>
      </address>

      <h3 className="pt-3 font-semibold text-xl text-gray-700">
        <a href="#" className={s.card_title}>Innovation & Technological Entrepreneurship Team</a>
      </h3>

      {/* <a href="#" className={s.btn_link}>
        <span className="span">Get Ticket</span>
      </a> */}
      </div>
    </div>
  )
}

export default EventCard