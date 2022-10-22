/* eslint-disable @next/next/no-img-element */
import s from "./index.module.css"
import cn from "classnames"

const AboutSection2 = () => {
  return (
    <section className={cn("section", s.about)} id="about" aria-label="about">
        <div className="mx-4 md:mx-10">

          <figure className={s.about_banner}>

            <img src="./assets/images/about-banner.jpg" width="450" height="590" loading="lazy" alt="about banner"
              className={cn("w-full", s.about_img)}/>

            <img src="./assets/images/about-abs-1.jpg" width="188" height="242" loading="lazy" aria-hidden="true"
              className={cn("abs_img", s.abs_img_1)} alt=""/>

            <img src="./assets/images/about-abs-2.jpg" width="150" height="200" loading="lazy" aria-hidden="true"
              className={cn("abs_img", s.abs_img_2)} alt=""/>

          </figure>

          <div className={s.about_content}>

            <p className="section-subtitle">Who We Are</p>

            <h2 className="h2 section-title">We Offer The Best Carrier</h2>

            <ul className={s.about_list}>

              <li className={s.about_item}>

                <div className={cn(s.item_icon, s.item_icon_1)}>
                  <img src="./assets/images/about-icon-1.png" width="30" height="30" loading="lazy" aria-hidden="true" alt=""/>
                </div>

                <div>
                  <h3 className="h3 item-title">Industry Expert Instructor</h3>

                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

              <li className={s.about_item}>

                <div className={cn(s.item_icon, s.item_icon_2)}>
                  <img src="./assets/images/about-icon-2.png" width="30" height="30" loading="lazy" aria-hidden="true" alt=""/>
                </div>

                <div>
                  <h3 className="h3 item-title">Up-to-Date Course Content</h3>

                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

              <li className={s.about_item}>

                <div className={cn(s.item_icon, s.item_icon_3)}>
                  <img src="./assets/images/about-icon-3.png" width="30" height="30" loading="lazy" aria-hidden="true" alt=""/>
                </div>

                <div>
                  <h3 className="h3 item-title">Biggest Student Community</h3>

                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

            </ul>

            <a href="#" className="btn btn-primary">
              <span className="span">Know About Us</span>

              {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
            </a>

          </div>

        </div>
      </section>

  )
}

export default AboutSection2