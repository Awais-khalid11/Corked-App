import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../../components/BasicTable";
import DropDownButton from "../../../../components/DropDownButton";

const UserDetails = () => {
  const navigate = useNavigate();

  const [last30Days, setLast30Days] = useState("Last 30 Days");
  const [region, setRegion] = useState("Region");
  const [accountStatus, setAccountStatus] = useState("Account Status");
  const [membershipStatus, setMembershipStatus] = useState("Membership");
  const [timeRange, setTimeRange] = useState("Time Range");

  const userData = {
    id: "11",
    name: "Mathew",
    email: "mathew@gmail.com",
    phone: "‪+923344556667‬",
    location: "Multan, Pakistan",
    status: "Active",
    joinDate: "May 1, 2025",
    membership: "VIP Trial",
    favoriteVarietal: "Cabernet, Zinfandel, Syrah",
    imageUrl: "/assets/images/restaurant.png",
  };

  const pricingData = [
    {
      id: "price_1",
      plan: "VIP Trial",
      trialstartdate: "12/05/2025",
      trialexpirydate: "25/05/2025",
      status: "Trial Active",
      action: "⋮",
    },
    {
      id: "price_2",
      plan: "VIP Trial",
      trialstartdate: "12/05/2025",
      trialexpirydate: "25/05/2025",
      status: "Trial Active",
      action: "⋮",
    },
  ];

  // FIXED: Simplified pricing columns - removed individual click handlers since BasicTable handles row clicks
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
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/dashboard/billing-details/${row.original.id}`);
                      setIsOpen(false);
                    }}
                  >
                    View Billing Details
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  const badgeData = [
    {
      id: "21",
      badge: { icon: "🏆", name: "Cabernet Champ" },
      tier: "Silver",
      unlocked: "12/05/2025",
      criteria: "Logged 10+ Cabernet Sauvignon wines",
      logs: "Log #213 (Silver Oak), Log #205 (Caymus), etc.",
    },
    {
      id: "22",
      badge: { icon: "🌹", name: "Rosé Rockstar" },
      tier: "Bronze",
      unlocked: "25/05/2025",
      criteria: "Logged 5+ Rosé wines",
      logs: "Log #172 (Whispering Angel), Log #165 (Miraval)",
    },
  ];

  // FIXED: Simplified badge columns
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
            <span className="text-xs text-gray-500">{row.original.badge.email}</span>
          </div>
        </div>
      ),
    },
    { header: "Tier", accessorKey: "tier" },
    { header: "Joined On", accessorKey: "joined" },
    { header: "Status", accessorKey: "status" },
  ];
  
  const clubdata = [
    {
      id: "club_1",
      names: "Example Winery",
      badge: { icon: "🍷", name: "Winery A", email: "a@example.com" },
      tier: "Gold",
      joined: "2024-01-01",
      status: "Active",
    },
    {
      id: "club_2",
      names: "Example Winery",
      badge: { icon: "🍷", name: "Winery A", email: "a@example.com" },
      tier: "Gold",
      joined: "2024-01-01",
      status: "Cancelled",
    },
  ];

  // FIXED: Simplified feed log columns - removed individual click handlers
  const feedLogColumns = [
    {
      header: "Log ID",
      accessorKey: "id",
    },
    {
      header: "Winery Names",
      accessorKey: "names",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <span className="font-semibold">{row.original.badge.name}</span>
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
      id: "001", 
      badge: { icon: "🍇", name: "Silver Oak Winery" }, 
      names: "Silver Oak Winery", 
      date: "2025-07-14", 
      rating: 4.5, 
      reactions: 32, 
      comments: 12 
    },
    { 
      id: "002", 
      badge: { icon: "🍷", name: "Napa Valley Reserve" }, 
      names: "Napa Valley Reserve", 
      date: "2025-07-15", 
      rating: 4.8, 
      reactions: 45, 
      comments: 19 
    },
    { 
      id: "003", 
      badge: { icon: "🏅", name: "Château Margaux" }, 
      names: "Château Margaux", 
      date: "2025-07-16", 
      rating: 5.0, 
      reactions: 52, 
      comments: 27 
    },
  ];

  // FIXED: Simplified activity log columns
  const activityLogColumns = [
    {
      header: "Log ID",
      accessorKey: "id",
    },
    {
      header: "Wine Names",
      accessorKey: "names",
    },
    {
      header: "Winery Names",
      accessorKey: "winery",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span className="text-xl">{row.original.badge.icon}</span>
          <span className="font-semibold">{row.original.badge.name}</span>
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
      id: "100", 
      names: "Cabernet Sauvignon", 
      badge: { icon: "🍷", name: "Robert Mondavi Winery" }, 
      "user-action": "Added a review", 
      date: "2025-07-15", 
      action: "Reviewed", 
      comments: "Smooth, rich taste with hints of oak." 
    },
    { 
      id: "200", 
      names: "Merlot", 
      badge: { icon: "🍇", name: "Duckhorn Vineyards" }, 
      "user-action": "Earned badge", 
      date: "2025-07-14", 
      action: "Badge Earned", 
      comments: "First-time taster badge unlocked." 
    },
    { 
      id: "300", 
      names: "Pinot Noir", 
      badge: { icon: "🏅", name: "La Crema" }, 
      "user-action": "Liked a post", 
      date: "2025-07-13", 
      action: "Liked", 
      comments: "Liked John's wine pairing recommendation." 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[12px] p-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4 items-center">
            <img src={userData.imageUrl} alt={userData.name} className="w-20 h-20 rounded-full object-cover"/>
            <div className="text-[#252525]">
              <h2 className="font-semibold text-lg mb-1">{userData.name}</h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-4 md:mt-0">

            <button onClick={() => navigate(`/dashboard/user-profile-detail`) } className="flex gap-1 p-3 items-center text-black border border-black rounded-[12px]">
              <FaRegEdit />
              Edit Details
            </button>
            <button className="text-[#FF0000] bg-[#FFEDED] rounded-[12px] p-3">
              Suspend Account
            </button>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[10px] p-5 mt-5 text-sm space-y-3">
          <div className="flex gap-20"><strong>Join Date:</strong><span>{userData.joinDate}</span></div>
          <div className="flex gap-12 items-center"><strong>Account Status:</strong><span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">{userData.status}</span></div>
          <div className="flex gap-16"><strong>Membership:</strong><span>{userData.membership}</span></div>
          <div className="flex gap-10"><strong>Favorite Varietal:</strong><span>{userData.favoriteVarietal}</span></div>
        </div>
      </div>

      <BasicTable
        title="User Pricing Plan Details"
        data={pricingData}
        columns={pricingColumns}
        tableType="billing"
        dropdowns={
          <>
            <DropDownButton label="Last 30 Days" options={["Last 30 Days", "This Month", "This Year"]} onSelect={() => { }} />
            <DropDownButton label="Membership" options={["Free", "Standard", "Premium"]} onSelect={() => { }} />
            <DropDownButton label="Status" options={["Active", "Expired", "Pending"]} onSelect={() => { }} />
          </>
        }
        search={false}
        getPaginationRowModel={false}
      />
      
      <BasicTable
        title="Cork Badges Earned"
        data={badgeData}
        columns={badgeColumns}
        tableType="badge"
        dropdowns={<DropDownButton label={last30Days} options={["Last 30 Days", "This Month", "This Year"]} onSelect={setLast30Days} />}
        search={false}
        getPaginationRowModel={false}
      />
      
      <BasicTable
        title="Wine Club Memberships"
        data={clubdata}
        columns={clubColumns}
        dropdowns={<DropDownButton label={last30Days} options={["Last 30 Days", "This Month", "This Year"]} onSelect={setLast30Days} />}
        search={false}
        pagination={false}
        getPaginationRowModel={false}
      />
      
      <BasicTable
        title="Recent Logs Feed (My Logs)"
        data={feedLogData}
        columns={feedLogColumns}
        tableType="log"
        dropdowns={
          <div className="flex gap-2.5 flex-wrap">
            <DropDownButton label={region} options={["Asia", "Europe", "USA"]} onSelect={setRegion} />
            <DropDownButton label={accountStatus} options={["Active", "Inactive", "Pending"]} onSelect={setAccountStatus} />
            <DropDownButton label={membershipStatus} options={["Gold", "Silver", "Bronze"]} onSelect={setMembershipStatus} />
            <DropDownButton label={timeRange} options={["Last 30 Days", "This Month", "This Year"]} onSelect={setTimeRange} />
          </div>
        }
        search={false}
        pagination={false}
        getPaginationRowModel={false}
      />
      
      <BasicTable
        title="User Activity Summary – Interactions on Other Logs"
        data={activityLogData}
        columns={activityLogColumns}
        tableType="activity"
        dropdowns={<DropDownButton label={timeRange} options={["Last 30 Days", "This Month", "This Year"]} onSelect={setTimeRange} />}
        search={false}
        pagination={false}
        getPaginationRowModel={false}
      />
    </div>
  );
};

export default UserDetails;