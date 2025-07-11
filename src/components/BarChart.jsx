import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import DropDownButton from './DropDownButton';

const BarChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Yearly');

  const options = {
    chart: {
      id: 'top-logged-wine',
      toolbar: { show: false },
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
      ],
      labels: {
        style: { fontSize: '14px' },
      },
    },
    yaxis: {
      min: 0,
      max: 125,
      tickAmount: 5,
      labels: {
        formatter: function (val) {
          if (val === 0) return '';
          if (val === 25) return '25+';
          if (val === 50) return '50+';
          if (val === 75) return '75+';
          if (val === 100) return '100+';
          return '';
        },
        style: {
          fontSize: '12px',
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: 'end',
        horizontal: false,
        columnWidth: '100%',
        distributed: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      formatter: function (val) {
        if (val === 0) return '';
        return `${val} logs`;
      },
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#000'],
      },
    },
    colors: [
      '#000000',
      '#8F4A57',
      '#FFFFFF',
      '#B2642A',
      '#B2642A',
      '#BD7482',
      '#E1A161',
      '#E1A161',
      '#E6A652',
      '#000000',
      '#FFFFFF',
      '#000000',
    ],
    legend: { show: false },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => (val === 0 ? '' : `${val} logs`),
      },
    },
  };

  const series = [
    {
      name: 'Logged Wines',
      data: [0, 95, 0, 100, 0, 60, 0, 67, 0, 45, 0, 0],
    },
  ];

  const wineLegend = [
    { color: '#B2642A', label: 'Cabernet Franc 2020' },
    { color: '#8F4A57', label: 'Rosé All Day' },
    { color: '#BD7482', label: 'Rosé All Day' },
    { color: '#E1A161', label: 'Chardonnay' },
    { color: '#1E1E1E', label: 'Pinot Noir' },
  ];

  return (
    <div className='bg-white py-5 px-4 rounded-[12px] w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
        <h2 className='text-lg font-semibold'>Top Logged Wine</h2>
        <DropDownButton
          options={['Yearly', 'Monthly', 'Weekly']}
          label={selectedTimeRange}
          onSelect={(value) => setSelectedTimeRange(value)}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <Chart options={options} series={series} type="bar" height={285} width="100%" />
      </div>

      <div className="flex justify-center gap-6 mt-[-5px] flex-wrap">
        {wineLegend.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span className="text-sm text-black">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
