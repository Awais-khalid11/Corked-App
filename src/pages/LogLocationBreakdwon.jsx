import { useState, useMemo } from "react";
import DropDownButton from "../components/DropDownButton";
import BasicTable from "../components/BasicTable";
import LocationData from "../Data/LocationData";

const viewOptions = ["Offsite", "Onsite"];

const LogLocationBreakdown = () => {
  const [view, setView] = useState("Offsite");

  const columns = useMemo(() => [
    {
      header: "Location",
      accessorKey: "locationType",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <img
            src={row.original.image}
            alt={row.original.locationType}
              className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-900 font-medium">{row.original.locationType}</span>
        </div>
      ),
    },
    {
      header: "Logs",
      accessorKey: "logs",
      cell: ({ getValue }) => (
        <span className="text-gray-700">{getValue()}</span>
      ),
    },
  ], []);

  return (
    <div>
            <div className="bg-white rounded-xl  border border-gray-200">

      <BasicTable
        title="Log Location Breakdown"
        data={LocationData}
        columns={columns}
        dropdowns={
          <DropDownButton
            label={view}
            options={viewOptions}
            onSelect={setView}
          />
        }
        search={true}
      />
    </div>
    </div>
  );
};

export default LogLocationBreakdown;
