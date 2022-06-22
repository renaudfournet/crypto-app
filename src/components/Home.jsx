import requests from '../api/requests'
import Card from './Card'

import Header from './Header'

function Home() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className=" mt-0 md:mt-10 lg:mt-52">
        <Card fetchUrl={requests.CoinsList} />
      </div>
    </>
  )
}

export default Home
