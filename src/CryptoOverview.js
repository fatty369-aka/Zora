
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CryptoOverview() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    }).then(res => setData(res.data))
  }, [])

  return (
    <div>
      <h2>Top Cryptos</h2>
      <ul>
        {data.map(coin => (
          <li key={coin.id}>
            <img src={coin.image} width={20} alt={coin.name} /> {coin.name} (${coin.current_price}) 
            <span style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CryptoOverview
