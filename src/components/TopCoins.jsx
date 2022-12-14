import { data } from 'autoprefixer'
import React from 'react'
import Gecko from './Gecko'
import TopCoin from './TopCoin'

const TopCoins = () => {
    const dataResponse = Gecko('search/trending')
    
    

    
  return (
      <div>
          <h1 className='font-medium mb-3'>Top Coins</h1>
          {dataResponse && dataResponse.coins.map(coin => <TopCoin key={coin.item.coin_id} coin={coin} />)}
    </div>
  )
}

export default TopCoins