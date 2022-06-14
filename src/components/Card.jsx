import React from 'react'
import axios from './../api/axios'
import Chart from './Chart'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import requests from '../api/requests'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const bitcoinUrl = requests.GetHistoryBitcoin
const ethUrl = requests.GetHistoryEth

export const options = {
  scales: { y: { display: false }, x: { display: false } },
  responsive: true,
  plugins: {
    legend: {
      position: '',
      display: false,
      tooltips: {
        enabled: false
      }
    },
    title: {
      display: false,
      text: 'chart coin'
    }
  }
}

let d = new Date()

let dayString = d.toString()
let day = dayString.slice(8, 10)
let dayInt = parseInt(day)
console.log(dayInt)

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

let name = month[d.getMonth()]

const labels = [
  `${dayInt - 6}/${name}`,
  `${dayInt - 5}/${name}`,
  `${dayInt - 4}/${name}`,
  `${dayInt - 3}/${name}`,
  `${dayInt - 2}/${name}`,
  `${dayInt - 1}/${name}`,
  `${dayInt}/${name}`
]

function Card({ fetchUrl }) {
  const [coin, setCoin] = React.useState()
  const [bitcoin, setBitcoin] = React.useState(null)
  const [eth, setEth] = React.useState(null)

  React.useEffect(() => {
    async function fetchBitcoin() {
      const request = await axios.get(bitcoinUrl)
      // console.log(request)
      setBitcoin(request.data)
      return request
    }
    fetchBitcoin()
  }, [])
  console.log('BITCOIN', bitcoin)

  React.useEffect(() => {
    async function fetchEth() {
      const request = await axios.get(ethUrl)
      // console.log(request)
      setEth(request.data)
      return request
    }
    fetchEth()
  }, [])
  console.log('ETH', eth)

  const bitcoinData = {
    labels,
    datasets: [
      {
        data: bitcoin && bitcoin.prices.map(value => value[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        display: false
      }
    ]
  }

  const ethData = {
    labels,
    datasets: [
      {
        data: eth && eth.prices.map(value => value[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        display: false
      }
    ]
  }

  let historyData = [bitcoinData, ethData]

  let fullData = [coin, historyData]
  console.log('FULL DATA', fullData)

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      // console.log(request)
      setCoin(request.data)
      return request
    }
    fetchData()
  }, [fetchUrl])
  console.log('COIN', coin)

  if (!coin) return null

  return (
    <>
      <div>
        <p className="text-white-100">
          <span className="text-1xl">Cryptomonnaies</span>
          <br />
          <span className="font-bold text-3xl">Cours du marché</span>
        </p>
      </div>
      <div className="flex justify-center flex-wrap mt-8">
        {coin.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border-card border-purple-100  m-2 p-4 w-60 bg-card"
          >
            <div className="flex justify-end px-4 pt-4">
              <div id="dropdown" className="hidden z-10 w-44 text-base rounded divide-y">
                text
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <div className="text-white-100 m-2">
                <img className="w-10" alt="logo crypto" src={item.image} />
              </div>
              <h5 className="mb-1 text-xl font-medium text-white-100">
                <span className="font-bold">{item.name}</span>&nbsp;
                <span className="uppercase">{item.symbol}</span>
              </h5>
              <div>
                <p className="text-white-100 font-bold text-2xl">{item.current_price} $</p>
              </div>
              <div
                className={item.price_change_percentage_24h > 0 ? 'text-green-100' : 'text-red-100'}
              >
                <span>{item.price_change_percentage_24h} %</span>
              </div>
              <div className="w-40">
                <Line options={options} data={bitcoinData} />
              </div>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
                  Analyze
                </button>
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 ">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
