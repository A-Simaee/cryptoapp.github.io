import axios from 'axios'
import { useEffect, useState } from 'react'

const Gecko = (dataquery) => {
    const API_URL = 'https://api.coingecko.com/api/v3'
    const [dataResponse, setDataResponse] = useState(null)
    const getData = async () => {
        const response = await axios(`${API_URL}/${dataquery}`)
            // .then((res) => console.log(res))
            .then((response) => setDataResponse(response.data))
    }
    
    
    useEffect(() => {
        getData(dataquery)
    },[])
    return (
      dataResponse
  )
}

export default Gecko