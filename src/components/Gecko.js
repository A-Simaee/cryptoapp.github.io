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
    
    //new code
    // const [response, setResponse] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')
    // axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'
    // const fetchData = async (params) => {
    //     try {
    //         setLoading(true)
    //         const result = await axios(params)
    //         setResponse(result.data)
    //     } catch (err) {
    //         setError(err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    useEffect(() => {
        getData(dataquery)
    },[])
    return (
      dataResponse
  )
}

export default Gecko