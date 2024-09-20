"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend,annotationPlugin);

const sourceData = [
  {
    label: "pH Level",
    value: 7.2,
  },
  {
    label: "Turbidity",
    value: 3.5,
  },
  {
    label: "Dissolved Oxygen",
    value: 8.1,
  },
];

const Doughnut = () => {
  return (
   
   
        <DoughnutChart
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Level",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Today's Water Quality Metrics",
              },
              annotation: {
                annotations: {
                  label1: {
                    type: 'label',
                    xValue: 0,
                    yValue: 0,
                    backgroundColor: 'rgba(0,0,0,0)',
                    content: "Quality" + "60%",
                    font: {
                      size:  30,
                      weight: 800
                    }
                  },
                }
              }
            },
          }}
          width={50} 
          height={50} 
        />
        
    
  );
};

export default Doughnut;
