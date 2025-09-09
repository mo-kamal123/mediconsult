import ItemStatus from "./item-status";

const Table = ({ cols, data }) => {
  const columnCount = cols.length + 1; 

  return (
    <div className="overflow-hidden border my-10 border-borders rounded-2xl shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4 text-center border border-borders bg-[#F4F4F6]">
              All 
              <input type="checkbox" className="ml-1" />
            </th>
            {cols.map((col, index) => (
              <th
                key={index}
                className="p-4 text-left font-semibold text-gray-700 border border-borders bg-[#F4F4F6]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 border-b border-gray-200"
              >
                <td className="text-center p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-green-600 rounded border-gray-300"
                  />
                </td>

                {cols.map((col, colIndex) => (
                  <td key={colIndex} className="p-4 text-gray-600">
                    {col !== "Status" && row[col] !== undefined ? (
                      row[col]
                    ) : (
                      <ItemStatus status={row[col]}>{row[col]}</ItemStatus>
                    )}
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
