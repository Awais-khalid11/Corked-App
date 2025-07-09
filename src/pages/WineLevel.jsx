import React, { useMemo, useState } from "react";
import BasicTable from "../components/BasicTable";
import data from "../data/WineData.json";
import DropDownButton from "../components/DropDownButton";

const WineLevel = () => {
  const [view, setView] = useState("Vertical View");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");

  const tableData = useMemo(() => data, []);

  const columns = useMemo(
    () => [
      {
        header: "Wine Name",
        accessorKey: "wine",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img
              src={row.original.image}
              alt={row.original.wine}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-900 font-medium">{row.original.wine}</span>
          </div>
        ),
      },
      {
        header: "Logs (Onsite/Offsite)",
        accessorKey: "logs",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
      },
      {
        header: "Avg Rating",
        accessorKey: "rating",
        cell: ({ getValue }) => (
          <div className="flex items-center gap-1 font-medium">
            <span className="text-yellow-500">★★★★</span>
            <span className="text-gray-800">{getValue()}</span>
          </div>
        ),
      },
      {
        header: "Sipback reactions",
        accessorKey: "reactions",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()} reacted</span>
        ),
      },
      {
        header: "Comments",
        accessorKey: "comments",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
      },
    ],
    []
  );

  return (
    <div className="p-5 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <BasicTable
          title="Breakdown by wine"
          data={tableData}
          columns={columns}
          dropdowns={
            <>
              <DropDownButton
                label={view}
                options={["Vertical", "Table View"]}
                onSelect={setView}
              />
              <DropDownButton
                label={dateFilter}
                options={["Date", "Last 30 Days", "This Month", "This Year"]}
                onSelect={setDateFilter}
              />
            </>
          }
        />
      </div>
    </div>
  );
};

export default WineLevel;
