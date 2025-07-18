import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import DropDownButton from "../../../../components/DropDownButton";
import BasicTable from "../../../../components/BasicTable";
import { useState } from "react";
import Jackson from "../../../../../public/assets/images/airportimg.png";
import { ArrowLeft } from 'lucide-react';



const UserDetail = () => {
  const navigate = useNavigate();
  const [last30Days, setlast30Days] = useState();
  const [region, setRegion] = useState();
  const [accountStatus, setAccountStatus] = useState();
  const [membershipStatus, setMembershipStatus] = useState();
  const [timeRange, setTimeRange] = useState();

  const userData = {
    id:"11",
    name: "Abdul Rehman",
    email: "abdulrehman@gmail.com",
    phone: "‪+923344556667‬",
    location: "Multan, Pakistan",
    status: "Active",
    joinDate: "May 1, 2025",
    membership: "VIP Trial",
    favoriteVarietal: "Cabernet, Zinfandel, Syrah",
      imageUrl: Jackson,
  };

  const pricingData = [
    {
      plan: "VIP Trial",
      trialstartdate: "12/05/2025",
      trialexpirydate: "25/05/2025",
      status: "Trial Active",
      action: "⋮",
    },
  ];

  const pricingColumns = [
    {
      header: "Plan Type",
      accessorKey: "plan",
    },
    {
      header: "Trial Start Date",
      accessorKey: "trialstartdate",
    },
    {
      header: "Trial Expiry Date",
      accessorKey: "trialexpirydate",
    },
    {
      header: "Current Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            row.original.status === "Trial Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      header: "Action ",
      accessorKey: "action",
    },
  ];

  const badgeData = [
    {
      badge: {
        icon: "Badge",
        name: "Cabernet Champ",
      },
      tier: "Silver",
      unlocked: "12/05/2025",
      criteria: "Logged 10+ Cabernet Sauvignon wines",
      logs: "Log #213 (Silver Oak), Log #205 (Caymus), etc.",
    },
    {
      badge: {
        icon: "Badge2",
        name: "Rosé Rockstar",
      },
      tier: "Badge3",
      unlocked: "25/05/2025",
      criteria: "Logged 5+ Rosé wines",
      logs: "Log #172 (Whispering Angel), Log #165 (Miraval)",
    },
    {
      badge: {
        icon: "Badge4",
        name: "Chardonnay Queen",
      },
      tier: "Bronze",
      unlocked: "09/06/2025",
      criteria: "Logged 5+ Chardonnay wines",
      logs: "Log #151 (Duckhorn), Log #148 (La Crema)",
    },
    {
      badge: {
        icon: "🍀",
        name: "Weekend Warrior",
      },
      tier: "Silver",
      unlocked: "22/06/2025",
      criteria: "Logged 10+ wines on weekends",
      logs: "Log #193–#200 (Saturday/Sunday entries)",
    },
  ];

  const badgeColumns = [
    {
      header: "Badge Name",
      accessorKey: "badge",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <span>{row.original.badge.name}</span>
        </div>
      ),
    },
    {
      header: "Tier",
      accessorKey: "tier",
    },
    {
      header: "Unlocked on",
      accessorKey: "unlocked",
    },
    {
      header: "Criteria Met",
      accessorKey: "criteria",
    },
    {
      header: "Logs Contributing",
      accessorKey: "logs",
    },
  ];

  const clubColumns = [
    {
      header: "Winery Names",
      accessorKey: "names",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <div className="flex flex-col">
            <span className="font-semibold">{row.original.badge.name}</span>
            <span className="text-xs text-gray-500">
              {row.original.badge.email}
            </span>
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
      accessorKey: "joined",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];

  const clubdata = [
    {
      names: "Example Winery",
      badge: {
        icon: "🍷",
        name: "Winery A",
        email: "a@example.com",
      },
      tier: "Gold",
      joined: "2024-01-01",
      status: "Active",
    },
    {
      names: "Example Winery",
      badge: {
        icon: "🍷",
        name: "Winery A",
        email: "a@example.com",
      },
      tier: "Gold",
      joined: "2024-01-01",
      status: "Cancled",
    },
  ];

  const feedLogColumns = [
    {
      header: "Log ID",
      accessorKey: "ID",
    },
    {
      header: "Winery Names",
      accessorKey: "names",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <div className="flex flex-col">
            <span className="font-semibold">{row.original.badge.name}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Rating",
      accessorKey: "rating",
    },
    {
      header: "Reactions Received",
      accessorKey: "reactions",
    },
    {
      header: "Sipbacks / Comments",
      accessorKey: "comments",
    },
  ];

  const feedLogData = [
    {
      ID: "001",
      badge: {
        icon: "🍇",
        name: "Silver Oak Winery",
      },
      names: "Silver Oak Winery",
      date: "2025-07-14",
      rating: 4.5,
      reactions: 32,
      comments: 12,
    },
    {
      ID: "002",
      badge: {
        icon: "🍷",
        name: "Napa Valley Reserve",
      },
      names: "Napa Valley Reserve",
      date: "2025-07-15",
      rating: 4.8,
      reactions: 45,
      comments: 19,
    },
    {
      ID: "003",
      badge: {
        icon: "🏅",
        name: "Château Margaux",
      },
      names: "Château Margaux",
      date: "2025-07-16",
      rating: 5.0,
      reactions: 52,
      comments: 27,
    },
  ];

  const activityLogColumns = [
    {
      header: "Log ID",
      accessorKey: "ID",
    },
    {
      header: "Wine Names",
      accessorKey: "names",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <div className="flex flex-col">
            <span className="font-semibold">{row.original.badge.name}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Winery Names",
      accessorKey: "names",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <div className="flex flex-col">
            <span className="font-semibold">{row.original.badge.name}</span>
          </div>
        </div>
      ),
    },
    {
      header: "User Action",
      accessorKey: "user-action",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Action",
      accessorKey: "action",
    },
    {
      header: "Comment/Sipback",
      accessorKey: "comments",
    },
  ];

  const activityLogData = [
    {
      ID: "001",
      names: "Cabernet Sauvignon",
      badge: {
        icon: "🍷",
        name: "Robert Mondavi Winery",
      },
      "user-action": "Added a review",
      date: "2025-07-15",
      action: "Reviewed",
      comments: "Smooth, rich taste with hints of oak.",
    },
    {
      ID: "002",
      names: "Merlot",
      badge: {
        icon: "🍇",
        name: "Duckhorn Vineyards",
      },
      "user-action": "Earned badge",
      date: "2025-07-14",
      action: "Badge Earned",
      comments: "First-time taster badge unlocked.",
    },
    {
      ID: "003",
      names: "Pinot Noir",
      badge: {
        icon: "🏅",
        name: "La Crema",
      },
      "user-action": "Liked a post",
      date: "2025-07-13",
      action: "Liked",
      comments: "Liked John’s wine pairing recommendation.",
    },
  ];

  return (
    <div className=" space-y-6">
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          User Details
        </h1>
      </div> 
      <div className="bg-white rounded-[12px] p-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              src={userData.imageUrl}
              alt={userData.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="text-[#252525]">
              <h2 className="font-semibold text-lg mb-1">{userData.name}</h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-4 md:mt-0">
            <button className="flex gap-1 p-3 items-center text-black border border-black rounded-[12px]">
              <FaRegEdit />
              Edit Details
            </button>
            <button className="text-[#FF0000] bg-[#FFEDED] rounded-[12px] p-3">
              Suspend Account
            </button>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[10px] p-5 mt-5 text-sm space-y-3">
          <div className="flex gap-20">
            <strong>Join Date:</strong>
            <span>{userData.joinDate}</span>
          </div>
          <div className="flex gap-11.5 items-center">
            <strong>Account Status:</strong>
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              {userData.status}
            </span>
          </div>
          <div className="flex gap-16">
            <strong>Membership:</strong>
            <span>{userData.membership}</span>
          </div>
          <div className="flex gap-9.5">
            <strong>Favorite Varietal:</strong>
            <span className="text-right">{userData.favoriteVarietal}</span>
          </div>
        </div>
      </div>

      <BasicTable
        title="User Pricing Plan Details"
        data={pricingData}
        columns={pricingColumns}
        dropdowns={
          <>
            <DropDownButton
              label="Last 30 Days"
              options={["Last 30 Days", "This Month", "This Year"]}
              onSelect={() => {}}
            />
            <DropDownButton
              label="Membership"
              options={["Free", "Standard", "Premium"]}
              onSelect={() => {}}
            />
            <DropDownButton
              label="Status"
              options={["Active", "Expired", "Pending"]}
              onSelect={() => {}}
            />
          </>
        }
        search={false}
        getPaginationRowModel={false}
      />

      <BasicTable
        title="     Cork Badges Earned
"
        data={badgeData}
        columns={badgeColumns}
        dropdowns={
          <>
            <DropDownButton
              label={last30Days}
              options={["Last 30 Days", "This Month", "This Year"]}
              onSelect={setlast30Days}
            />
          </>
        }
        search={false}
        getPaginationRowModel={false}
      />

      <BasicTable
  title="      Wine Club Memberships
"
   
  data={clubdata}
  columns={clubColumns}
  dropdowns={
    <DropDownButton
      label={last30Days}
      options={["Last 30 Days", "This Month", "This Year"]}
      onSelect={setlast30Days}
    />
  }
  search={false}
  pagination={false}
  getPaginationRowModel={false}
/>

      
<BasicTable
  title="      Recent Logs Feed (My Logs)
"
    
  
  data={feedLogData}
  columns={feedLogColumns}
  dropdowns={
    <div className="flex gap-2.5 flex-wrap">
      <DropDownButton
        label={region}
        options={["Asia", "Europe", "USA"]}
        onSelect={setRegion}
      />
      <DropDownButton
        label={accountStatus}
        options={["Active", "Inactive", "Pending"]}
        onSelect={setAccountStatus}
      />
      <DropDownButton
        label={membershipStatus}
        options={["Gold", "Silver", "Bronze"]}
        onSelect={setMembershipStatus}
      />
      <DropDownButton
        label={timeRange}
        options={["Last 30 Days", "This Month", "This Year"]}
        onSelect={setTimeRange}
      />
    </div>
  }
  search={false}
  pagination={false}
  getPaginationRowModel={false}
/>


      <BasicTable
  title="User Activity Summary – Interactions on Other Logs"
  filterOptions={["Last 30 Days", "This Month", "This Year"]}
  onFilterSelect={() => {}}
  data={activityLogData}
  columns={activityLogColumns}
  dropdowns={
    <DropDownButton
        label={timeRange}
        options={["Last 30 Days", "This Month", "This Year"]}
        onSelect={setTimeRange}
      />
  }
  
  
  search={false}
  pagination={false}
  getPaginationRowModel={false}
/>

    </div>
  );
};

export default UserDetail;