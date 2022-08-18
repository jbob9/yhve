import s from "./footer.module.css"
import cn from 'classnames';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from "@tabler/icons"
const Footer = () => {
  return (
    <div>
       <footer className={s.footer}>
        <div className={s.footer_top}>
          <div className={"container mx-auto"}>

            <div className={s.footer_brand}>

              <a href="#" className={s.logo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="./assets/images/logo.svg" alt="Eduland logo"/>
              </a>

              <p className={s.footer_text}>
                Professionally scale cross functional human capital and extensive technology.
              </p>

              <ul className={s.social_list}>

                <li>
                  <a href="#" className={s.social_link}>
                    <IconBrandFacebook/>
                  </a>
                </li>

                <li>
                  <a href="#" className={s.social_link}>
                    <IconBrandTwitter/>
                  </a>
                </li>

                <li>
                  <a href="#" className={s.social_link}>
                    <IconBrandInstagram/>
                  </a>
                </li>

                <li>
                  <a href="#" className={s.social_link}>
                    {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                  </a>
                </li>

              </ul>

            </div>

            <div className={"grid grid-cols-1 lg:grid-cols-4"}>

              <ul className={s.footer_list}>

                <li>
                  <p className={s.footer_link_title}>Services</p>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Design</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Development</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Marketing</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Content Writing</a>
                </li>

              </ul>

              <ul className={s.footer_list}>

                <li>
                  <p className={s.footer_link_title}>Company</p>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>About</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Terms</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Privacy Policy</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Careers</a>
                </li>

              </ul>

              <ul className={s.footer_list}>

                <li>
                  <p className={s.footer_link_title}>Job Info</p>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Select</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Services</a>
                </li>

                <li>
                  <a href="#" className={s.footer_link}>Payment</a>
                </li>

              </ul>

              <ul className={s.footer_list}>

                <li>
                  <p className={s.footer_link_title}>Contact</p>
                </li>

                <li className={s.contact_item}>
                  <span>Call : </span>

                  <a href="tel:5463876387" className={s.contact_link}>546 3876 387</a>
                </li>

                <li className={s.contact_item}>
                  <span>Email : </span>

                  <a href="mailto:example@gmail.com" className={s.contact_link}>example@gmail.com</a>
                </li>

                <li className={s.contact_item}>
                  <span>Address : </span>

                  <a href="#" className={s.contact_link}>
                    <address>San Francisco, USA</address>
                  </a>
                </li>

              </ul>

            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="">codewithsadee</a>. All right reserved
            </p>
          </div>
        </div>

        </footer>
    </div>
  )
}

export default Footer