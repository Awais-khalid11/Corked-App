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
  const [last30Days, setLast30Days] = useState("Last 30 Days");
  
  // Original columns for Winery Listing
  const columns = [
    {
      header: "Wine Name",
      accessorKey: "wineName",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
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

  // Original Winery Listing data
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

  // Updated Wine Club Summary columns with image
  const wineClubColumns = [
    {
      header: "Club Name",
      accessorKey: "clubName",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <img
            src={row.original.image}
            alt={row.original.clubName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{row.original.clubName}</span>
            <span className="text-sm text-gray-500">{row.original.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Tier",
      accessorKey: "tier",
    },
    {
      header: "Joined On",
      accessorKey: "joinedOn",
    },
    {
      header: "Status",
      accessorKey: "status",
     
    },
  ];

  // Updated Wine Club Summary data with images
  const wineClubData = [
    {
      id: 1,
      clubName: "Golden Wine Estates",
      tier: "Mixed 4 - Quarterly",
      joinedOn: "12/05/2025",
      status: "Active",
      image: "/assets/images/wine1.png", // Added image path
    },
    {
      id: 2,
      clubName: "Blue Hills Winery",
      tier: "Red Loews - Monthly",
      joinedOn: "25/05/2025",
      status: "Cancelled",
      image: "/assets/images/wine2.png", // Added image path
    },
  ];

  // Pricing Plan columns
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
    
    },
  ];

  // Pricing Plan data
  const pricingData = [
    {
      currentPlan: "Pro",
      billingCycle: "Monthly",
      trialStartDate: "2025-07-01",
      nextBillingDate: "2025-08-01",
      trialExpiryDate: "2025-07-15",
      action:"⋮",
    },
  ];

  return (
    <div className='flex flex-col gap-y-5'>
      <Headerwine />
      <WineProfile />
      
      {/* Winery Listing Table */}
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
      
      {/* Wine Club Summary Table with Images */}
      <BasicTable
        title="Wine Club Summary"
        data={wineClubData}
        columns={wineClubColumns}
        dropdowns={
          <>
            <DropDownButton
              label={last30Days}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setLast30Days}
            />
          </>
        }
        search={false}
        getPaginationRowModel={true}
        disableRowClick={true}
        onRowClick={(club) => navigate(`/dashboard/view-detail/${club.id}`)}
      />
      
      {/* Pricing Plan Table */}
      <BasicTable
        title="Pricing Plan Details"
        data={pricingData}
        columns={PricingColumns}
        dropdowns={
          <>
            <DropDownButton
              label={last30Days}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
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