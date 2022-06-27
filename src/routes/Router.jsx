import { Route, Routes } from 'react-router-dom'
import CryptoList from '../components/CryptoList'
import Home from '../components/Home'
import Layout from '../components/Layout'
import React from 'react'
import CoinsDetails from '../components/CoinDetails'

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crypto" element={<CryptoList />} />
          <Route path="coin-details/:id" element={<CoinsDetails />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
