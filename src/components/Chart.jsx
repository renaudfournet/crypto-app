import React from 'react'
import axios from './../api/axios'
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

function Chart() {
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

  const data = {
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
  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default Chart
