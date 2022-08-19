/* eslint-disable @next/next/no-img-element */
import { IconPlayerPlay } from "@tabler/icons"
import s from "./index.module.css"
import cn from 'classnames'

const AboutSection = () => {
  return (
    <section className={s.about}>
    <div className={s.container}>

      <figure className={s.about_banner}>

        <img src="./assets/images/about-banner.jpg" alt="Eduland students" className={s.about_img}/>

        <img src="./assets/images/about-abs-2.jpg" alt="Vector line art" className={s.vector_line}/>

        <button className={s.play_btn}>
          {/* <ion-icon name="play"></ion-icon> */}
          <IconPlayerPlay/>
        </button>

      </figure>

      <div className={s.about_content}>

        <h2 className={cn("h2", s.about_title)}>We Help to Create Possibility & Success in Your Career!</h2>

        <p className="section-text">
          Continually administrate process-centric human capital rather than bleeding-edge methodologies.
          Distinctively supply
          accurate methods of empowerment before.
        </p>

        <button className="btn btn-primary">Get Started Today</button>

      </div>

    </div>
  </section>
  )
}

export default AboutSection