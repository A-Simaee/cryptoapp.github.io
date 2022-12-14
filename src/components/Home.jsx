import React from 'react'
import Market from './Market'
import TopCoins from './TopCoins'

const Home = () => {
  return (
      <div className='max-w-screen-md mx-auto  justify-center p-4 items-center'>
      <TopCoins />
      <Market/>
      </div>
  )
}

export default Home