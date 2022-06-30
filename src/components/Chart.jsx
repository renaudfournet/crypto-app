import React from 'react'
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
import { GetHistoricalChart } from '../api/requests'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

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
// console.log(dayInt)

const month = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26'
]

let name = month[d.getMonth()]

const labels = [
  `${dayInt - 26}/${name}`,
  `${dayInt - 25}/${name}`,
  `${dayInt - 24}/${name}`,
  `${dayInt - 23}/${name}`,
  `${dayInt - 22}/${name}`,
  `${dayInt - 21}/${name}`,
  `${dayInt - 20}/${name}`,
  `${dayInt - 19}/${name}`,
  `${dayInt - 18}/${name}`,
  `${dayInt - 17}/${name}`,
  `${dayInt - 16}/${name}`,
  `${dayInt - 15}/${name}`,
  `${dayInt - 14}/${name}`,
  `${dayInt - 13}/${name}`,
  `${dayInt - 12}/${name}`,
  `${dayInt - 11}/${name}`,
  `${dayInt - 10}/${name}`,
  `${dayInt - 9}/${name}`,
  `${dayInt - 8}/${name}`,
  `${dayInt - 7}/${name}`,
  `${dayInt - 6}/${name}`,
  `${dayInt - 5}/${name}`,
  `${dayInt - 4}/${name}`,
  `${dayInt - 3}/${name}`,
  `${dayInt - 2}/${name}`,
  `${dayInt - 1}/${name}`,
  `${dayInt}/${name}`
]

function Chart(props) {
  const [historicalData, setHistoricalData] = React.useState('')
  const [isLoaded, setloadStatus] = React.useState(false)
  const [dataName, setData] = React.useState('Prices')
  let url = GetHistoricalChart(props.coinId)

  const fetchingHistoricalData = React.useCallback(async () => {
    setloadStatus(false)
    let response = await fetch(url, { 'Access-Control-Allow-Origin': '*' })
    let data = await response.json()
    if (dataName === 'Prices') {
      setHistoricalData(data.prices)
    } else {
      setHistoricalData(data.market_caps)
    }
    console.log('DATA', data)
    setloadStatus(true)
  }, [])

  // console.log('PROPS', props.coinId)

  React.useEffect(() => {
    fetchingHistoricalData()
  }, [fetchingHistoricalData])

  React.useEffect(() => {
    fetchingHistoricalData()
  }, [fetchingHistoricalData])

  // console.log('HISTORY', historicalData)
  const data = {
    labels,
    datasets: [
      {
        data: historicalData && historicalData.map(coin => coin[1]),
        borderColor: 'white',
        backgroundColor: 'black',
        display: false,
        borderWidth: 1
      }
    ]
  }

  if (!historicalData) return null

  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default Chart
