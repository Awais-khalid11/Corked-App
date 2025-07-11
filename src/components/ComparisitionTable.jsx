import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import DropButton from "./DropButton"; 
import BasicTable from "./BasicTable"; 
import ComparisonColumns from "./ComparisitionColoumn"; 
import ComparisonData from "../data/ComparisonData";

const ComparisonTable = () => {
  const [view, setView] = useState("Vertical");
  const [duration, setDuration] = useState("Yearly");
  const TableName = "Your Winery vs Benchmark";

  const viewOptions = ["Vertical", "Horizontal"];
  const durationOptions = ["Yearly", "Monthly", "Weekly"];

  return (
    <div className="w-full bg-white py-5 px-4 rounded-[20px]">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-semibold">{TableName}</h1>

        <div className="flex gap-3 flex-wrap">
          {/* Dropdown for view */}
          <DropButton
            label={view}
            options={viewOptions}
            onSelect={(selected) => setView(selected)}
          />

          {/* Dropdown for duration */}
          <DropButton
            label={duration}
            options={durationOptions}
            onSelect={(selected) => setDuration(selected)}
          />

      
          <button className="inline-flex items-center gap-2 px-4 py-1.5 border border-black bg-black text-white rounded-md text-sm hover:bg-gray-800">
            <FiDownload size={16} />
            Export Table
          </button>
        </div>
      </div>

      <BasicTable data={ComparisonData} columns={ComparisonColumns} />
    </div>
  );
};

export default ComparisonTable;



