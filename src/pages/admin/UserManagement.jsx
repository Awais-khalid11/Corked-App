import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import DropDownButton from "../../components/DropDownButton";
import Button from "../../components/Button";
import Add from "../../../public/assets/icons/add-circle.svg";
import Jackson from "../../../public/assets/images/airportimg.png";

const UserManagment = () => {
  const [region, setRegion] = useState("Region");
  const [account, setAccount] = useState("Account Status");
  const [membership, setMembership] = useState("Membership Status");
  const [last30Days, setLast30Days] = useState("Last 30 Days");

  const columns = useMemo(
    () => [
      {
        header: "User Names",
        accessorKey: "user",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="flex items-center gap-3">
              <img
                src={user.imageUrl}
                alt={user.metric}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col text-[#252525]">
                <span className="font-semibold text-sm mb-[4px]">{user.metric}</span>
                <span className="text-[12px] opacity-80">{user.email}</span>
              </div>
            </div>
          );
        },
      },
      { header: "Total Wines Logged", accessorKey: "logged" },
      { header: "Cork Badges Earned", accessorKey: "badges" },
      { header: "Membership Status", accessorKey: "status" },
      { header: "Total Reactions Sent", accessorKey: "sent" },
      {
        header: "Account Status",
        accessorKey: "accountStatus",
        cell: ({ row }) => {
          const status = row.getValue("accountStatus").toLowerCase();
          const bgColor =
            status === "active"
              ? "bg-green-500"
              : status === "notactive"
              ? "bg-red-500"
              : "bg-gray-400";

          return (
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${bgColor}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          );
        },
      },
    ],
    []
  );

  const tableData = Array.from({ length: 25 }, (_, i) => ({
    metric: `Jackson Graham`,
    email: `jackson${i + 1}@gmail.com`,
    imageUrl: Jackson,
    logged: 32,
    badges: 5,
    status: "Trial (ends in 4 days)",
    sent: 17,
    accountStatus: "Active",
  }));

  return (
    <div>
      <BasicTable
        title="Users Listing"
        data={tableData}
        columns={columns}
        dropdowns={
          <>
            <DropDownButton
              label={region}
              options={["By Region", "Table View"]}
              onSelect={setRegion}
            />
            <DropDownButton
              label={account}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setAccount}
            />
            <DropDownButton
              label={membership}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setMembership}
            />
            <DropDownButton
              label={last30Days}
              options={["Date", "Past 30 Days", "This Month", "This Year"]}
              onSelect={setLast30Days}
            />
            <Link to="/wine-detail-page">
              <Button buttonIcon={Add} buttonText="Add new wine" />
            </Link>
          </>
        }
        search={false}
        pagination={true}
      />
    </div>
  );
};

export default UserManagment;
