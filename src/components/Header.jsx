import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

function Header() {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/anim/header-anim.json')
    })
  }, [])

  return (
    <>
      <div className="flex xxs:justify-center xs:justify-center sm:justify-between pt-40 header-wrap">
        <div className="mx-10 text-wrap-header">
          <p className="text-white-100 font-bold text-left">
            <span className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
              Explores the price of
              <br />
            </span>
            <span className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              Cryptocurrencies <br />
            </span>
            <span className="text-2xl xs:text-4xl md:text-4xl lg:text-5xl">The smart way.</span>
          </p>
        </div>
        <div className="lottie-wrap">
          <div className="" ref={container}></div>
        </div>
      </div>
      {/* <div className="flex flex-wrap xxs:flex-col justify-between h-screen w-screen">
        <div className="relative">
          <p className="text-white-100 font-bold text-image text-left ">
            <span className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
              Explores the price of
              <br />
            </span>
            <span className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              Cryptocurrencies <br />
            </span>
            <span className="text-2xl xs:text-4xl md:text-4xl lg:text-5xl">The smart way.</span>
          </p>
        </div>
        <div className="mt-20 ">
          <div className="lottie-size" ref={container}></div>
        </div>
      </div> */}
    </>
  )
}

export default Header
