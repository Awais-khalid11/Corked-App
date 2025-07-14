import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from 'recharts';

const WineLogChart = () => {

  // Data that matches the image
  const data = [
    { name: 'Cabernet 2020', onPremise: 55, offPremise: 20, total: 75 },
    { name: 'Rosé All Day', onPremise: 50, offPremise:10, total: 55},
    { name: 'Chardonnay 2022', onPremise: 55, offPremise: 15, total: 70 },
    { name: 'Pinot Noir', onPremise: 45, offPremise: 15, total: 60 },
    { name: 'Sparkling Brut', onPremise: 10, offPremise: 25, total: 35 }
  ];

  // Custom label component for the selected item
  const CustomLabel = (props) => {
    const { x, y, width, height, value, index } = props;
    // Show label only for the second bar (Rosé All Day)
    if (index === 1) {
      return (
        <g>
          <rect 
            x={x + width/2 - 30} 
            y={y - 35} 
            width={60} 
            height={20} 
            fill="#4A90E2" 
            rx={3}
          />
          <text 
            x={x + width/2} 
            y={y - 22} 
            textAnchor="middle" 
            fill="white" 
            fontSize="10"
            fontWeight="bold"
          >
            Group 1171276067
          </text>
        </g>
      );
    }
    return null;
  };


  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Wine Log Overview</h2>
        
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              interval={0}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              domain={[0, 125]}
              ticks={[0, 25, 50, 75, 100, 125]}
              tickFormatter={(value) => {
                if (value === 0) return '0';
                if (value === 25) return '25+';
                if (value === 50) return '50+';
                if (value === 75) return '75+';
                if (value === 100) return '100+';
                return '';
              }}
            />
            
            {/* On-Premise bars */}
            <Bar 
              dataKey="onPremise" 
              stackId="a"
              radius={[0, 0, 4, 4]}
              fill="#D4949E"
            >
              <LabelList content={<CustomLabel />} />
            </Bar>
            
            {/* Off-Premise bars */}
            <Bar 
              dataKey="offPremise" 
              stackId="a"
              radius={[4, 4, 0, 0]}
              fill="#8B4B5C"
            />
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