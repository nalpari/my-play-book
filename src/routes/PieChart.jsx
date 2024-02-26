import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const data = {
    labels: ['Chrome', 'Safari', 'Edge', 'Firefox', 'Samsung', 'Opera'],
    datasets: [
      {
        label: '# of Votes',
        data: [64.1, 19.2, 4.2, 3.9, 2.8, 2.3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const frameworkData = {
    labels: [
      'React',
      'Express',
      'Vue.js',
      'Angular',
      'React Native',
      'Electron',
      'AngularJS',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [64, 43, 32, 24, 21, 13, 11],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(219, 203, 237, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(219, 203, 237, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h1>글로벌 브라우저 시장 점유율</h1>
        <div className="flex w-1/3">
          <Pie data={data} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1>글로벌 Javascript 프레임워크 사용률</h1>
        <div className="flex w-1/3">
          <Pie data={frameworkData} />
        </div>
      </div>
    </>
  )
}
