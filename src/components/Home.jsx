import requests from '../api/requests'
import Card from './Card'

import Header from './Header'

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-40 md:mt-10 lg:mt-40">
        <Card fetchUrl={requests.CoinsList} />
      </div>
    </>
  )
}

export default Home
