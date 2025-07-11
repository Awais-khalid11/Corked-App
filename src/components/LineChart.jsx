import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Yearly");

  const series = [
    {
      name: "Reactions",
      data: [40, 60, 60, 90, 80, 85, 90],
    },
    {
      name: "Comments",
      data: [20, 30, 25, 50, 40, 50, 55],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#8F4A57", "#D88787"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: { fontSize: "12px", fill: "#666" },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: { fontSize: "12px", fill: "#666" },
      },
    },
    legend: {
      show: false, // We'll use custom legend
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} logs`,
      },
    },
    markers: {
      size: 5,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
  };

  const legendData = [
    { label: "Reactions", color: "#8F4A57" },
    { label: "Comments", color: "#D88787" },
  ];

  // DropDownButton inline (can be separated if reused)
  

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Engagement Trends</h2>
          
      </div>

      <div className="h-80">
        <ReactApexChart series={series} options={options} type="line" height={285} />
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center gap-6 mt-4">
        {legendData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
