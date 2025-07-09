import React from 'react';
import DonutChart from '../components/DonutChart';
import BarChart from "../components/BarChart";
import Cards from '../components/Cards'; 
import CardsData from '../components/CardsData';
import AnalyticsTable from '../components/AnalyticsTable';
import ComparisonTable from '../components/ComparisitionTable';

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

