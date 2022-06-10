import requests from './api/requests'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card fetchUrl={requests.CoinsList} />
    </div>
  )
}

export default App
