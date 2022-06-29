import React from 'react'

import { useLocation } from 'react-router-dom'
import Chart from './Chart'

function CoinsDetails() {
  const { state } = useLocation()
  console.log('STATE', state)

  return (
    <>
      <div class="grid grid-rows-3 grid-flow-col gap-4 text-black-100 pt-20">
        <div class="flex justify-between col-span-2 bg-whitesmoke-100">
          <div>
            Name : {state.coin.name} {state.coin.symbol}
          </div>
          <div>Market Cap</div>
          <div>Volume</div>
        </div>
        <div class="row-span-2 col-span-2 bg-whitesmoke-100">
          <div className="w-40">
            <Chart coinId={state.coin.id} />
          </div>
        </div>
        <div class="row-span-3 bg-whitesmoke-100">
          <div> High : {state.coin.high_24h}</div>
          <div> Low : {state.coin.low_24h}</div>
        </div>
      </div>
      {/* <div className="flex justify-center relative text-white-100 pt-20">
        <div>
          Name : {state.coin.name} {state.coin.symbol}
        </div>
        <div> High : {state.coin.high_24h}</div>
        <div> Low : {state.coin.low_24h}</div>
        <div className="w-40">
          <Chart coinId={state.coin.id} />
        </div>
      </div> */}
    </>
  )
}

export default CoinsDetails
