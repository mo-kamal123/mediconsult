import { FiSearch } from 'react-icons/fi';
import TableBtn from './table-Btn';
import DropDown from './drop-down';
import Btn from './Btn';
import { useState } from 'react';

const TableActions = ({ actions, tableheaders, children }) => {
  const [search, setSearch] = useState({ searchTerm: '', filterBy: '' }); // state to hold search term and filter column

  // handle search input change
  const handlesearchChange = (name, value) => {
    setSearch((search) => ({ ...search, [name]: value }));
  };

  return (
    <div>
      {/* Search with icon */}
      <div className="flex items-center justify-center relative my-10 md:justify-normal gap-2 md:gap-4 overflow-x-auto bg-white border border-borders p-4 rounded-2xl shadow-sm">
        <FiSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search ..."
          className="w-full bg-white p-3 pl-10 border border-borders rounded-lg"
          onChange={(e) => handlesearchChange('searchTerm', e.target.value)}
        />
        <div className="flex items-center justify-between gap-5">
          <DropDown
            data={tableheaders || []}
            className="py-6 -mt-2"
            type="search"
            value={search.filterBy}
            onValueChange={(value) => handlesearchChange('filterBy', value)}
            placeholder="Filter By"
          />
          <TableBtn label={'search'} Icon={FiSearch} type="search" />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between md:justify-normal gap-2 md:gap-4 overflow-x-auto bg-white border border-borders p-4 rounded-2xl shadow-sm">
        {children}

        {actions?.map(({ type, label, Icon, onClick }) => (
          <TableBtn
            key={type}
            type={type}
            label={label}
            Icon={Icon}
            handleClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TableActions;
