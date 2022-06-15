import React from 'react'
import { useAPI } from '../apiContext'

import { header } from '../images/images'

function Header() {
  const { bitcoin } = useAPI()
  console.log('CONTEXT', bitcoin)
  return (
    <>
      <div className="header-height">
        <img alt="header" src={header} />

        <p className="text-white-100 font-bold text-image text-left ml-5 xs:ml-10 sm:ml-10 md:ml-16 lg:ml-24 mb-14 xxs:mb-0 xs:mb-10 sm:mb-14 md:mb-0">
          <span className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
            Explores the price of
            <br />
          </span>
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
            Cryptocurrencies <br />
          </span>
          <span className="text-2xl xs:text-4xl md:text-4xl lg:text-5xl">The smart way.</span>
          {/* <span className="text-2xl xs:text-4xl md:text-4xl lg:text-5xl">
            {bitcoin.prices.map(item => (
              <div>{item[1]}</div>
            ))}
          </span> */}
        </p>
      </div>
    </>
  )
}

export default Header
