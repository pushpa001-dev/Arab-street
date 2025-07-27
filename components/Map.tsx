"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const position: [number, number] = [16.23891717267137, 80.63588172798684];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
export default function LeafletMap() {
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
        <Popup>
          <h2 className="font-bold text-lg">Arab street Restaurant</h2>
          <p>Mandi Biryani & Special Dishes</p>
        </Popup>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
