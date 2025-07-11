import { useMemo, useState } from "react";
import BasicTable from "../components/BasicTable";
import data from "../data/BenchData.json";
import DropDownButton from "../components/DropDownButton";
import Button from "../components/Button";
import Add from "../../public/assets/icons/add-circle.svg";
import ListingData from "../Data/ListingData";
import { BsThreeDotsVertical } from "react-icons/bs";


const BenchMarking = () => {
  const [wine, setWine] = useState("Red Wine");
  const [availability, setAvailability] = useState("Availability");
  const [feature, setfeature] = useState("Featured");

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
              alt="wine"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-900 font-medium">
              {row.original.wine}
            </span>
          </div>
        ),
      },
      {
        header: "Wine Type",
        accessorKey: "type",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
      {
        header: "Availability",
        accessorKey: "availability",
        cell: ({ getValue }) => (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            {getValue()}
          </span>
        ),
      },
      {
        header: "Wine Status",
        accessorKey: "status",
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
      {
  header: "Action",
  accessorKey: "action", // can be anything or even omitted
  cell: () => (
  <DropDownButton
  label={<BsThreeDotsVertical />}
  options={["Edit", "Delete"]}
  onSelect={(val) => console.log(val)}
  showIcon={false}
  unstyled 
/>


  ),
}
,
    ],
    []
  );

  return (
    <div className="">
      <div className="flex  bg-white justify-between rounded-[12px] py-5 px-4 mb-5 items-center">
        <div>
          <h2 className="font-bold text-[20px] leading-[1.2] text-[rgba(37,37,37,1)]">
            Wines Listing
          </h2>
        </div>
        <div>
          <Button buttonIcon={Add} buttonText="Add new wine" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <BasicTable
          title=""
          data={ListingData}
          columns={columns}
          dropdowns={
            <>
              <DropDownButton
                label={wine}
                options={["By Region", "Table View"]}
                onSelect={setWine}
              />
              <DropDownButton
                label={availability}
                options={["Date", "Past 30 Days", "This Month", "This Year"]}
                onSelect={setAvailability}
              />
              <DropDownButton
                label={feature}
                options={["Region", "Past 30 Days", "This Month", "This Year"]}
                onSelect={setfeature}
              />
            </>
          }
          search={true}
        />
      </div>
    </div>
  );
};

export default BenchMarking;
