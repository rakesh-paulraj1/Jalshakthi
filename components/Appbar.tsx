"use client"
import Link from "next/link";
export const Appbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-violet-800 backdrop-blur-md flex items-center justify-between p-4 bg-violet-100 md:px-16 rounded-b-xl">
      <div>
        
        <Link  href="/mapdashboard"className="font-bold text-violet-900 text-xl">
  Real Time Ganges River Quality Monitoring
      </Link>
            
      </div>
      <div className="flex items-center space-x-4">
      
      </div>
    </nav>
  );
};
