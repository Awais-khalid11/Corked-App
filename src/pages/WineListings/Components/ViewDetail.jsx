import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ListingData from "../../../Data/ListingData";
import DetailHeader from "./DetailHeader";
import { FiEdit } from "react-icons/fi";
import BasicTable from "../../../components/BasicTable";
import LogData from "../../../Data/LogData";

const ViewDetail = () => {
  const { id } = useParams();
  const wine = ListingData.find((item) => item.id === parseInt(id));

  const columns = useMemo(
    () => [
      {
        header: "Location",
        accessorKey: "locationType",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <span className="text-gray-900 font-medium">
              {row.original.value}
            </span>
          </div>
        ),
      },
      {
        header: "Value",
        accessorKey: "value2",
        cell: ({ getValue }) => (
          <span className="text-gray-700">{getValue()}</span>
        ),
      },
    ],
    []
  );

  if (!wine) {
    return <p className="text-center mt-10">Wine not found.</p>;
  }

  return (
    <div className="">
      <DetailHeader />

      <div className="bg-white rounded-xl py-5 px-4 flex flex-col md:flex-row gap-6 mt-4 mb-5">
        <div className="rounded-xl py-8 bg-[#FAFAF5] w-full md:w-1/3 flex justify-center items-center ">
          <img
            src={wine.image}
            alt={wine.wine}
            className="object-contain h-full"
          />
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-[#252525]">{wine.wine}</h2>
            <Link
              to={`/wine-detail-page`}
              className="border border-black px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50"
            >
              <FiEdit size={16} />
              Edit Details
            </Link>
          </div>

          <div className="text-[16px] text-[#252525] font-semibold space-y-3">
            <p className="flex gap-14">
              Wine Type:{" "}
              <span className="text-sm font-normal">{wine.type}</span>
            </p>
            <p className="flex gap-19">
              Vintage:{" "}
              <span className="text-sm font-normal">{wine.vintage}</span>
            </p>
            <p className="flex gap-17">
              Featured:{" "}
              <span className="text-sm font-normal">{wine.featured}</span>
            </p>
            <p className="flex gap-13">
              Availability:{" "}
              <span className="text-sm font-normal">{wine.availabilityType}</span>
            </p>
            <p className="flex gap-8 flex-wrap">
              Tasting Notes:{" "}
              <span className="text-sm font-normal bg-[#F5F5F5] px-3 py-1 rounded-full">
                🍷 Fruity
              </span>
              <span className="text-sm font-normal bg-[#F5F5F5] px-3 py-1 rounded-full">
                🍷 Fruity
              </span>
              <span className="text-sm font-normal bg-[#F5F5F5] px-3 py-1 rounded-full">
                🍷 Fruity
              </span>
            </p>
  
            <p className="flex gap-13">
              Description:{" "}
              <span className="text-sm font-normal">{wine.description}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <BasicTable
          title="Engagement & Log Metrics"
          data={LogData}
          columns={columns}
          search={false}
        />
      </div>
    </div>
  );
};

export default ViewDetail;
