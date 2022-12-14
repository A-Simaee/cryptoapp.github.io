import React from 'react'
import {BiTrendingDown, BiTrendingUp} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Coin = ({ coin }) => {
    
  return (
      <Link to={`/coin/${coin.id}`}>
          <div className='grid grid-cols-3 md:grid-cols-4  border-gray-200 rounded p-2 hover:bg-gray-200 items-center'>
              <div className='flex items-center cursor-pointer'>
                  <img className="w-7" src={coin.image} alt={coin.name} />
                  <h1 className='font-medium ml-2 mr-2'>{coin.name}</h1>
                  <h1>[{coin.symbol}]</h1>
              </div>
              <div>
                  <h1 className='text-center'>${coin.current_price.toFixed(2)}</h1>
              </div>
              <div className='flex gap-10'>
                  <h1 className={`${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-500'} flex items-center text-center`}>
                      {coin.price_change_percentage_24h < 0 ? <BiTrendingDown/> : <BiTrendingUp/>}
                      {coin.price_change_percentage_24h}
                  </h1>
              </div>
              <div className='hidden md:block text-center'>
                  <h1>Market Cap</h1>
                  <h1>${ coin.market_cap }</h1>
              </div>
                  
          </div>
    </Link>
  )
}

export default Coin