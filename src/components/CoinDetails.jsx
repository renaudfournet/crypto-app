import React from 'react'

import { useLocation } from 'react-router-dom'
import Chart from './Chart'

function CoinsDetails() {
  const { state } = useLocation()
  console.log('STATE', state)

  return (
    <>
      <div className="flex justify-center text-white-100 text-4xl pt-32">
        <div className="text-white-100 m-2">
          <img className="w-20" alt="logo crypto" src={state.coin.image} />
        </div>
        &nbsp;
        <div className="flex items-center">
          <span className="font-bold">{state.coin.name}</span> &nbsp;
          <span className="uppercase">{state.coin.symbol}</span>
        </div>
      </div>
      <div class="md:grid md:grid-cols-4 gap-6 px-10 pt-20">
        <div class="bg-card border-card text-white-100 text-xl text-center p-10 rounded-lg xs:mt-4 md:mt-0">
          <div>
            <span className="font-bold">{state.coin.name}</span> &nbsp;
            <span className="uppercase">{state.coin.symbol}</span>
          </div>
          <hr className="mt-4 mb-4 border-purple-200" />
          <div>${state.coin.current_price}</div>
          <div>{state.coin.price_change_percentage_24h} %</div>
        </div>
        <div class="bg-card border-card text-white-100 text-xl text-center p-10 rounded-lg xs:mt-4 md:mt-0">
          <div>
            <span className="font-bold">Market Cap</span> &nbsp;
          </div>
          <hr className="mt-4 mb-4 border-purple-200" />
          <div>
            <span>${state.coin.market_cap}</span> &nbsp;
          </div>
          <div>
            <span>{state.coin.market_cap_change_percentage_24h} %</span> &nbsp;
          </div>
        </div>
        <div class="bg-card border-card text-white-100 text-xl text-center p-10 rounded-lg row-span-1 xs:mt-4 md:mt-0">
          <div>
            <span className="font-bold">Volume</span> &nbsp;
          </div>
          <hr className="mt-4 mb-4 border-purple-200" />
          <div>
            <span>${state.coin.total_volume}</span> &nbsp;
          </div>
        </div>
        <div class="flex flex-col bg-card border-card text-white-100 text-xl p-10 rounded-lg row-span-2 xs:mt-4 md:mt-0">
          <div>
            <span className="float-left">Rank :</span>
            <span className="float-right">#{state.coin.market_cap_rank}</span>
          </div>
          <div>
            <span className="float-left">High :</span>
            <span className="float-right">{state.coin.high_24h}</span>
          </div>
          <div>
            <span className="float-left">Low :</span>
            <span className="float-right">{state.coin.low_24h}</span>
          </div>
          <div>
            <span className="float-left">ATH :</span>
            <span className="float-right">{state.coin.ath}</span>
          </div>
        </div>
        <div class="bg-card border-card text-white-100 text-xl font-bold text-center p-10 rounded-lg col-span-3 xs:mt-4 md:mt-0">
          <div className="w-auto">
            <Chart coinId={state.coin.id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CoinsDetails
