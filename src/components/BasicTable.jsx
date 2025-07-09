

import React from "react";

const BasicTable = ({ data = [], columns = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-[#F6F6F6] text-[#252525]">
          <tr>
            {columns.map((col, index) => (
              <th
                key={col.id || col.accessorKey || index}
                className="text-[16px] font-bold opacity-80 py-4 px-5 text-left"
              >
                {col.header || ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className="bg-white border-b border-[rgba(37,37,37,0.1)]"
              >
                {columns.map((col, colIndex) => {
                  const key = col.id || col.accessorKey || colIndex;
                  const cellValue = col.accessorKey
                    ? row[col.accessorKey]
                    : null;

                  return (
                    <td
                      key={key}
                      className="py-7 pl-5 pr-16 text-sm leading-[1] text-[#252525]"
                    >
                      {col.cell
                        ? col.cell({ getValue: () => cellValue, row })
                        : col.accessorFn
                        ? col.accessorFn(row)
                        : cellValue}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-400"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

