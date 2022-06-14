const requests = {
  CoinsList:
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  GetHistoryBitcoin: 'coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily',
  GetHistoryEth: 'coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily'
}

export default requests
