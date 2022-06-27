import React from 'react'

import { useLocation } from 'react-router-dom'
import Chart from './Chart'

function CoinsDetails() {
  const { state } = useLocation()
  console.log('STATE', state)

  return (
    <>
      <div className="relative text-white-100 pt-20">
        <div> Name : {state.coin.name}</div>
        <div> High : {state.coin.high_24h}</div>
        <div> Low : {state.coin.low_24h}</div>
        <div className="w-40">
          <Chart coinId={state.coin.id} />
        </div>
      </div>
    </>
  )
}

export default CoinsDetails
