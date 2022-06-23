import { useEffect, useState } from 'react'
import { GetListCoin } from '../api/requests'
import axios from 'axios'

function CryptoList() {
  const [coin, setCoin] = useState(null)

  const url = GetListCoin()

  useEffect(() => {
    async function fetchBitcoin() {
      const request = await axios.get(url)
      // console.log(request)
      setCoin(request.data)
      return request
    }
    fetchBitcoin()
  }, [url])

  console.log('COIN', coin)

  if (!coin) return null

  return (
    <>
      <div className="text-white-100 pt-40 mx-40">
        <div className="top-20 h-10 z-50 px-2 grid grid-cols-5 align-middle text-white-100">
          <div></div>
          <div className="flex justify-start">NAME</div>
          <div className="flex justify-end">PRICE 24H</div>
          <div className="flex justify-end">PRICE 24H</div>
          <div className="flex justify-end">% 24H</div>
        </div>
        <ul>
          {coin.map(coin => (
            <li>
              <div className="grid grid-cols-5 items-center h-16 border-t border-purple-200">
                <div>
                  <img
                    className="bg-white-100 rounded-full w-7 mx-6"
                    alt="icon_crypto"
                    src={coin.image}
                  />
                </div>
                <div className=" flex justify-start">
                  <span className="font-bold">{coin.name}</span> &nbsp;
                  <span className=" uppercase">{coin.symbol}</span>
                </div>

                <div className="flex justify-end">{coin.low_24h}</div>
                <div className="flex justify-end">{coin.high_24h}</div>
                <div className="flex justify-end">
                  <div
                    className={
                      coin.price_change_percentage_24h > 0 ? 'text-green-100' : 'text-red-100'
                    }
                  >
                    <span className="flex">
                      {coin.price_change_percentage_24h > 0 ? <div>+</div> : null}
                      {coin.price_change_percentage_24h} %
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default CryptoList
