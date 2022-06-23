import { Route, Routes } from 'react-router-dom'
import CoinPage from '../components/CoinPage'
import CryptoList from '../components/CryptoList'
import Home from '../components/Home'
import Layout from '../components/Layout'
import React from 'react'

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crypto" element={<CryptoList />} />
          <Route path="coinpage" element={<CoinPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
