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

const BasicTable = ({ data, columns, title, dropdowns, search }) => {
  const [sort, setSort] = useState([]);
  const [filter, setFilter] = useState("");

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
    <div className="w-full overflow-x-auto border rounded-xl border-gray-300">
      {/* Title and optional dropdowns */}
      {(title || dropdowns) && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 pt-4 pb-2 gap-2">
          {title && <h2 className="text-lg font-semibold text-gray-900">{title}</h2>}
          {dropdowns && <div className="flex gap-3">{dropdowns}</div>}
        </div>
      )}

      {search && (
        <input
          className="m-3 px-2 py-1 w-64 bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      )}

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

export default BasicTable;
