import s from './header.module.css'
import cn from "classnames"
import {IconMenu, IconX} from "@tabler/icons"

const Header = () => {
  return (
    <header className={cn(s.header, s.active)} data-header>
    <div className={s.container}>

      <div className={s.overlay} data-overlay></div>

      <a href="#" className={s.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="./assets/images/logo.svg" alt="Eduland logo"/>
      </a>

      <button className={s.menu_open_btn} data-menu-open-btn>
        {/* <ion-icon name="menu-outline"></ion-icon> */}
        <IconMenu/>
      </button>

      <nav className={s.navbar} data-navbar>

        <button className={s.menu_close_btn} data-menu-close-btn>
          {/* <ion-icon name="close-outline"></ion-icon> */}
          <IconX/>
        </button>

        <a href="#" className={s.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./assets/images/logo.svg" alt="Eduland logo"/>
        </a>

        <ul className={s.navbar_list}>

          <li>
            <a href="#" className={s.navbar_link}>Home</a>
          </li>

          <li>
            <a href="#" className={s.navbar_link}>About</a>
          </li>

          <li>
            <a href="#" className={s.navbar_link}>Service</a>
          </li>

          <li>
            <a href="#" className={s.navbar_link}>Blog</a>
          </li>

          <li>
            <a href="#" className={s.navbar_link}>Contact</a>
          </li>

        </ul>

        <button className="btn btn-secondary">Get Started</button>

      </nav>

    </div>
  </header>
  )
}

export default Header