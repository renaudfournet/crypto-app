import React from 'react'

import { useLocation } from 'react-router-dom'
import Chart from './Chart'

function CoinsDetails() {
  const { state } = useLocation()
  console.log('STATE', state)

  return (
    <>
      <div class="md:grid md:grid-cols-4 gap-4 p-5 pt-20 ">
        <div class=" bg-whitesmoke-100 text-black-100 text-lg font-bold text-center p-10 rounded-lg xs:mt-4 md:mt-0">
          <div>
            Name : {state.coin.name} {state.coin.symbol}
          </div>
        </div>
        <div class=" bg-whitesmoke-100 text-black-100 text-lg font-bold text-center p-10 rounded-lg xs:mt-4 md:mt-0">
          <div class="bg-whitesmoke-100">
            <div>Market Cap</div>
          </div>
        </div>
        <div class=" bg-whitesmoke-100 text-black-100 text-lg font-bold text-center p-10 rounded-lg row-span-1 xs:mt-4 md:mt-0">
          <div class="bg-whitesmoke-100">
            <div>Volume</div>
          </div>
        </div>
        <div class=" bg-whitesmoke-100 text-black-100 text-lg font-bold text-center p-10 rounded-lg row-span-2 xs:mt-4 md:mt-0">
          <div> High : {state.coin.high_24h}</div>
          <div> Low : {state.coin.low_24h}</div>
        </div>
        <div class=" bg-whitesmoke-100 text-black-100 text-lg font-bold text-center p-10 rounded-lg col-span-3 xs:mt-4 md:mt-0">
          <div className="w-40">
            <Chart coinId={state.coin.id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CoinsDetails
