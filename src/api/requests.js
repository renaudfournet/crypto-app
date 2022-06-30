const requests = {
  CoinsList:
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
}

export default requests

export const GetHistoricalChart = id =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`

export const GetCoinData = id => `https://api.coingecko.com/api/v3/coins/${id}?`

export const GetListCoin = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
