import React, { useContext, useEffect, useState, createContext } from 'react'
import axios from 'axios'
import requests from './api/requests'

const APIContext = createContext()

const bitcoinUrl = requests.GetHistoryBitcoin

export function APIContextProvider({ children }) {
  const [bitcoin, setBitcoin] = useState([])

  useEffect(() => {
    async function fetchBitcoin() {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily`
      )
      console.log(data)
      setBitcoin(data)
    }
    fetchBitcoin()
  }, [])
  //

  console.log('BITCOIN', bitcoin)

  return (
    <APIContext.Provider
      value={{
        bitcoin
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export function useAPI() {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}
