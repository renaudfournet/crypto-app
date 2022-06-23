import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/anim/bg-lottie.json')
    })
  }, [])

  return (
    <>
      <div className="absolute top-0 bg-contain bg-center z-50" ref={container}></div>
      <div className="relative">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
