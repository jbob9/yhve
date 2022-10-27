import s from "./index.module.css";
import cn from 'classnames'
import { IconArrowRight } from "@tabler/icons";

const Cta = () => {
  return (
    <section className={s.cta} style={{backgroundImage: "url('./assets/images/cta-bg.png')"}}>
  
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mx-3 md:mx-6">

          <figure className={s.cta_banner}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
            src="./assets/images/cta-banner.jpg" width="580" height="380" 
            loading="lazy" alt="cta banner"
            className="h-full w-full object-cover"/>
          </figure>

          <div className="order-2 md:order-1">

            <p className="text-white">Free Workshop</p>

            <h2 className="text-white font-semibold text-2xl">Join Our Free Workshops</h2>

            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consect adipi scing elit, sed do
              eiusmod tempor
              incididunt ut sed do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>

            <a href="#" className="bg-white text-indigo-500 rounded-lg p-4">
              <span className="span">Upcomming Workshop</span>
              <IconArrowRight className="inline"/>
            </a>

          </div>

        </div>
    </section>
  )
}

export default Cta