import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTable from '../../../components/BasicTable';
import DropDownButton from '../../../components/DropDownButton';
import Button from '../../../components/Button';
import Jackson from '../../../../public/assets/icons/actab3.svg'; // Assuming Jackson is a generic placeholder icon

const WineryManagement = () => {
  const [region, setRegion] = useState('Region');
  // Updated state variable name to match the new label
  const [winerySize, setWinerySize] = useState('Winery Size'); 
  // Updated state variable name to match the new label
  const [membershipStatus, setMembershipStatus] = useState('Membership Status'); 

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Winery Name',
        accessorKey: 'wineryName',
        cell: ({ row }) => {
          const winery = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="flex items-center gap-3 hover:underline cursor-pointer"
            >
              <img
                src={winery.imageUrl}
                alt={winery.wineryName}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col text-[#252525]">
                <span className="font-semibold text-sm mb-[4px]">
                  {winery.wineryName}
                </span>
                <span className="text-[12px] opacity-80">{winery.email}</span>
              </div>
            </div>
          );
        },
      },
      {
        header: 'Date',
        accessorKey: 'lastUpdated',
        cell: ({ row }) => {
          const winery = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue('lastUpdated')}
            </div>
          );
        },
      },
      {
        header: 'Tier',
        accessorKey: 'membershipTier',
        cell: ({ row }) => {
          const winery = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue('membershipTier')}
            </div>
          );
        },
      },
      {
        header: 'Wine Listings',
        accessorKey: 'winesInStock',
        cell: ({ row }) => {
          const winery = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue('winesInStock')}
            </div>
          );
        },
      },
      {
        header: 'Regions Covered',
        accessorKey: 'regionsCovered',
        cell: ({ row }) => {
          const winery = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue('regionsCovered')}
            </div>
          );
        },
      },
      {
        header: 'Account Status',
        accessorKey: 'wineryStatus',
        cell: ({ row }) => {
          const winery = row.original;
          const status = row.getValue('wineryStatus').toLowerCase();
          let bgColor = 'bg-gray-400';

          if (status === 'active') bgColor = 'bg-green-500';
          else if (status === 'inactive') bgColor = 'bg-red-500';
          else if (status === 'pending') bgColor = 'bg-yellow-500';

          return (
            <div
              onClick={() => navigate(`/dashboard/winery-detail/${winery.id}`)}
              className="cursor-pointer inline-block"
            >
              <span
                className={`px-3 py-1 rounded-full text-white text-sm font-medium ${bgColor}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          );
        },
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: ({ row }) => {
          return <div>{row.getValue('action')}</div>;
        },
      },
    ],
    [navigate]
  );

  const tableData = [
    {
      id: 'W101',
      wineryName: 'Valley Vineyards',
      email: 'contact@valleyvineyards.com',
      imageUrl: Jackson,
      winesInStock: 250,
      regionsCovered: 'Napa Valley',
      membershipTier: 'Premium',
      lastUpdated: '2025-07-20',
      wineryStatus: 'Active',
      action: '⋮',
    },
    {
      id: 'W102',
      wineryName: 'Coastal Cellars',
      email: 'info@coastalcellars.com',
      imageUrl: Jackson,
      winesInStock: 180,
      regionsCovered: 'Sonoma Coast',
      membershipTier: 'Standard',
      lastUpdated: '2025-07-18',
      wineryStatus: 'Active',
      action: '⋮',
    },
    {
      id: 'W103',
      wineryName: 'Mountain Merlots',
      email: 'support@mountainmerlots.com',
      imageUrl: Jackson,
      winesInStock: 320,
      regionsCovered: 'Columbia Valley',
      membershipTier: 'Gold',
      lastUpdated: '2025-07-22',
      wineryStatus: 'Active',
      action: '⋮',
    },
    {
      id: 'W104',
      wineryName: 'Desert Delights',
      email: 'hello@desertdelights.com',
      imageUrl: Jackson,
      winesInStock: 90,
      regionsCovered: 'Arizona',
      membershipTier: 'Trial (ends in 7 days)',
      lastUpdated: '2025-07-15',
      wineryStatus: 'Active',
      action: '⋮',
    },
    {
      id: 'W105',
      wineryName: 'Riverbend Wines',
      email: 'sales@riverbendwines.com',
      imageUrl: Jackson,
      winesInStock: 210,
      regionsCovered: 'Willamette Valley',
      membershipTier: 'Premium',
      lastUpdated: '2025-07-21',
      wineryStatus: 'Active',
      action: '⋮',
    },
    {
      id: 'W106',
      wineryName: 'Sunrise Estates',
      email: 'contact@sunriseestates.com',
      imageUrl: Jackson,
      winesInStock: 150,
      regionsCovered: 'Finger Lakes',
      membershipTier: 'Standard',
      lastUpdated: '2025-07-19',
      wineryStatus: 'Inactive',
      action: '⋮',
    },
    {
      id: 'W107',
      wineryName: 'Canyon Crest',
      email: 'info@canyoncrest.com',
      imageUrl: Jackson,
      winesInStock: 120,
      regionsCovered: 'Texas Hill Country',
      membershipTier: 'Trial (ends in 3 days)',
      lastUpdated: '2025-07-16',
      wineryStatus: 'Pending',
      action: '⋮',
    },
    {
      id: 'W108',
      wineryName: 'Oak Ridge Winery',
      email: 'connect@oakridgewinery.com',
      imageUrl: Jackson,
      winesInStock: 280,
      regionsCovered: 'Mendocino County',
      membershipTier: 'Gold',
      lastUpdated: '2025-07-23',
      wineryStatus: 'Active',
      action: '⋮',
    },
  ];

  return (
    <div>
      <BasicTable
        title="Winery Listing"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={['By Region', 'Napa Valley', 'Sonoma Coast', 'Other']}
              onSelect={setRegion}
            />
            {/* Updated label to use 'winerySize' state variable */}
            <DropDownButton
              label={winerySize} 
              options={['Winery Size', 'Small', 'Medium', 'Large']}
              onSelect={setWinerySize} // Updated setter function
            />
            {/* Updated label to use 'membershipStatus' state variable */}
            <DropDownButton
              label={membershipStatus} 
              options={['Membership Status', 'Active', 'Inactive', 'Pending']}
              onSelect={setMembershipStatus} // Updated setter function
            />
            
            <div onClick={() => navigate('/dashboard/winery-profile-detail')}>
              <Button
                buttonIcon="/assets/icons/add-circle.svg"
                buttonText="Add New Winery"
              />
            </div>
          </>
        }
        search={false}
        getPaginationRowModel={true}
        disableRowClick={true}
        onRowClick={(winery) => navigate(`/dashboard/winery-detail/${winery.id}`)}
      />
    </div>
  );
};

export default WineryManagement;