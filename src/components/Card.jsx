import React from 'react'
import axios from './../api/axios'

function Card({ fetchUrl }) {
  const [coin, setCoin] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request)
      setCoin(request.data)
      return request
    }
    fetchData()
  }, [fetchUrl])
  console.log('Coin', coin)

  if (!coin) return null

  return (
    <div className="flex flex-wrap">
      {coin.map((item, index) => (
        <div key={index} className="rounded-lg border border-gray-200 m-2 p-4">
          <div className="flex justify-end px-4 pt-4">
            <div id="dropdown" className="hidden z-10 w-44 text-base rounded divide-y">
              text
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-black-100">
              {item.name} <span className="uppercase">{item.symbol}</span>
            </h5>
            <div>
              <p className="text-black-100">{item.current_price} $</p>
            </div>
            <div
              className={item.price_change_percentage_24h > 0 ? 'text-green-100' : 'text-red-100'}
            >
              <span>{item.price_change_percentage_24h} %</span>
            </div>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
                Info
              </button>
              <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 ">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
