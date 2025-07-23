import React, { useState } from 'react';
import Headerwine from './Headerwine';
import WineProfile from './WineProfile';
import BasicTable from '../../../../components/BasicTable';
import DropDownButton from '../../../../components/DropDownButton';
import { useNavigate } from "react-router-dom";

const Winedetails = () => {
 const navigate = useNavigate(); 

  // States for dropdown filters
  const [region, setRegion] = useState("By Region");
  const [winerySize, setWinerySize] = useState("Winery Size");
  const [membershipStatus, setMembershipStatus] = useState("Membership Status");

  const columns = [
    {
      header: "Wine Name",
      accessorKey: "wineName",
      cell: ({ row }) => (
        
        <div  className="flex items-center gap-3 ">
          <img
            src={row.original.image}
            alt={row.original.wineName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{row.original.wineName}</span>
        </div>
      ),
    },
    {
      header: "Wine Type",
      accessorKey: "wineType",
    },
    {
      header: "App Visible",
      accessorKey: "appVisible",
      cell: ({ row }) => (
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
          {row.original.appVisible}
        </span>
      ),
    },
    {
      header: "Avg Rating",
      accessorKey: "avgRating",
      cell: ({ row }) =>
        row.original.avgRating ? (
          <div className="flex items-center gap-1 text-yellow-500">
            {"★".repeat(Math.floor(row.original.avgRating))}
            {"☆".repeat(5 - Math.floor(row.original.avgRating))}
            <span className="text-black ml-1">{row.original.avgRating}</span>
          </div>
        ) : (
          "-"
        ),
    },
    {
      header: "Log",
      accessorKey: "log",
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: () => (
        <div className="text-xl cursor-pointer text-gray-600">&#8942;</div>
      ),
    },
  ];

  const tableData = [
    {
      id: 1,
      wineName: "Chardonnay 2022",
      wineType: "Red",
      appVisible: "Available",
      avgRating: 4.3,
      log: 148,
      image: "/assets/images/wine1.png",
    },
    {
      id: 2,
      wineName: "Napa Cabernet Reserve",
      wineType: "White",
      appVisible: "Available",
      avgRating: 4.1,
      log: 97,
      image: "/assets/images/wine2.png",
    },
    {
      id: 3,
      wineName: "Oregon Pinot Noir",
      wineType: "Blue",
      appVisible: "Available",
      avgRating: null,
      log: 87,
      image: "/assets/images/wine3.png",
    },
    {
      id: 4,
      wineName: "Sparkling Rosé",
      wineType: "Green",
      appVisible: "Available",
      avgRating: 4.5,
      log: 12,
      image: "/assets/images/wine4.png",
    },
  ];


  const PricingColumns = [
  {
    header: "Current Plan",
    accessorKey: "currentPlan",
  },
  {
    header: "Billing Cycle",
    accessorKey: "billingCycle",
  },
  {
    header: "Trial Start Date",
    accessorKey: "trialStartDate",
  },
  {
    header: "Next Billing Date",
    accessorKey: "nextBillingDate",
  },
  {
    header: "Trial Expiry Date",
    accessorKey: "trialExpiryDate",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => (
      <button
        className="text-blue-600 underline"
        onClick={() => console.log("Clicked on:", row.original)}
      >
        View
      </button>
    ),
  },
];
const pricingData = [
  {
    currentPlan: "Pro",
    billingCycle: "Monthly",
    trialStartDate: "2025-07-01",
    nextBillingDate: "2025-08-01",
    trialExpiryDate: "2025-07-15",
    action: "View", // or you can leave this empty if it's handled by the column's cell renderer
  },
];


  return (
    <div className='flex flex-col gap-y-5'>
      <Headerwine />
      <WineProfile />
      <BasicTable
        title="Winery Listing Summary"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={['By Region', 'Napa Valley', 'Sonoma Coast', 'Other']}
              onSelect={setRegion}
            />
            <DropDownButton
              label={winerySize}
              options={['Winery Size', 'Small', 'Medium', 'Large']}
              onSelect={setWinerySize}
            />
            <DropDownButton
              label={membershipStatus}
              options={['Membership Status', 'Active', 'Inactive', 'Pending']}
              onSelect={setMembershipStatus}
            />
          </>
        }
        search={false}
        getPaginationRowModel={true}
        disableRowClick={false}
        onRowClick={true}

      />
      <BasicTable
        title="Wine Club Summary"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={['By Region', 'Napa Valley', 'Sonoma Coast', 'Other']}
              onSelect={setRegion}
            />
            
          </>
        }
        search={false}
        getPaginationRowModel={true}
        disableRowClick={true}
        onRowClick={(winery) => navigate(`/dashboard/view-detail/${winery.id}`)}
      />
      <BasicTable
        title="Pricing Plan Details"
        data={pricingData}
        columns={PricingColumns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={['By Region', 'Napa Valley', 'Sonoma Coast', 'Other']}
              onSelect={setRegion}
            />
            
          </>
        }
        search={false}
        getPaginationRowModel={true}
        disableRowClick={true}
        onRowClick={(winery) => navigate(`/dashboard/view-detail/${winery.id}`)}
      />
    </div>
  );
};

export default Winedetails;
