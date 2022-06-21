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
  }, [])

  console.log('COIN', coin)

  if (!coin) return null

  return (
    <>
      <div className="sticky top-20 h-16 z-50 px-2 sm:px-4 flex align-middle bg-black-100 text-white-100">
        header
      </div>
      <div className="text-white-100">
        <ul>
          {coin.map(coin => (
            <li>
              <div className="grid grid-cols-6 items-center bg-purple-100 h-16 border-list border-white-100">
                <img className="w-7 mx-6" alt="icon_crypto" src={coin.image} />
                <div className="font-bold ">{coin.name}</div>
                <div className="font-bold uppercase">{coin.symbol}</div>
                <div>{coin.low_24h}</div>
                <div>{coin.high_24h}</div>
                <div>{coin.price_change_percentage_24h}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default CryptoList
