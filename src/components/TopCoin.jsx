import React from 'react'
import { Link } from 'react-router-dom'

const TopCoin = ({ coin }) => {
  
  return (
    <Link to={`/coin/${coin.item.id}`}>
      <div className='font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200 cursor-pointer'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-xl'>{coin.item.score + 1}</h1>
          <img src={coin.item.small} alt={coin.item.name} className="w-7 h-7"></img>
          <h1 className='font-medium'>{coin.item.name}</h1>
          <h1>[{ coin.item.symbol }]</h1>
        </div>
      </div>
    </Link>
  )
}

export default TopCoin