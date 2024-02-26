import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export default function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '코로나 확진자 기간별 발생 추이',
      },
    },
  }

  const labels = ['02.17', '02.18', '02.19', '02.20', '02.21', '02.22', '02.23']

  const data = {
    labels,
    datasets: [
      {
        label: '금주현황',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: [11436, 10718, 10274, 4324, 11880, 13082, 10845],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '전주현황',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: [13504, 12805, 12051, 5174, 14371, 14957, 12519],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <>
      <h1>Line Chart</h1>
      <Line options={options} data={data} />
    </>
  )
}
