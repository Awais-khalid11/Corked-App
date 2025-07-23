import { FaFilePdf } from "react-icons/fa";
import { CiReceipt } from "react-icons/ci";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
import BasicTable from "../../../../components/BasicTable";
import DropDownButton from "../../../../components/DropDownButton";

const BillingDetails = () => {
  const navigate = useNavigate();
  const [selectedPlanOption, setSelectedPlanOption] = useState("Switch Plan");

  const logData = {
    ID: "001",
    title: "Billing Details",
  };

  const paymentHistoryData = [
    {
      invoiceId: "#INV-3421",
      date: "May 20, 2025",
      plan: "VIP Monthly",
      amount: "$4.99",
      status: "Paid",
      method: "Visa ****2345",
      receipt: "Download PDF",
    },
  ];


  const columns = useMemo(() => [
    {
      header: "Invoice ID",
      accessorKey: "id",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Plan",
      accessorKey: "plan",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Status",
      accessorKey: "statustrial",
    },
    {
      header: "Method",
      accessorKey: "method",
    },
    {
      header: "Receipt",
      accessorKey: "receipt",
    }
  ], []);


  const payementData = [{ id: "#INV-3421", date: "May 20, 2025", plan: "VIP Monthly", status: "$4.99", statustrial: "Paid", method: "Visa ****2345", receipt: "Download PDF" }]


  return (
    <div className="bg-white rounded-xl py-5 px-4">
      <div className="flex justify-between items-center mb-5 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 cursor-pointer text-[#252525] hover:text-gray-700"
        >
          <FiArrowLeft size={24} />
          <h2 className="font-bold text-[20px]  leading-[1.2]">
            {logData.title}
          </h2>
        </button>
        <div className="flex gap-2.5">
          <DropDownButton
            label={selectedPlanOption}
            options={["Switch Plan", "Upgrade Plan", "Downgrade Plan"]}
            onSelect={setSelectedPlanOption}
          />
          <button className="bg-[#E8E8E8] text-[#252525] rounded-lg px-4 py-2 flex items-center gap-2 border border-black">
            <CiReceipt />
            Cancel Subscription
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-54  p-5 text-[16px] bg-[#F6F6F6] rounded-[10px] text-[#252525]">
        <div className="flex justify-between">
          <span className="font-semibold">User Name:</span>
          <span className=" text-right  opacity-80">Jackson Graham</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Wine Club Commission Rate:</span>
          <span className=" text-right  opacity-80">4% (Premium tier)</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Current Plan:</span>
          <span className="  text-right opacity-80">VIP Trial</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Feature Access:</span>
          <span className=" text-right  opacity-80">
            Promotions, Benchmarking, Reactions
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Plan Tier:</span>
          <span className="  text-right opacity-80">VIP</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">A-La-Carte Add-Ons Used:</span>
          <span className="  text-right opacity-80">
            Explore Tab Feature (May 2025)
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Trial Start Date:</span>
          <span className=" text-right  opacity-80">June 10, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Trial Expired On:</span>
          <span className=" text-right opacity-80">May 20, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Trial Expiry Date:</span>
          <span className=" text-right opacity-80">June 24, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Last Payment Status:</span>
          <span className=" text-right  opacity-80 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Successful
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Current Status:</span>
          <span className=" opacity-80 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500 rounded-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Yes (activated Apr 20, 2025)
          </span>
        </div>
      </div>

      <div>
        <BasicTable
          title="💰 Payment History"
          data={payementData}
          columns={columns}



          search={false}
          getPaginationRowModel={true}
        />
      </div>
    </div>
  );
};


export default BillingDetails;