import React from 'react';
import ItemStatus from './item-status';

const Table = ({
  cols,
  data,
  checkbox = true,
  leadingData, // 👈 First column (optional)
  trailingData, // 👈 Last column (optional)
}) => {
  const columnCount =
    cols.length +
    (checkbox ? 1 : 0) +
    (leadingData ? 1 : 0) +
    (trailingData ? 1 : 0);

  return (
    <div className="overflow-x-auto w-full border my-10 border-borders rounded-2xl">
      <table className="table-auto min-w-max bg-white">
        <thead>
          <tr className="bg-gray-50">
            {/* Leading column header */}
            {leadingData && (
              <th className="px-6 py-4 text-left whitespace-nowrap font-semibold text-gray-700 border border-borders bg-[#F4F4F6]">
                {leadingData.col}
              </th>
            )}

            {/* Checkbox column header */}
            {checkbox && (
              <th className="px-6 py-4 text-center whitespace-nowrap border border-borders bg-[#F4F4F6]">
                All
                <input type="checkbox" className="ml-2" />
              </th>
            )}

            {/* Dynamic column headers */}
            {cols.map((col, index) => (
              <th
                key={index}
                className="px-6 py-4 whitespace-nowrap text-left font-semibold text-gray-700 border border-borders bg-[#F4F4F6]"
              >
                {col}
              </th>
            ))}

            {/* Trailing column header */}
            {trailingData && (
              <th className="px-6 py-4 text-left whitespace-nowrap font-semibold text-gray-700 border border-borders bg-[#F4F4F6]">
                {trailingData.col}
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-300"
              >
                {/* Leading column data */}
                {leadingData && (
                  <td className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders">
                    {typeof leadingData.render === 'function'
                      ? leadingData.render(row, rowIndex)
                      : leadingData.data}
                  </td>
                )}

                {/* Checkbox column */}
                {checkbox && (
                  <td className="px-6 py-4 text-center whitespace-nowrap border border-borders">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-600 rounded border-gray-300"
                    />
                  </td>
                )}

                {/* Main data columns */}
                {cols.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders"
                  >
                    {col !== 'Status' && row[col] !== undefined ? (
                      row[col]
                    ) : (
                      <ItemStatus status={row[col]}>{row[col]}</ItemStatus>
                    )}
                  </td>
                ))}

                {/* Trailing column data */}
                {trailingData && (
                  <td className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders">
                    {typeof trailingData.render === 'function'
                      ? trailingData.render(row, rowIndex)
                      : trailingData.data}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columnCount}
                className="text-center p-6 text-gray-400"
              >
                No Data To Display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
