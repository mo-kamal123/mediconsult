import React, { useState } from 'react';
import ItemStatus from './item-status';

const Table = ({ cols, data, checkbox = true, leadingData, trailingData }) => {
  const [checkedRows, setCheckedRows] = useState([]);
  const columnCount =
  cols.length +
  (checkbox ? 1 : 0) +
  (leadingData ? 1 : 0) +
  (Array.isArray(trailingData) ? trailingData.length : trailingData ? 1 : 0);

  const handleChecked = (rowId) => {
    setCheckedRows((prev) => {
      if (prev.includes(rowId)) {
        return prev.filter(id => id !== rowId)
      } else {
        return [...prev, rowId]
      }
    })
  }
  const handleCheckAll = () => {
    if (checkedRows.length === data.length) {
      setCheckedRows([]);
    } else {
      const allRowIds = data.map(row => row.ID);
      setCheckedRows(allRowIds);
    }
  }
  console.log(checkedRows);
  return (
    <div className="overflow-x-auto w-full border my-10 border-borders rounded-2xl">
      <table className="w-full table-auto bg-white text-sm">
        <thead>
          <tr className="bg-gray-50">
            {checkbox && (
              <th className="px-6 py-4 text-center whitespace-nowrap border border-borders bg-[#F4F4F6]">
                All
                <input type="checkbox" className="ml-2" onChange={() => handleCheckAll()}/>
              </th>
            )}

            {leadingData && (
              <th className="px-6 py-4 text-left whitespace-nowrap font-semibold text-gray-700 border border-borders bg-[#F4F4F6]">
                {leadingData.col}
              </th>
            )}

            {cols.map((col, index) => (
              <th
                key={index}
                className="px-6 py-4 whitespace-nowrap text-left font-semibold text-gray-700 border border-borders bg-[#F4F4F6]"
              >
                {col}
              </th>
            ))}

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
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-200 hover:bg-gray-100 transition-all duration-300"
              >
                {checkbox && (
                  <td className="px-6 py-4 text-center whitespace-nowrap border border-borders">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-600 rounded border-gray-300"
                      onChange={() => handleChecked(row.ID)}
                      checked={checkedRows.includes(row.ID) } 
                    />
                  </td>
                )}

                {leadingData && (
                  <td className="px-6 py-4 whitespace-nowrap text-left text-gray-600 border border-borders">
                    {typeof leadingData.render === 'function'
                      ? leadingData.render(row, rowIndex)
                      : leadingData.data}
                  </td>
                )}

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
