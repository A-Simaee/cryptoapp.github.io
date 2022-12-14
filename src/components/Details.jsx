import CoinChart from './CoinChart'
import React from 'react'
import CoinInfo from './CoinInfo'

const Details = () => {
  return (
    <div className='max-w-screen-md mx-auto p-4'>
      <CoinChart />
      <CoinInfo/>
    </div>
  )
}

export default Details