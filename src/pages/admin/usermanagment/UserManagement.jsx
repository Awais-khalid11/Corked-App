import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import React, { useMemo, useState } from "react";
import BasicTable from "../../../components/BasicTable";
import DropDownButton from "../../../components/DropDownButton";
import Jackson from "../../../../public/assets/icons/actab3.svg";

const UserManagment = () => {
  const [region, setRegion] = useState("Region");
  const [account, setAccount] = useState("Account Status");
  const [membership, setMembership] = useState("Membership Status");
  const [last30Days, setLast30Days] = useState("Last 30 Days");

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: "User Names",
        accessorKey: "user",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
              className="flex items-center gap-3 hover:underline cursor-pointer"
            >
              <img
                src={user.imageUrl}
                alt={user.metric}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col text-[#252525]">
                <span className="font-semibold text-sm mb-[4px]">
                  {user.metric}
                </span>
                <span className="text-[12px] opacity-80">{user.email}</span>
              </div>
            </div>
          );
        },
      },
      {
        header: "Total Wines Logged",
        accessorKey: "logged",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue("logged")}
            </div>
          );
        },
      },
      {
        header: "Cork Badges Earned",
        accessorKey: "badges",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue("badges")}
            </div>
          );
        },
      },
      {
        header: "Membership Status",
        accessorKey: "status",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue("status")}
            </div>
          );
        },
      },
      {
        header: "Total Reactions Sent",
        accessorKey: "sent",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
              className="cursor-pointer hover:underline"
            >
              {row.getValue("sent")}
            </div>
          );
        },
      },
      {
        header: "Account Status",
        accessorKey: "accountStatus",
        cell: ({ row }) => {
          const user = row.original;
          const status = row.getValue("accountStatus").toLowerCase();
          let bgColor = "bg-gray-400";

          if (status === "active") bgColor = "bg-green-500";
          else if (status === "notactive") bgColor = "bg-red-500";

          return (
            <div
              onClick={() => navigate(`/dashboard/user-detail/${user.id}`)}
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
        header: "Action",
        accessorKey: "action",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div
            >
              {row.getValue("action")}
            </div>
          );
        },
      },
    ],
    [navigate]
  );


  const tableData = [
    {
      id: "11",
      metric: "Jackson Graham",
      email: "Jacksongraham@gmail.com",
      imageUrl: Jackson,
      logged: 15,
      badges: 3,
      status: "Gold",
      sent: 20,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "12",
      metric: "Sarah Johnson",
      email: "sarah.johnson@gmail.com",
      imageUrl: Jackson,
      logged: 32,
      badges: 5,
      status: "Trial (ends in 4 days)",
      sent: 17,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "13",
      metric: "Mike Wilson",
      email: "mike.wilson@gmail.com",
      imageUrl: Jackson,
      logged: 28,
      badges: 4,
      status: "Premium",
      sent: 25,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "14",
      metric: "Emma Davis",
      email: "emma.davis@gmail.com",
      imageUrl: Jackson,
      logged: 45,
      badges: 7,
      status: "Gold",
      sent: 30,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "15",
      metric: "Robert Brown",
      email: "robert.brown@gmail.com",
      imageUrl: Jackson,
      logged: 12,
      badges: 2,
      status: "Trial (ends in 2 days)",
      sent: 8,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "16",
      metric: "Lisa Anderson",
      email: "lisa.anderson@gmail.com",
      imageUrl: Jackson,
      logged: 38,
      badges: 6,
      status: "Premium",
      sent: 22,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "17",
      metric: "David Miller",
      email: "david.miller@gmail.com",
      imageUrl: Jackson,
      logged: 19,
      badges: 3,
      status: "Trial (ends in 6 days)",
      sent: 14,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "18",
      metric: "Jennifer Taylor",
      email: "jennifer.taylor@gmail.com",
      imageUrl: Jackson,
      logged: 52,
      badges: 8,
      status: "Gold",
      sent: 35,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "19",
      metric: "James Wilson",
      email: "james.wilson@gmail.com",
      imageUrl: Jackson,
      logged: 23,
      badges: 4,
      status: "Premium",
      sent: 18,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "20",
      metric: "Maria Garcia",
      email: "maria.garcia@gmail.com",
      imageUrl: Jackson,
      logged: 41,
      badges: 6,
      status: "Gold",
      sent: 28,
      accountStatus: "Active",
      action: "⋮"
    },
    {
      id: "2001",
      metric: "Maria Garcia",
      email: "maria.garcia@gmail.com",
      imageUrl: Jackson,
      logged: 41,
      badges: 6,
      status: "Gold",
      sent: 28,
      accountStatus: "Active",
      action: "⋮"
    },
  ];

  return (
    <div>
      <BasicTable
        title=" Users Listing"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={["Napa Valley", "Sonoma Contry", "Mendocino Country", "Anderson Valley", "Russian River Valley"]}
              onSelect={setRegion}
            />
            <DropDownButton
              label={account}
              options={["Active", "Not Active"]}
              onSelect={setAccount}
            />
            <DropDownButton
              label={membership}
              options={["Trial", "Free", "Premium", "Vip"]}
              onSelect={setMembership}
            />
            <DropDownButton
              label={last30Days}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setLast30Days}
            />
            <div onClick={() => navigate('/dashboard/wine-detail-page')}>
              <Button
                buttonIcon="/assets/icons/add-circle.svg"
                buttonText="Add new wine"
              />
            </div>
          </>
        }
        search={false}
        pagination={true} disableRowClick={true}
        onRowClick={(user) => navigate(`/dashboard/user-detail/${user.id}`)}
      />
    </div>
  );
};


export default UserManagment;