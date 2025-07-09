import React, { useState } from "react";
import Chart from "react-apexcharts";
import DropButton from "./DropButton";

const DonutChart = () => {
  const [duration, setDuration] = useState("Yearly");
  const durationOptions = ["Daily", "Monthly", "Yearly"];

  const labels = ["Off-site", "On-site"];
  const series = [65, 35]; 
  const colors = ["#B2642A", "#51111D"];

  const options = {
    labels: labels,
    colors: colors,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val} logins`,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white py-5 px-4 rounded-[12px] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-lg font-semibold">Wine Log Locations</h2>
        <DropButton
          label={duration}
          options={durationOptions}
          onSelect={(selected) => setDuration(selected)}
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height="244"
        />
      </div>

      <div className="flex justify-center gap-6 mt-3 flex-wrap">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></span>
            <span className="text-sm text-black">
              {label}: {series[index]} logs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;


