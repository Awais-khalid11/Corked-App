import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import data from "../../data/BenchData";
import DropDownButton from "../../components/DropDownButton";
import Button from "../../components/Button";
import Add from "../../../public/assets/icons/add-circle.svg";
import ListingData from "../../Data/ListingData";
import { BsThreeDotsVertical } from "react-icons/bs";

const WineListing = () => {
  const [wine, setWine] = useState("Red Wine"); 
  const [availability, setAvailability] = useState("Availability");
  const [feature, setfeature] = useState("Featured");
  const tableData = useMemo(() => data, []);
  const navigate = useNavigate(); 

  

  const columns = useMemo(
    () => [
      {
        header: "Wine Name",
        accessorKey: "wine",
        cell: ({ row }) => (
          <div  
            onClick={() => navigate(`/dashboard/view-detail/${row.original.id}`)}
            className="flex items-center gap-3 hover:underline cursor-pointer"
          >
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
          <div className="flex items-center gap-1 font-medium">
            <span className="text-yellow-500">★★★★</span>
            <span className="text-gray-800">{getValue()}</span>
          </div>
        ),
      },
     {
  header: "Action",
  accessorKey: "action",
  cell: ({ row }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="p-2 rounded hover:bg-gray-100"
        >
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            <div className="py-1">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
               
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add your delete confirmation logic here
                  if (confirm('Are you sure you want to delete this item?')) {
                    // Call your delete function
                    console.log('Deleting:', row.original.id);
                  }
                  setIsOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
}
    ],
    [navigate]
  );

  return (
    <div className="">
      <div className="flex flex-col md:flex-row bg-white justify-between rounded-[12px] py-[14px] px-4 mb-5 gap-3 md:gap-0 items-start md:items-center">
        <div>
          <h2 className="font-bold text-[20px] leading-[1.2] text-[rgba(37,37,37,1)]">
            Wines Listing
          </h2>
        </div>
        <div>
          <button
            onClick={() => navigate("/dashboard/wine-detail-page")}
            className="focus:outline-none"
          >
            <Button buttonIcon={Add} buttonText="Add new wine" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <BasicTable
          title=""
          data={ListingData}
          columns={columns}
          dropdowns={
            <div className="flex flex-wrap gap-2 relative z-50">
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
            </div>
          }
          search={true}
          disableRowClick={true} 
        />
      </div>
    </div>
  );
};

export default WineListing;