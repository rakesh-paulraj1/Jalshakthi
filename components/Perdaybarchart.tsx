"use client"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";

 const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

  export const BarChart = () => {
    const chartData = {
      labels: Data.map(item => item.year),
      datasets: [
        {
          label: 'User Gain',
          data: Data.map(item => item.userGain),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'User Lost',
          data: Data.map(item => item.userLost),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    };

    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: true
              }
            }
          }}
        />
      </div>
    );
  };
  export default BarChart;