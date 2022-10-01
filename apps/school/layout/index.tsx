import React from 'react'
import BackToTop from '../components/backToTop'
import Footer from './footer'
import Header from './header'

const Layout = ({ children, plain }) => {
  return (
    <div>
      <Header plain={plain}/>
      <main>
        {children}
      </main>
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default Layout