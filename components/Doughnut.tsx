"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend,annotationPlugin);

const sourceData = [
  {
    label: "Temperature",
    value: 53.00,
    backgroundColor: "rgba(43, 63, 229, 0.8)",
    borderColor: "rgba(43, 63, 229, 0.8)",
  },
  {
    label: "Dissolved O2",
    value: 66.50,
    backgroundColor: "rgba(250, 192, 19, 0.8)",
    borderColor: "rgba(250, 192, 19, 0.8)",
  },
  {
    label: "pH",
    value: 55.71,
    backgroundColor: "rgba(253, 135, 135, 0.8)",
    borderColor: "rgba(253, 135, 135, 0.8)",
  },
  {
    label: "Conductivity",
    value: 58.00,
    backgroundColor: "rgba(135, 211, 124, 0.8)",
    borderColor: "rgba(135, 211, 124, 0.8)",
  },
  {
    label: "BOD",
    value: 25.00,
    backgroundColor: "rgba(255, 99, 132, 0.8)",
    borderColor: "rgba(255, 99, 132, 0.8)",
  },
  {
    label: "NitrateN",
    value: 66.80,
    backgroundColor: "rgba(54, 162, 235, 0.8)",
    borderColor: "rgba(54, 162, 235, 0.8)",
  },
  {
    label: "Fecal colliform",
    value: 34.00,
    backgroundColor: "rgba(255, 206, 86, 0.8)",
    borderColor: "rgba(255, 206, 86, 0.8)",
  },
  {
    label: "Total colliform",
    value: 45.65,
    backgroundColor: "rgba(75, 192, 192, 0.8)",
    borderColor: "rgba(75, 192, 192, 0.8)",
  },
  {
    label: "Fecal streptococci",
    value: 34.00,
    backgroundColor: "rgba(153, 102, 255, 0.8)",
    borderColor: "rgba(153, 102, 255, 0.8)",
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
                backgroundColor:  sourceData.map((data) => data.backgroundColor),
                borderColor:sourceData.map((data) => data.borderColor),
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
                    content: "Quality" + " 60%",
                    font: {
                      size:  29,
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
