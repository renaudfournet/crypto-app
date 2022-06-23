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
      <div className="bg-black-300 relative">
        <div>
          <p className="text-white-100 font-bold text-2xl pt-40">MARKET PRICES</p>
        </div>
        <div className=" relative overflow-x-auto sm:rounded-lg  xxs:mx-0 md:mx-40">
          <table className="w-full text-sm text-left text-white-100 mt-20">
            <thead className="text-xs uppercase bg-transparent sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3 sticky left-0 z-10 bg-black-300 "></th>
                <th scope="col" className="px-6 py-3 ">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE 24H
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE 24H
                </th>
                <th scope="col" className="px-6 py-3">
                  % 24H
                </th>
              </tr>
            </thead>
            <tbody>
              {coin.map(coin => (
                <tr className="bg-white border-t border-purple-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  dark:text-white whitespace-nowrap sticky left-0 z-10 bg-black-300"
                  >
                    <img
                      className="bg-white-100 rounded-full w-7 mx-6"
                      alt="icon_crypto"
                      src={coin.image}
                    />
                  </th>
                  <td className="px-6 py-4">
                    <span className="font-bold">{coin.name}</span> &nbsp;
                    <span className=" uppercase">{coin.symbol}</span>
                  </td>
                  <td className="px-6 py-4">${coin.low_24h}</td>
                  <td className="px-6 py-4">${coin.high_24h}</td>
                  <td className="px-6 py-4">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default CryptoList
