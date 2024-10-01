"use client";

import Map from "@/components/Map";
import { Icon } from "leaflet";
import dynamic from "next/dynamic";
import Link from "next/link";
const DEFAULT_CENTER: [number, number] = [29.7666636, 78.1999992];
const DoughnutChart = dynamic(() => import('@/components/Doughnut'), { ssr: false }); 
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38],
});

const markers = [
  {
    gcord: [29.7666636, 78.1999992],
    popup: `
      Temperature: 53.00°C,\n
      Dissolved O2: 66.50 ppm\n
      pH: 55.71\n
      Conductivity: 58.00 µS/cm\n
      BOD: 25.00 mg/L\n
      NitrateN: 66.80 ppm\n
      Fecal Colliform: 34.00 MPN/100mL\n
      Total Colliform: 45.65 MPN/100mL\n
      Fecal Streptococci: 34.00 MPN/100mL
    `,
  },
  {
    gcord: [29.810438, 78.172782],
    popup: `
      Temperature: 53.00°C\n
      Dissolved O2: 66.50 ppm\n
      pH: 55.71\n
      Conductivity: 58.00 µS/cm\n
      BOD: 25.00 mg/L\n
      NitrateN: 66.80 ppm\n
      Fecal Colliform: 34.00 MPN/100mL\n
      Total Colliform: 45.65 MPN/100mL\n
      Fecal Streptococci: 34.00 MPN/100mL
    `,
  },
  {
    gcord: [29.716661, 78.188261],
    popup: `
      Temperature: 53.00°C\n
      Dissolved O2: 66.50 ppm\n
      pH: 55.71\n
      Conductivity: 58.00 µS/cm\n
      BOD: 25.00 mg/L\n
      NitrateN: 66.80 ppm\n
      Fecal Colliform: 34.00 MPN/100mL\n
      Total Colliform: 45.65 MPN/100mL\n
      Fecal Streptococci: 34.00 MPN/100mL
    `,
  },
  {
    gcord: [29.870447, 78.165803],
    popup: `
      Temperature: 53.00°C\n
      Dissolved O2: 66.50 ppm\n
      pH: 55.71\n
      Conductivity: 58.00 µS/cm\n
      BOD: 25.00 mg/L\n
      NitrateN: 66.80 ppm\n
      Fecal Colliform: 34.00 MPN/100mL\n
      Total Colliform: 45.65 MPN/100mL\n
      Fecal Streptococci: 34.00 MPN/100mL
    `,
  },
];

const MapDashboard: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
    {/* Map Section */}
    <div className="flex-none h-1/2">
      <Map className="overflow-hidden w-full h-full" center={DEFAULT_CENTER} zoom={11}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

              attribution="© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.gcord as [number, number]} icon={customIcon}>
                <Popup>{marker.popup}</Popup>
              </Marker>
            ))}
          </>
        )}
      </Map>
    </div>
  
    {/* Waste Analysis Section */}
    <div className="flex-1 bg-violet-100 p-6">
      {/* Title and Button Section */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl text-violet-900 font-semibold"> Today Water quality </span>
        <Link
          href="/perdaytotal"
          className="bg-violet-700 text-white px-6 py-3 rounded-lg shadow hover:bg-violet-900 transition duration-300"
        >
         Clear Analysis
        </Link>
      </div>
  
    
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full h-full max-w-lg">
          <DoughnutChart />
        </div>
      </div>
    </div>
  </div>
  
  
  );

};
export default MapDashboard;
