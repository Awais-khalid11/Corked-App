import Cards from "../components/Cards";
import { useMemo, useState } from "react";
import CardsData from "../data/CardsData";
import BarChart from "../components/BarChart";
import { AiOutlineExport } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import DonutChart from "../components/DonutChart";
import BasicTable from "../components/BasicTable";
import AnalyticsData from "../data/AnalyticsData";
import ActionsTab from "../components/ActionsTab";
import ComparisonData from "../data/ComparisonData";
import ActionTabsData from "../data/ActiontabsData";
import DropDownButton from "../components/DropDownButton";
import AdminUserManagementData from "../data/AdminUserManagementData";
import AdminWineryManagementData from "../data/AdminWineryManagmentData";
import AdminPerformanceSnapshotData from "../data/AdminPerformanceSnapshotData";

const Dashboard = () => {
  const [wineType, setWineType] = useState("Red Wine");
  const [duration, setDuration] = useState("Yearly");
  const [comparisonDuration, setComparisonDuration] = useState("Yearly");
  const { user } = useAuth();

  const analyticsColumns = useMemo(
    () => [
      { header: "Wine Name", accessorKey: "metric", cell: ({ row }) => <span className="text-gray-900 font-medium">{row.original.metric}</span> },
      { header: "Total Reactions", accessorKey: "example", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Total Comments", accessorKey: "action", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Engagement Logs", accessorKey: "engagment", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Avg Rating", accessorKey: "rating", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
    ],
    []
  );

  const comparisonColumns = useMemo(
    () => [
      { header: "Metric", accessorKey: "metric", cell: ({ row }) => <span className="text-gray-900 font-medium">{row.original.metric}</span> },
      { header: "Your Winery", accessorKey: "your", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Benchmark Avg", accessorKey: "similar", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
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
    ],
    []
  );

  const performanceColumns = useMemo(
    () => [
      { header: "Total Wine Logs", accessorKey: "total", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "On-site Logs", accessorKey: "on", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Off-site Logs", accessorKey: "off", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Value", accessorKey: "value", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Avg Logs Per Winery", accessorKey: "avg", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },
      { header: "Most Logged Wine", accessorKey: "most", cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span> },


    ],
    []
  );

  const userManagementColumns = useMemo(
    () => [
       {
        header: "User Names",
        accessorKey: "name",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.image} className="w-8 h-8 rounded-full" alt={row.original.name} />
            <div>
              <div className="font-semibold">{row.original.name}</div>
              <div className="text-gray-500 text-sm">{row.original.email}</div>
            </div>
          </div>
        ),
      },
      { header: "Logs Submitted", accessorKey: "logs" },
      { header: "Avg Rating Given", accessorKey: "rating" },
      { header: "Reactions Given", accessorKey: "reactions" },
      { header: "Sipback Sents", accessorKey: "sipbacks" },
      { header: "Membership Type", accessorKey: "membership" },
    ],
    []
  );
  const wineryManagementColumns = useMemo(
    () => [
      {
        header: "Winery Names",
        accessorKey: "name",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.image} className="w-8 h-8 rounded-full" alt={row.original.name} />
            <div>
              <div className="font-semibold">{row.original.name}</div>
              <div className="text-gray-500 text-sm">{row.original.email}</div>
            </div>
          </div>
        ),
      },
      { header: "Tier", accessorKey: "logs" },
      { header: "Total Logs", accessorKey: "rating" },
      { header: "Wine Listing", accessorKey: "reactions" },
      { header: "Sipback Sents", accessorKey: "sipbacks" },
      { header: "Club Subscribers", accessorKey: "membership" },
            { header: "Featured Add-ons", accessorKey: "membership" },
                  { header: "Status", accessorKey: "membership" },


    ],
    []
  );


  return (
    <div className="bg-[#F6F6F6]">
      <Cards data={CardsData} />

      <div className="flex flex-col md:flex-row justify-between my-5 gap-5">
        <div className="w-full md:w-[65%]">
          <BarChart />
        </div>
        <div className="w-full md:w-[35%]">
          {user?.role === "admin" ? (
            <ActionsTab action={ActionTabsData} />
          ) : (
            <DonutChart />
          )}
        </div>
      </div>

      {/* Tables by Role */}
      {user?.role === "admin" ? (
        <>
          {/* Admin Table: Performance Snapshot */}
          <div className="my-5">
            <BasicTable
              title="Performance Snapshot"
              data={AdminPerformanceSnapshotData}
              columns={performanceColumns}
              dropdowns={
                <>
                  <DropDownButton label="Region" options={["All", "North", "South"]} onSelect={() => { }} />
                  <DropDownButton label="Wine Type" options={["All", "Red", "White"]} onSelect={() => { }} />
                  <DropDownButton label="Last 30 Days" options={["7 Days", "30 Days", "90 Days"]} onSelect={() => { }} />
                </>
              }
            />
          </div>

          {/* Admin Table: User Management */}
          <div className="my-5">
            <BasicTable
              title="User Management Table"
              data={AdminUserManagementData}
              columns={userManagementColumns}
              dropdowns={
                <>
                  <DropDownButton label="Active User" options={["All", "Active", "Inactive"]} onSelect={() => { }} />
                  <DropDownButton label="Membership status" options={["All", "VIP", "Free", "Premium"]} onSelect={() => { }} />
                  <DropDownButton label="Last 30 Days" options={["7 Days", "30 Days", "90 Days"]} onSelect={() => { }} />
                </>
              }
            />
          </div>
          <div className="my-5">
            <BasicTable
              title="Winery Management Table"
              data={AdminWineryManagementData}
              columns={wineryManagementColumns}
              dropdowns={
                <>
                  <DropDownButton label="Winery Tier" options={["All", "Active", "Inactive"]} onSelect={() => { }} />
                  <DropDownButton label="Winery status" options={["All", "VIP", "Free", "Premium"]} onSelect={() => { }} />
                </>
              }
            />
          </div>
        </>
      ) : (
        <>
          {/* Winery Tables */}
          <div className="my-5">
            <BasicTable
              title="Wines Reactions & Comments Analytics"
              data={AnalyticsData}
              columns={analyticsColumns}
              dropdowns={
                <>
                  <DropDownButton label={wineType} options={["All Types", "Red", "White", "Rosé", "Sparkling"]} onSelect={setWineType} />
                  <DropDownButton label={duration} options={["Daily", "Monthly", "Quarterly", "Yearly"]} onSelect={setDuration} />
                  <DropDownButton
                    label={
                      <div className="flex items-center gap-2">
                        <AiOutlineExport />
                        <span>Export Table</span>
                      </div>
                    }
                    options={["Export as CSV", "Export as PDF", "Export as Excel"]}
                    onSelect={(option) => console.log("Exporting:", option)}
                    className="bg-black text-white rounded-[12px] py-[9px] px-3 gap-2"
                  />
                </>
              }
            />
          </div>

          <div className="my-5">
            <BasicTable
              title="Benchmark Analytics"
              data={ComparisonData}
              columns={comparisonColumns}
              dropdowns={
                <>
                  <DropDownButton label={wineType} options={["All Types", "Red", "White", "Rosé", "Sparkling"]} onSelect={setWineType} />
                  <DropDownButton label={comparisonDuration} options={["Yearly", "Monthly", "Weekly"]} onSelect={setComparisonDuration} />
                  <DropDownButton
                    label={
                      <div className="flex items-center gap-2">
                        <AiOutlineExport />
                        <span>Export Table</span>
                      </div>
                    }
                    options={["Export as CSV", "Export as PDF", "Export as Excel"]}
                    onSelect={(option) => console.log("Exporting:", option)}
                    className="bg-black text-white rounded-[12px] py-[9px] px-3 gap-2"
                  />
                </>
              }
            />
          </div>
        </>
      )}
    </div>
  );
};


export default Dashboard;