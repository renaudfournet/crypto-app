import requests from './api/requests'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App bg-secondary-100">
      <div>
        <Header />
      </div>
      <div className="mt-0 md:mt-28 lg:mt-80">
        <Card fetchUrl={requests.CoinsList} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
