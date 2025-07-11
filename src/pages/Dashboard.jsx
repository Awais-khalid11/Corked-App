import Cards from '../components/Cards';
import { useMemo, useState } from "react";
import CardsData from '../data/CardsData';
import BarChart from "../components/BarChart";
import DonutChart from '../components/DonutChart';
import BasicTable from '../components/BasicTable';
import AnalyticsData from "../data/AnalyticsData";
import DropDownButton from '../components/DropDownButton';
import ComparisonData from "../data/ComparisonData";

const Dashboard = () => {
  const [wineType, setWineType] = useState("Red Wine");
  const [duration, setDuration] = useState("Yearly");

  const [comparisonDuration, setComparisonDuration] = useState("Yearly");

  const analyticsColumns = useMemo(() => [
    {
      header: "Wine Name",
      accessorKey: "metric",
      cell: ({ row }) => (
        <span className="text-gray-900 font-medium">{row.original.metric}</span>
      ),
    },
    {
      header: "Total Reactions",
      accessorKey: "example",
      cell: ({ getValue }) => (
        <span className="text-gray-700">{getValue()}</span>
      ),
    },
    {
      header: "Total Comments",
      accessorKey: "action",
      cell: ({ getValue }) => (
        <span className="text-gray-700">{getValue()}</span>
      ),
    },
    {
      header: "Engagment Logs",
      accessorKey: "engagment",
      cell: ({ getValue }) => (
        <span className="text-gray-700">{getValue()}</span>
      ),
    },
    {
      header: "Avg Rating",
      accessorKey: "rating",
      cell: ({ getValue }) => (
        <span className="text-gray-700">{getValue()}</span>
      ),
    },
  ], []);

  const comparisonColumns = useMemo(() => [
    {
      header: "Metric",
      accessorKey: "metric",
      cell: ({ row }) => (
        <span className="text-gray-900 font-medium">{row.original.metric}</span>
      ),
    },
    {
      header: "Your Winery",
      accessorKey: "your",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "Bench Mark Avg",
      accessorKey: "similar",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "%Above/Below",
      accessorKey: "difference",
      cell: ({ getValue }) => {
        const value = getValue();
        const isPositive = value.startsWith("+");
        return (
          <span className={isPositive ? "text-green-600" : "text-red-600"}>
            {value}
          </span>
        );
      },
    },
  ], []);

  return (
    <div className='bg-[#F6F6F6] '>
      <Cards data={CardsData} />

      <div className='flex flex-col md:flex-row justify-between my-5 gap-5'>
        <div className='w-full md:w-[65%]'>
          <BarChart />
        </div>
        <div className='w-full md:w-[35%]'>
          <DonutChart />
        </div>
      </div>

      {/* ✅ Wine Analytics Table */}
      <div className='my-5 bg-white rounded-xl  border border-gray-200'>
        <BasicTable
          title="Wine Analytics Table"
          data={AnalyticsData}
          columns={analyticsColumns}
          dropdowns={
            <>
              <DropDownButton
                label={wineType}
                options={["All Types", "Red", "White", "Rosé", "Sparkling"]}
                onSelect={setWineType}
              />
              <DropDownButton
                label={duration}
                options={["Daily", "Monthly", "Quarterly", "Yearly"]}
                onSelect={setDuration}
              />
              <DropDownButton
                label="Export Table"
                options={["Export as CSV", "Export as PDF", "Export as Excel"]}
                onSelect={(option) => {
                  // Add your export logic here
                  console.log("Exporting as:", option);
                }}
                className="bg-black text-white px-4 py-1.5 rounded-md border border-black"
              />
            </>
          }
        />
      </div>

      {/* ✅ Comparison Table */}
      <div className='my-5 bg-white rounded-xl  border border-gray-200'>
        <BasicTable
          title="Your Winery vs Benchmark"
          data={ComparisonData}
          columns={comparisonColumns}
          dropdowns={
            <>
              <DropDownButton
                label={wineType}
                options={["All Types", "Red", "White", "Rosé", "Sparkling"]}
                onSelect={setWineType}
              />
              <DropDownButton
                label={comparisonDuration}
                options={["Yearly", "Monthly", "Weekly"]}
                onSelect={setComparisonDuration}
              />
              <DropDownButton
                label="Export Table"
                options={["Export as CSV", "Export as PDF", "Export as Excel"]}
                onSelect={(option) => {
                  console.log("Exporting:", option);
                }}
                className="bg-black text-white border-black hover:bg-gray-900"
              />
            </>
          }
        />
      </div>
    </div>
  );
};


export default Dashboard;