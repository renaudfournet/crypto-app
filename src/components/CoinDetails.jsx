import React from 'react'

import { useLocation } from 'react-router-dom'
import Chart from './Chart'

function CoinsDetails() {
  const { state } = useLocation()
  console.log('STATE', state)

  return (
    <>
      <div className="h-full">
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
          <div class="bg-card border-card text-white-100 text-center p-10 rounded-lg xs:mt-4 md:mt-0">
            <div>
              <span className="font-bold text-xl">{state.coin.name}</span> &nbsp;
              <span className="uppercase text-xl">{state.coin.symbol}</span>
            </div>
            <hr className="mt-4 mb-4 border-purple-200" />
            <div className="text-xl">${state.coin.current_price}</div>
            <div className="text-sm">
              <span
                className={
                  state.coin.price_change_percentage_24h > 0 ? 'text-green-100' : 'text-red-100'
                }
              >
                {state.coin.price_change_percentage_24h} %
              </span>
            </div>
          </div>
          <div class="bg-card border-card text-white-100 text-center p-10 rounded-lg xs:mt-4 md:mt-0">
            <div>
              <span className="font-bold text-xl">Market Cap</span> &nbsp;
            </div>
            <hr className="mt-4 mb-4 border-purple-200" />
            <div>
              <span className="text-xl">${state.coin.market_cap}</span> &nbsp;
            </div>
            <div className="text-sm">
              <span
                className={
                  state.coin.price_change_percentage_24h > 0 ? 'text-green-100' : 'text-red-100'
                }
              >
                {state.coin.market_cap_change_percentage_24h} %
              </span>
              &nbsp;
            </div>
          </div>
          <div class="bg-card border-card text-white-100 text-center p-10 rounded-lg row-span-1 xs:mt-4 md:mt-0">
            <div>
              <span className="font-bold  text-xl">Volume</span> &nbsp;
            </div>
            <hr className="mt-4 mb-4 border-purple-200" />
            <div>
              <span className=" text-xl">${state.coin.total_volume}</span> &nbsp;
            </div>
          </div>
          <div class="flex flex-col bg-card border-card text-white-100 p-10 rounded-lg row-span-2 xs:mt-4 md:mt-0">
            <div>
              <span className="float-left uppercase font-bold text-sm">Rank :</span>
              <span className="float-right">#{state.coin.market_cap_rank}</span>
            </div>
            <div className="mt-4">
              <span className="float-left uppercase font-bold text-sm">24H High :</span>
              <span className="float-right">${state.coin.high_24h}</span>
            </div>
            <div className="mt-4">
              <span className="float-left uppercase font-bold text-sm">24H Low :</span>
              <span className="float-right">${state.coin.low_24h}</span>
            </div>
            <div className="mt-4">
              <span className="float-left uppercase font-bold text-sm">ATH :</span>
              <span className="float-right">${state.coin.ath}</span>
            </div>
          </div>
          <div class="bg-card border-card text-white-100 text-xl font-bold text-center p-10 rounded-lg col-span-3 xs:mt-4 md:mt-0">
            <div className="w-auto">
              <Chart coinId={state.coin.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoinsDetails
