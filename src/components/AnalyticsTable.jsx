import React, { useState, useMemo } from "react";
import BasicTable from "../components/BasicTable";
import DropButton from "../components/DropButton";
import WineData from "./WineData";
import AnalyticsColoumn from "./AnalyticsColoumn";
import { FiDownload } from "react-icons/fi";

const AnalyticsTable = () => {
  const [wineType, setWineType] = useState("Red Wine");
  const [duration, setDuration] = useState("Yearly");
  const TableName = "Wine Analytics Table";

  const wineOptions = ["All", "Red Wine", "White Wine", "Rosé", "Sparkling"];
  const durationOptions = ["Daily", "Monthly", "Yearly", "Quarterly"];
  const exportOptions = ["Export as CSV", "Export as PDF", "Export as Excel"];

  const filteredData = useMemo(() => {
    let result = WineData;
    if (wineType !== "All") {
      result = result.filter((wine) => wine.type === wineType);
    }
    return result;
  }, [wineType]);

  return (
    <div className="w-full bg-white py-5 px-4 rounded-[20px]">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-semibold">{TableName}</h1>

        <div className="flex gap-3 flex-wrap">
          <DropButton
            label={wineType}
            options={wineOptions}
            onSelect={(option) => setWineType(option)}
          />
          <DropButton
            label={duration}
            options={durationOptions}
            onSelect={(option) => setDuration(option)}
          />
          <button className="inline-flex items-center gap-2 px-4 py-1.5 border border-black bg-black text-white rounded-md text-sm hover:bg-gray-800">
                      <FiDownload size={16} />
                      Export Table
                    </button>
        </div>
      </div>

      <BasicTable data={filteredData} columns={AnalyticsColoumn} />
    </div>
  );
};

export default AnalyticsTable;

