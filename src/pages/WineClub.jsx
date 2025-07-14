import React, { useState, useMemo } from "react";
import Cards from "../components/Cards";
import BasicTable from "../components/BasicTable";
import DropDownButton from "../components/DropDownButton";
import ClubData from "../Data/ClubCardsData";
import CulbTableData from "../Data/CulbTableData";

const WineClub = () => {
  const [view, setView] = useState("Subscription Status");
  const [clubTier, setClubTier] = useState("Club Tier - Mixed 6");
  const [timeRange, setTimeRange] = useState("Last 7 Days");

  const columns = useMemo(
    () => [
      {
        header: "Club Name / Tier",
        accessorKey: "clubname",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <span className="text-gray-900 font-medium">
              {row.original.clubname}
            </span>
          </div>
        ),
      },
      {
        header: "Current Subscribers",
        accessorKey: "currentsubscribers",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
      {
        header: "Growth",
        accessorKey: "growth",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
      {
        header: "Conversion Rate",
        accessorKey: "conversionrate",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
      {
        header: "Most Popular Tier",
        accessorKey: "Tier",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
      {
        header: "Recent Signups",
        accessorKey: "signups",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <Cards data={ClubData} />

      <div className="">
        <div className="mt-5">
         <BasicTable
  title="Wine Club Insights"
  data={CulbTableData}
  columns={columns}
  dropdowns={
    <>
      <DropDownButton
        label={view}
        options={["By Region", "Table View"]}
        onSelect={setView}
      />
      <DropDownButton
        label={clubTier}
        options={[
          "Club Tier - Mixed 6",
          "Club Tier - Reds Only",
          "Club Tier - Whites Only",
        ]}
        onSelect={setClubTier}
      />
      <DropDownButton
        label={timeRange}
        options={["Last 7 Days", "Past 30 Days", "This Month", "This Year"]}
        onSelect={setTimeRange}
      />
    </>
  }
  search={false}
/>

        </div>
      </div>
    </div>
  );
};

export default WineClub;
