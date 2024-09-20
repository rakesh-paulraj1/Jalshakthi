"use client"
import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  children: (ReactLeaflet: typeof import('react-leaflet'), Leaflet: typeof import('leaflet')) => React.ReactNode;
  className?: string;
  width?: number;
  height?: number;

  center: [number, number]; 
  zoom: number;
  [key: string]: any;
}

const { MapContainer } = ReactLeaflet;

const Map: React.FC<MapProps> = ({ children, className, center, zoom, ...rest }) => {
  const mapClassName = `h-full w-full ${className ? className : ''}`;

  useEffect(() => {
    (async function init() {
      delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'icons/placeholder.png',
        iconUrl: 'icons/placeholder.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer center={center} zoom={zoom} className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
