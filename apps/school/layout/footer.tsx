import s from "./footer.module.css"
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from "@tabler/icons"
import Link from "next/link"
import cn from "classnames"

const Footer = () => {
  return (
    <div>
       <footer className={s.footer}>
        <div className={s.footer_top}>
          <div className={"container mx-auto"}>

            <div className={cn(s.footer_brand, "flex flex-col md:flex-row items-start md:items-center justify-between mx-6")}>       
              <div>
                <h1>
                  <Link href="/">
                    <a className="logo">YhveSchool</a>
                  </Link>
                </h1>

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
                </ul>
              </div>
              <div className="mr-16 mt-6 md:mt-0">
                <ul className={s.footer_list}>
                  <li>
                    <p className={s.footer_link_title}>Contact</p>
                  </li>
                  <li className={s.contact_item}>
                    <span>Call:</span>
                    <a href="tel:5463876387" className={s.contact_link}>546 3876 387</a>
                  </li>
                  <li className={s.contact_item}>
                    <span>Email:</span>
                    <a href="mailto:example@gmail.com" className={s.contact_link}>example@gmail.com</a>
                  </li>
                  <li className={s.contact_item}>
                    <span>Address:</span>
                    <a href="#" className={s.contact_link}>
                      <address>San Francisco, USA</address>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-white text-lg justify-center pb-10">
          <p className="copyright">
            &copy; {(new Date()).getFullYear()} <a href="">YHAVE-JIRE</a>. All right reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer