import React from 'react'
import { useParams } from 'react-router-dom'
import Gecko from './Gecko'

const CoinInfo = () => {
    const {id} = useParams()
    const dataResponse = Gecko(`/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
    

    if (!dataResponse) {
        return <div>Loading</div>
    }
  return (
      <div>
          <div className='flex space-x-4 items-center'>
              <img src={dataResponse.image.small} alt={dataResponse.name} />
              <h1 className='font-medium text-xl'>{dataResponse.name}</h1>
              
          </div>
          <h1 className='py-2' dangerouslySetInnerHTML={{__html: dataResponse.description.en}}></h1>
    </div>
  )
}

export default CoinInfo