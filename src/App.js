import requests from './api/requests'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card name="Paris" fetchUrl={requests.CoinsList} />
    </div>
  )
}

export default App
