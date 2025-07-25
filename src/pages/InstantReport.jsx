import React, { useMemo, useState } from "react";
import DropDownButton from "../components/DropDownButton";
import WineLogChart from "../components/WineLogChart";
import LineChart from "../components/LineChart";
import BasicTable from "../components/BasicTable";

const InstantReport = () => {
  const [wineClubDateFilter, setWineClubDateFilter] = useState("Last 30 Days");
  const [benchmarkDateFilter, setBenchmarkDateFilter] = useState("Last 30 Days");
  const [topWineDataFilter, setTopWineDataFilter] = useState("Last 30 Days");

  const wineClubData = useMemo(() => [
    {
      tierName: "Mixed 6 Quarterly",
      subscribers: 141,
      growth: "+12%",
      conversionRate: "4.2%"
    }
  ], []);

  const benchmarkData = useMemo(() => [
    {
      tierName: "Avg Rating",
      you: "4.3",
      similarWineries: "4.1",
      difference: "+0.2"
    },
    {
      tierName: "Logs per Visitor",
      you: "2.1",
      similarWineries: "1.6",
      difference: "+0.5"
    }
  ], []);

  const topWineData = useMemo(() => [
    {
      winName: "Chardonnay 2022",
      logs: "32",
      reactions: "11",
      comments: "4",
      avgRating: "4.1",
    }
  ], []);

  const wineClubColumns = useMemo(() => [
    {
      header: "Tier Name",
      accessorKey: "tierName",
      cell: ({ getValue }) => <span className="text-gray-900 font-medium">{getValue()}</span>,
    },
    {
      header: "Subscribers",
      accessorKey: "subscribers",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "Growth %",
      accessorKey: "growth",
      cell: ({ getValue }) => <span className="text-green-600 font-medium">{getValue()}</span>,
    },
    {
      header: "Conversion Rate",
      accessorKey: "conversionRate",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
  ], []);

  const benchmarkColumns = useMemo(() => [
    {
      header: "Tier Name",
      accessorKey: "tierName",
      cell: ({ getValue }) => <span className="text-gray-900 font-medium">{getValue()}</span>,
    },
    {
      header: "You",
      accessorKey: "you",
      cell: ({ getValue }) => <span className="text-gray-700 font-medium">{getValue()}</span>,
    },
    {
      header: "Similar Wineries",
      accessorKey: "similarWineries",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "Difference",
      accessorKey: "difference",
      cell: ({ getValue }) => <span className="text-green-600 font-medium">{getValue()}</span>,
    },
  ], []);

  const topWineColumns = useMemo(() => [
    {
      header: "Wine Name",
      accessorKey: "winName", // fixed to match your data key
      cell: ({ getValue }) => <span className="text-gray-900 font-medium">{getValue()}</span>,
    },
    {
      header: "Logs",
      accessorKey: "logs",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "Reactions",
      accessorKey: "reactions",
      cell: ({ getValue }) => <span className="text-green-600 font-medium">{getValue()}</span>,
    },
    {
      header: "Comments",
      accessorKey: "comments",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
    {
      header: "Avg Rating",
      accessorKey: "avgRating",
      cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
    },
  ], []);

  return (

    <div className=" bg-[#F6F6F6] min-h-screen">


      {/* Header */}
      <div className="flex justify-between items-center p-5 rounded-[12px] bg-white mb-6">
  <h1 className="text-lg font-semibold text-black">
    Instant Report Generator
  </h1>

  <DropDownButton
    label="Export Table"
    options={["Export as CSV", "Export as PDF", "Export as Excel"]}
    onSelect={(option) => console.log("Export:", option)}
    className="flex items-center justify-center px-[13px] py-[8px] h-[42px] gap-[5px] rounded-[12px] bg-[#252525] text-white text-sm font-medium"
  />
</div>


      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <WineLogChart />
        <LineChart />
      </div>

      {/* Tables stacked vertically */}
      <div className="flex flex-col gap-6">
        {/* Wine Club Stats Table */}
        <div className="bg-white rounded-xl  border border-gray-200">
          <BasicTable
            title="Wine Club Stats Table"
            data={wineClubData}
            columns={wineClubColumns}
            dropdowns={
              <DropDownButton
                label={wineClubDateFilter}
                options={["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"]}
                onSelect={setWineClubDateFilter}
              />
            }
          />
        </div>

        {/* Benchmark Summary Table */}
        <div className="bg-white rounded-xl  border border-gray-200">
          <BasicTable
            title="Benchmark Summary Table"
            data={benchmarkData}
            columns={benchmarkColumns}
            dropdowns={
              <DropDownButton
                label={benchmarkDateFilter}
                options={["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"]}
                onSelect={setBenchmarkDateFilter}
              />
            }
          />
        </div>

        {/* Top Wine Data Table */}
        <div className="bg-white rounded-xl  border border-gray-200">
          <BasicTable
            title="Top Wines by Engagement table"
            data={topWineData}
            columns={topWineColumns}
            dropdowns={
              <DropDownButton
                label={topWineDataFilter}
                options={["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"]}
                onSelect={setTopWineDataFilter}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InstantReport;
