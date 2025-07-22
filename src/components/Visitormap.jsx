import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { FiSearch } from "react-icons/fi";


import DropDownButton from "./DropDownButton";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const VisitorMap = ({ markers = [] }) => {
  const [wineType, setWineType] = useState("Red Wine");
  const [locationFilter, setLocationFilter] = useState("Location");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-[522px] bg-white rounded-xl overflow-hidden py-5 px-4 text-[rgba(37,37,37,1)]">
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 py-3  mb-6">
        <h2 className="text-[20px] font-bold leading-[22px]">Visitor Map</h2>
        <div className="flex gap-[10px] items-center">
          <div className="relative w-[280px] h-[40px]">
  <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="Search.."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="pl-10 pr-3 py-1 border rounded-[8px] text-[16px] w-full h-full"
  />
</div>

          <DropDownButton
            label={wineType}
            options={["All", "Red Wine", "White Wine", "Rosé"]}
            onSelect={setWineType}
          />
          <DropDownButton
            label={locationFilter}
            options={["Location", "Most Reactions", "Top Comments"]}
            onSelect={setLocationFilter}
          />
        </div>
      </div>

      {/* Map Container */}
      <MapContainer
        center={[30.2672, -97.7431]}
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full rounded-[12px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers
          .filter((marker) => {
            const matchesSearch = marker.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
            const matchesWineType =
              wineType === "All" || marker.wineType === wineType;
            return matchesSearch && matchesWineType;
          })
          .map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>
                <strong>{marker.name}</strong>
                <br />
                📍 {marker.location}
                <br />
                🧡 {marker.reactions} reactions
                <br />
                💬 {marker.comments} comments
                <br />
                🍷 {marker.wines} wines logged
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default VisitorMap;
