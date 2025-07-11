import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
  } from "@tanstack/react-table";
  import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
  import React, { useState } from "react";

  const BasicTable = ({
    data,
    columns,
    title,
    dropdowns,
    search = false,
    searchType = "realtime", // 'realtime' or 'button'
  }) => {
    const [sort, setSort] = useState([]);
    const [filter, setFilter] = useState("");
    const [inputValue, setInputValue] = useState("");

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting: sort,
        globalFilter: filter,
      },
      onSortingChange: setSort,
      onGlobalFilterChange: setFilter,
    });

    return (
      <div className="w-full  border rounded-xl border-gray-300">
        {/* ✅ Header Section */}
       {(title || dropdowns || search) && (
  <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center px-4 pt-4 pb-2 gap-4">
    {/* Title - if exists, show it on the left */}
    {title && (
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    )}

    {/* Right section: Search and dropdowns */}
    <div
      className={`flex flex-wrap items-center gap-2 ${
        title ? "justify-start md:justify-end" : "justify-between col-span-2"
      }`}
    >
      {/* Search input */}
      {search && (
        <div className="flex items-center gap-2">
          <input
            className="px-2 py-1 w-64 bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Search"
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

      {/* Dropdowns */}
      {dropdowns && <div className="flex gap-2">{dropdowns}</div>}
    </div>
  </div>
)}


        {/* Table */}
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-gray-100" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {
                        {
                          asc: <FaAngleUp />,
                          desc: <FaAngleDown />,
                        }[header.column.getIsSorted() ?? null]
                      }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr className="hover:bg-gray-50" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200"
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
      </div>
    );
  };

  export default BasicTable;