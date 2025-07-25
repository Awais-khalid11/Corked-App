import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Cabernet Sauvignon 2020", onPremise: 55, offPremise: 20, total: 75 },
  { name: "Rosé All Day Special Edition", onPremise: 50, offPremise: 10, total: 55 },
  { name: "Chardonnay Reserve 2022", onPremise: 55, offPremise: 15, total: 70 },
  { name: "Pinot Noir Classic", onPremise: 45, offPremise: 15, total: 60 },
  { name: "Sparkling Brut Nature", onPremise: 10, offPremise: 25, total: 35 },
  { name: "Limited Edition Zinfandel", onPremise: 35, offPremise: 18, total: 53 },
];

// Custom X-axis label with ellipsis + tooltip
const CustomizedAxisTick = ({ x, y, payload }) => (
  <foreignObject x={x - 35} y={y + 5} width={70} height={30}>
    <div
      style={{
        fontSize: "11px",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
      title={payload.value}
    >
      {payload.value}
    </div>
  </foreignObject>
);

const WineLogChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg font-semibold text-gray-800">Wine Log Overview</h2>
      </div>

      <div style={{ minWidth: 600, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

            <XAxis
              dataKey="name"
              interval={0}
              tick={<CustomizedAxisTick />}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, 125]}
              ticks={[0, 25, 50, 75, 100, 125]}
              tick={{ fontSize: 12, fill: "#666" }}
              tickFormatter={(val) =>
                val === 0 ? "0" : `${val}+`
              }
            />

            <Tooltip
              formatter={(value, name) =>
                [value, name === "onPremise" ? "On-Premise" : "Off-Premise"]
              }
              contentStyle={{ fontSize: "12px" }}
            />

            <Bar dataKey="onPremise" stackId="a" radius={[0, 0, 4, 4]} fill="#D4949E" />
            <Bar dataKey="offPremise" stackId="a" radius={[4, 4, 0, 0]} fill="#8B4B5C" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#8B4B5C]"></div>
          <span className="text-sm text-gray-700">On-Premise Logs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#D4949E]"></div>
          <span className="text-sm text-gray-700">Off-Premise Logs</span>
        </div>
      </div>
    </div>
  );
};

export default WineLogChart;
