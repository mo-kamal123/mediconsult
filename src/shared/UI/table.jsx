import React, { useState } from 'react';
import ItemStatus from './item-status';
import { IoIosArrowForward } from 'react-icons/io';

const Table = ({
  cols,
  data,
  checkbox = true,
  leadingData,
  trailingData,
  extendableData,
}) => {
  const [checkedRows, setCheckedRows] = useState([]); // State to track checked rows
  const [extendableRow, setextendableRows] = useState(null);
  const columnCount =
    cols.length +
    (checkbox ? 1 : 0) +
    (leadingData ? 1 : 0) +
    (Array.isArray(trailingData) ? trailingData.length : trailingData ? 1 : 0); // Total number of columns

  // Handle individual row checkbox toggle
  const handleChecked = (rowId) => {
    setCheckedRows((prev) => {
      if (prev.includes(rowId)) {
        return prev.filter((id) => id !== rowId);
      } else {
        return [...prev, rowId];
      }
    });
  };

  // Handle "Select All" checkbox toggle
  const handleCheckAll = () => {
    if (checkedRows.length === data.length) {
      setCheckedRows([]);
    } else {
      const allRowIds = data.map((row) => row.ID);
      setCheckedRows(allRowIds);
    }
  };

  const toggleExpandedRow = (rowIndex) => {
    setextendableRows((prev) => (prev === rowIndex ? null : rowIndex));
  };
  return (
    <div className="overflow-x-auto w-full border my-10 border-borders rounded-2xl">
      <table className="w-full table-auto bg-white text-sm">
        <thead>
          <tr className="bg-gray-50">
            {/* Expand icon header */}
            {extendableData && (
              <th className="w-10 border border-borders bg-[#F4F4F6]"></th>
            )}
            {/* Render checkbox header if checkbox prop is true */}
            {checkbox && (
              <th className="px-6 py-4 text-center whitespace-nowrap border border-borders bg-[#F4F4F6]">
                All
                <input
                  type="checkbox"
                  className="ml-2"
                  onChange={() => handleCheckAll()}
                  checked={checkedRows.length === data.length}
                />
              </th>
            )}

            {/* Render leading data header if provided */}
            {leadingData && (
              <th className="px-6 py-4 text-left whitespace-nowrap font-semibold text-gray-700 border border-borders bg-[#F4F4F6]">
                {leadingData.col}
              </th>
            )}

            {/* Render main column headers */}
            {cols.map((col, index) => (
              <th
                key={index}
                className="px-6 py-4 whitespace-nowrap text-left font-semibold text-gray-700 border border-borders bg-[#F4F4F6]"
              >
                {col}
              </th>
            ))}

            {/* Render trailing data headers if provided */}
            {Array.isArray(trailingData) &&
              trailingData.map((td, i) => (
                <th
                  key={`trailing-header-${i}`}
                  className="px-6 py-4 text-left whitespace-nowrap font-semibold text-gray-700 border border-borders bg-[#F4F4F6]"
                >
                  {td.col}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {/* // Render table rows or "No Data" message */}
          {data && data.length > 0 ? (
            // render each row of data
            data.map((row, rowIndex) => (
              <>
                <tr
                  key={rowIndex}
                  className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-300"
                >
                  {extendableData && (
                    <td
                      onClick={() => toggleExpandedRow(row.ID)}
                      className={`px-6 py-4 text-center whitespace-nowrap border border-borders text-xl ${extendableRow === row.ID ? 'rotate-90' : ''} transition-all duration-200`}
                    >
                      <IoIosArrowForward />
                    </td>
                  )}
                  {/* Render checkbox cell if checkbox prop is true */}
                  {checkbox && (
                    <td className="px-6 py-4 text-center whitespace-nowrap border border-borders">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-green-600 rounded border-gray-300"
                        onChange={() => handleChecked(row.ID)}
                        checked={checkedRows.includes(row.ID)} // Set checked state based on whether row ID is in checkedRows array
                      />
                    </td>
                  )}

                  {/* Render leading data cell if provided */}
                  {leadingData && (
                    <td className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders">
                      {typeof leadingData.render === 'function'
                        ? leadingData.render(row, rowIndex)
                        : leadingData.data}
                    </td>
                  )}

                  {/* Render main data cells */}
                  {cols.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders"
                    >
                      {/* // If the column is not 'Status' and the value exists, display it directly */}
                      {col !== 'Status' && row[col] !== undefined ? (
                        row[col]
                      ) : (
                        // If the column is 'Status', use ItemStatus component to display it with style*/}
                        <ItemStatus status={row[col]}>{row[col]}</ItemStatus>
                      )}
                    </td>
                  ))}

                  {/* Render trailing data cells if provided */}
                  {Array.isArray(trailingData) &&
                    trailingData.map((td, i) => (
                      <td
                        key={`trailing-data-${rowIndex}-${i}`}
                        className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders"
                      >
                        {typeof td.render === 'function'
                          ? td.render(row, rowIndex)
                          : td.data}
                      </td>
                    ))}
                </tr>
                {extendableData && extendableRow === row.ID && (
                  <tr>
                    <td colSpan={columnCount + 1}>
                      {typeof extendableData.render === 'function'
                        ? extendableData.render(row, rowIndex)
                        : extendableData.data}
                    </td>
                  </tr>
                )}
              </>
            ))
          ) : (
            // Render "No Data To Display" message if no data
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
