"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
      "antibody": "Temperature",
      "data": 53.00
  },
  {
      "antibody": "Dissolved O2",
      "data": 66.50
  },
  {
      "antibody": "pH",
      "data": 55.71
  },
  {
      "antibody": "Conductivity",
      "data": 58.00
  },
  {
      "antibody": "BOD",
      "data": 25.00
  },
  {
      "antibody": "NitrateN",
      "data": 66.80
  },
  {
      "antibody": "Fecal colliform",
      "data": 34.00
  },
  {
      "antibody": "Total colliform",
      "data": 45.65
  },
  {
      "antibody": "Fecal streptococci",
      "data": 34.00
  }
]
;

export default function Perdaybarchart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={300}
        height={500}
        data={data}
        margin={{
          top: 30,
          right: 40,
          left: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="antibody" />
        <YAxis />
        <Tooltip />
        <Legend />
     
        <Bar dataKey="data" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}