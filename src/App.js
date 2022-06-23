import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Router from './routes/Router'
// import { APIContextProvider } from './apiContext'

function App() {
  return (
    <div className="App bg-radial">
      {/* <APIContextProvider> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* </APIContextProvider> */}
    </div>
  )
}

export default App
