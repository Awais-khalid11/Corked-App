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
  import { useNavigate } from "react-router-dom";


  const BasicTable = ({
    data,
    columns,
    title,
    dropdowns,
    search = false,
    searchType = "realtime",
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
    const navigate = useNavigate();


    return (
      <div className="w-full  bg-white rounded-[12px] py-5 px-4">

       {(title || dropdowns || search) && (
  <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center px-4 pt-4 pb-2 gap-4">
  
    {title && (
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    )}

  
    <div
      className={`flex flex-wrap items-center gap-2 mb-5 ${
        title ? "justify-start md:justify-end" : "justify-between col-span-2"
      }`}
    >
  
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

    
      {dropdowns && <div className="flex gap-2">{dropdowns}</div>}
    </div>
  </div>
)}


        
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-[rgba(246,246,246,1)]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="py-4 px-5 text-left text-[16px] font-bold text-[rgba(37,37,37,1)] leading-[1] opacity-80 "
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
      <tr
        key={row.id}
        onClick={() => {
          const wineId = row.original?.id;
          if (wineId) navigate(`/view-detail/${wineId}`);
        }}
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
      </div>
    );
  };

  export default BasicTable;