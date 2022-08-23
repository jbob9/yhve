import { useLayoutEffect, useEffect } from 'react'
import { IconArrowUp } from "@tabler/icons"
import s from "./index.module.css"

const BackToTop = () => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
  
  useIsomorphicLayoutEffect(() => {
    const backTopBtn = document.querySelector("[data-back-top-btn]");
    const listeners = () => {
      if (window.scrollY >= 100) {
        backTopBtn.classList.add(s.active);
      } else {
        backTopBtn.classList.remove(s.active);
      }
    }
    window.addEventListener("scroll", listeners);
    return () => window.removeEventListener('scroll', listeners)
  }, [])

  return (
    <a href="#top" className={s.back_top_btn} aria-label="Back to top" data-back-top-btn>
      <IconArrowUp/>
    </a>
  )
}

export default BackToTop