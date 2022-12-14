import React from 'react'
import { useParams } from 'react-router-dom'
import Gecko from './Gecko'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = () => {
  const {id} = useParams()
  const dataResponse = Gecko(`/coins/${id}/market_chart?vs_currency=usd&days=7`)
  
  if (!dataResponse) {
    return <div>Loading</div>
  }
  const coinPrice = dataResponse.prices.map(elem => ({
    x: elem[0],
    y: elem[1].toFixed(2)
  }))
  
  const options = {
    responsive: true
  }
  const data = {
    labels: coinPrice.map(elem => moment(elem.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: `${id} value in 7 days`,
        data: coinPrice.map(elem => elem.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
   
    ]
  }
  return (
    <div>
      <Line options={options} data={data}/>
    </div>
  )
}

export default CoinChart