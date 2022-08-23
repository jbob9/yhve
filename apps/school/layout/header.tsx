import {IconMenu, IconX} from "@tabler/icons"
import s from "./header.module.css"
import cn from "classnames"
import { useLayoutEffect, useState, useEffect } from "react"
import Link from "next/link"

const Header = () => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  
  useIsomorphicLayoutEffect(() => {
    const header = document.querySelector("[data-header]");
    const listeners = () => {
      if (window.scrollY >= 100) {
        header.classList.add(s.active);
        header.classList.add(s.header_anim);
      } else {
        header.classList.remove(s.active);
        header.classList.remove(s.header_anim);
      }
    }
    window.addEventListener("scroll", listeners);
    return () => window.removeEventListener('scroll', listeners)
  }, [])

  return (
    <header className={s.header} data-header>
      <div className={s.container}>

      <h1>
        <Link href="/">
          <a className={s.logo}>YhveSchool</a>
        </Link>
      </h1>

      <nav className={cn(s.navbar, {[s.active]: open})} onClick={handleOpen}>
        <div className={s.navbar_top}>
          <a href="#" className={s.logo}>YhveSchool</a>
          <button 
          onClick={handleOpen} 
          className={cn(s.nav_close_btn)} aria-label="Close menu" 
          data-nav-toggler>
            <IconX/>
          </button>
        </div>

        <ul className={s.navbar_list}>

          <li className={s.navbar_item}>
            <a href="#home" className={s.navbar_link} data-nav-toggler>Home</a>
          </li>

          <li className={s.navbar_item}>
            <a href="#about" className={s.navbar_link} data-nav-toggler>About</a>
          </li>

          <li className={s.navbar_item}>
            <a href="#courses" className={s.navbar_link} data-nav-toggler>Courses</a>
          </li>

          <li className={s.navbar_item}>
            <a href="#" className={s.navbar_link} data-nav-toggler>Blog</a>
          </li>

          <li className={s.navbar_item}>
            <a href="#" className={s.navbar_link} data-nav-toggler>Contact</a>
          </li>
        </ul>
      </nav>

      <div className={s.header_actions}>
        <button className={cn(s.header_action_btn, s.nav_open_btn)} aria-label="Open menu" data-nav-toggler onClick={handleOpen}>
          <IconMenu/>
        </button>
      </div>
      <div className={cn(s.overlay, { [s.active]: open })}  onClick={handleOpen}></div>
    </div>
  </header>
  )
}

export default Header