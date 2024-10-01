import BarChart from '@/components/Perdaybarchart';
import React from 'react';

const Perdaytotal = () => {
  return (
    <div className="h-screen flex flex-col">
   
      <div className="flex-1 flex items-center  justify-center">
        <BarChart />
      </div>

      <div className="flex-grow bg-violet-100 p-6">
 
  <div className="text-left mb-4">
    <h2 className="text-3xl text-violet-900 font-semibold mb-2">Water Quality Levels</h2>
    <h2 className="text-2xl font-bold text-violet-500">Total Coliform</h2>
  </div>
  <div className="mb-4">
    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 focus:outline-none">
      Detailed Analysis
    </button>
  </div>

  <div className="grid grid-cols-3 gap-4">
    {/* Previous Day Card */}
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Previous Day</h3>
      <p className="text-lg">
        <span className="font-bold text-blue-500">120 ppm</span>
      </p>
    </div>

    {/* Present Day Card */}
    <div className="p-4 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Present Day</h3>
      <p className="text-lg">
        <span className="font-bold text-blue-500">150 ppm</span>
      </p>
    </div>

    {/* Forecast Card */}
    <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Next day Forecast</h3>
      <p className="text-lg">
        <span className="font-bold text-blue-500">160 ppm</span>
      </p>
    </div>
  </div>
</div>
</div>

  );
};

export default Perdaytotal;
