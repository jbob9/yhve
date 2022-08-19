import s from "./index.module.css"
import cn from 'classnames'

const Hero = () => {
  return (
    <section className={s.hero}>
    <div className={s.container}>

      <figure className={s.hero_banner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./assets/images/hero-banner.png" 
        alt="A young lady sits, holding a pen and a notebook."/>
      </figure>

      <div className={s.hero_content}>

        <h1 className={cn('h1', s.hero_title)}>Start Your Future Education</h1>

        <p className="section_text">
          Credibly redefine distinctive total linkage vis-a-vis multifunction data. Phosphorescently impact
          goal-oriented
          strategic
        </p>

        <button className="btn btn-primary">Discover More</button>

      </div>

    </div>
  </section>
  )
}

export default Hero