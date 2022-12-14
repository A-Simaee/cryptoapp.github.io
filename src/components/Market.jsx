import { data } from 'autoprefixer'
import React from 'react'
import Coin from './Coin'
import Gecko from './Gecko'

const Market = () => {
    const dataResponse = Gecko('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    
  return (
      <div>
          <h1 className='py-2 font-medium text-xl'>Coin Market</h1>
          {dataResponse && dataResponse.map(coin => <Coin key={coin.id} coin={coin} />)}
    </div>
  )
}

export default Market