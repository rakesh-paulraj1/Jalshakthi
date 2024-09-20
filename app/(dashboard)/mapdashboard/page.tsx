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
  { gcord: [29.7666636, 78.1999992], popup: "Water Quality: 71%" },
  { gcord: [29.810438, 78.172782], popup: "Water Quality: 71%" },
  { gcord: [29.716661, 78.188261], popup: "Water Quality: 71%" },
  { gcord: [29.870447, 78.165803], popup: "Water Quality: 71%" },
];

const MapDashboard: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
    {/* Map Section */}
    <div className="flex-none h-1/2">
      <Map className="rounded-t-3xl overflow-hidden w-full h-full" center={DEFAULT_CENTER} zoom={11}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
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
    <div className="flex-1 bg-orange-100 p-6">
      {/* Title and Button Section */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-semibold">Today Waste Analysis</span>
        <Link
          href="/perdaytotal"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300"
        >
         Clear Analysis
        </Link>
      </div>
  
      {/* Doughnut Chart */}
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
