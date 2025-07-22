import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const BasicTable = ({
  data,
  columns,
  title,
  dropdowns,
  search = false,
  searchType = "realtime",
  pagination = false,
  onRowClick,
  tableType = "default", // 'user', 'badge', 'wine', or 'default'
}) => {
  const [sort, setSort] = useState([]);
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sort,
      globalFilter: filter,
    },
    onSortingChange: setSort,
    onGlobalFilterChange: setFilter,
  });
  const navigate = useNavigate();

const handleRowClick = (rowData) => {
  if (disableRowClick) return;

  if (typeof onRowClick === "function") {
    onRowClick(rowData);
    return;
  }

  const itemId = rowData?.ID || rowData?.id;
  if (!itemId) return;

  switch (tableType) {
    case "user":
      navigate(`/dashboard/user-detail/${itemId}`);
      break;
    case "badge":
      navigate(`/dashboard/badge-detail/${itemId}`);
      break;
    case "wine":
      navigate(`/dashboard/wine-detail/${itemId}`);
      break;
    case "log":
      navigate(`/dashboard/log-detail/${itemId}`);
      break;
      case "activity":
      navigate(`/dashboard/activity-log-detail/${itemId}`);
      break;
    default:
      if (rowData.badge) {
        navigate(`/dashboard/badge-detail/${itemId}`);
      } else if (rowData.email) {
        navigate(`/dashboard/user-detail/${itemId}`);
      } else if (rowData.ID) {
        navigate(`/dashboard/log-detail/${itemId}`);
      } else {
        navigate(`/dashboard/view-detail/${itemId}`);
      }
  }
};


  return (
    <div className="w-full bg-white rounded-[12px] py-5 px-4">
      {(title || dropdowns || search) && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-4 mb-5">
          {title && (
            <h2 className="text-[20px] font-bold text-[#252525] leading-6">
              {title}
            </h2>
          )}
          <div
            className={`flex flex-wrap items-center gap-3.5 ${
              title ? "justify-start md:justify-end" : "justify-between col-span-2"
            }`}
          >
            {search && (
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-1 w-72 h-10">
                <IoSearchOutline className="mr-2.5" />
                <input
                  className="bg-transparent outline-none text-sm text-gray-900 w-full"
                  type="text"
                  placeholder="Search..."
                  value={searchType === "button" ? inputValue : filter}
                  onChange={(e) => {
                    if (searchType === "button") {
                      setInputValue(e.target.value);
                    } else {
                      setFilter(e.target.value);
                    }
                  }}
                />
              </div>
            )}
            {dropdowns && <div className="flex gap-2 flex-wrap">{dropdowns}</div>}
          </div>
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-[rgba(246,246,246,1)]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="py-4 px-5 text-left text-[16px] font-bold text-[rgba(37,37,37,1)] leading-[1] opacity-80"
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <FaAngleUp />,
                        desc: <FaAngleDown />,
                      }[header.column.getIsSorted() ?? null]}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => handleRowClick(row.original)}
                  className="text-[rgba(37,37,37,1)] cursor-pointer hover:bg-gray-50 transition"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="py-7 px-5 text-sm border-b border-[rgba(37,37,37,0.1)] leading-[1]"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-sm text-gray-500"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {pagination && (
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
            <div className="text-sm text-[#252525]">
              Showing {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()} User's list
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="bg-[#FAFAFA] text-[#9A9A9A] border border-[#9A9A9A] py-2.5 px-4 rounded-[12px] flex gap-2 active:text-[#252525] active:border-[#252525]"
              >
                ← <span>Previous</span>
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="bg-[#FAFAFA] text-[#9A9A9A] border border-[#9A9A9A] py-2.5 px-4 rounded-[12px] flex gap-2 active:text-[#252525] active:border-[#252525]"
              >
                <span>Next</span> →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicTable;