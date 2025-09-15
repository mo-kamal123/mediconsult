import { FiSearch } from 'react-icons/fi';
import TableBtn from './table-Btn';

const TableActions = ({ actions }) => {
  return (
    <div>
      {/* Search with icon */}
      <div className="relative w-full my-5">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search ..."
          className="w-full bg-white p-3 pl-10 border border-borders rounded-lg"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between md:justify-normal gap-2 md:gap-4 overflow-x-auto bg-white border border-borders p-4 rounded-2xl">
        {actions?.map(({ type, label, Icon, onClick }) => (
          <TableBtn key={type} type={type} label={label} Icon={Icon} handleClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default TableActions;
