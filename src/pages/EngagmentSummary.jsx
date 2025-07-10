import { useMemo, useState } from "react";
import BasicTable from "../components/BasicTable";
import data from "../data/EngagmentData";
import DropDownButton from "../components/DropDownButton";

const EngagmentSummary = () => {
  const [view, setView] = useState("Vertical View");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");

  const tableData = useMemo(() => data, []);

  const columns = useMemo(
    () => [
      {
        header: "Metric",
        accessorKey: "metric",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <span className="text-gray-900 font-medium">{row.original.metric}</span>
          </div>
        ),
      },
      {
        header: "Example",
        accessorKey: "example",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
      },
      {
        header: "Action",
        accessorKey: "action",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>,
      },
    ],
    []
  );

  return (
    <div className="p-5 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <BasicTable
          title="Engagment Summary"
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
            </>
          }
          search={true}
        />
      </div>
    </div>
  );
};

export default EngagmentSummary;
