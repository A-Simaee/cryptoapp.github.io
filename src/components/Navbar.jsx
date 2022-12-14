import React from 'react'
import {GiTwoCoins} from 'react-icons/gi' 
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
      <div className='bg-slate-500 flex items-center p-4'>
          <div className='max-w-screen-md mx-auto'>
              <div className='flex items-center cursor-pointer' onClick={() => navigate('/')}>
                  <GiTwoCoins className='text-2xl text-yellow-500 mr-2' />
                  <h1 className='text-2xl font-medium'>CryptoApp</h1>
              </div>
          </div>
    </div>
  )
}

export default Navbar