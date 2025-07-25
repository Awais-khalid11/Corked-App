import { useMemo, useState } from "react";
import BasicTable from "../components/BasicTable";
import data from "../data/BenchData";
import DropDownButton from "../components/DropDownButton";

const BenchMarking = () => {
  const [view, setView] = useState("Vertical View");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");

  const tableData = useMemo(() => data, []);

  const renderStars = (rating) => {
    const num = parseFloat(rating);
    const filled = Math.floor(num);
    const half = num % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < filled; i++) stars.push("★");
    if (half) stars.push("☆");

    return (
      <span className="text-yellow-500">
        {stars.join("")} <span className="text-gray-700 ml-1">{num}</span>
      </span>
    );
  };

  const columns = useMemo(
    () => [
      {
        header: "Metric",
        accessorKey: "metric",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <span className="text-gray-900 font-medium">
              {row.original.metric}
            </span>
          </div>
        ),
      },
      {
        header: "Your Winery",
        accessorKey: "your",
        cell: ({ row, getValue }) => {
          return row.index === 0 ? renderStars("4.3") : (
            <span className="text-gray-700">{getValue()}</span>
          );
        },
      },
      {
        header: "Similar Wineries",
        accessorKey: "similar",
        cell: ({ row, getValue }) => {
          return row.index === 0 ? renderStars("4.1") : (
            <span className="text-gray-700">{getValue()}</span>
          );
        },
      },
      {
        header: "Difference",
        accessorKey: "difference",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <BasicTable
        title="Benchmark Analytics (Premium/Enterprise Feature)"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={view}
              options={["By Region", "Table View"]}
              onSelect={setView}
            />
            <DropDownButton
              label={dateFilter}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setDateFilter}
            />
            <DropDownButton
              label={dateFilter}
              options={["Region", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setDateFilter}
            />
          </>
        }
        search={false}
      />
    </div>
  );
};

export default BenchMarking;
