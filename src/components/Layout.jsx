import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

import Footer from './Footer'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

function Layout({ children }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/anim/bg-lottie.json'),
      resizeMode: 'cover'
    })
  }, [])

  function useScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  }
  useScrollToTop()
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
