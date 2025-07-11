import React from 'react';
import DonutChart from '../components/DonutChart';
import BarChart from "../components/BarChart";
import Cards from '../components/Cards'; 
import AnalyticsTable from '../components/AnalyticsTable';
import ComparisonTable from '../components/ComparisitionTable';
import CardsData from '../data/CardsData';

const Dashboard = () => {
  return (
    <div className='bg-[#F6F6F6]  sm: md:'>
      <Cards data={CardsData} /> 
      
      <div className='flex flex-col md:flex-row justify-between my-5 gap-5'>
        <div className='w-full md:w-[65%]'>
          <BarChart />
        </div>
        <div className='w-full md:w-[35%]'>
          <DonutChart />
        </div>
      </div>
      <div>
          <AnalyticsTable />
      </div>
      <div className='my-5'>
        <ComparisonTable />
      </div>
    </div>
  );
};

export default Dashboard;

