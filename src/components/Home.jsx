import requests from '../api/requests'
import Card from './Card'

import Header from './Header'

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="pt-40 md:pt-10 lg:pt-40">
        <Card fetchUrl={requests.CoinsList} />
      </div>
    </>
  )
}

export default Home
