import s from "./index.module.css";
import cn from 'classnames'
import { IconArrowRight } from "@tabler/icons";

const Cta = () => {
  return (
    <section className={s.cta} style={{backgroundImage: "url('./assets/images/cta-bg.png')"}}>
  
        <div className={s.container}>

          <figure className={s.cta_banner}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
            src="./assets/images/cta-banner.jpg" width="580" height="380" 
            loading="lazy" alt="cta banner"
            className="h-full w-full object-cover"/>
          </figure>

          <div className={s.cta_content}>

            <p className={s.section_subtitle}>Free Workshop</p>

            <h2 className={cn("h2", s.section_title)}>Join Our Free Workshops</h2>

            <p className={s.section_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consect adipi scing elit, sed do
              eiusmod tempor
              incididunt ut sed do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>

            <a href="#" className="btn btn-secondary">
              <span className="span">Upcomming Workshop</span>
              <IconArrowRight className="inline"/>
              {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
            </a>

          </div>

        </div>
    </section>
  )
}

export default Cta