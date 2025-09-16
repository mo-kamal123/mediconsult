import { FiSearch } from 'react-icons/fi';
import TableBtn from './table-Btn';
import DropDown from './drop-down';
import Btn from './Btn';
import { useState } from 'react';

const TableActions = ({ actions, tableheaders }) => {
  const [search, setSearch] = useState({searchTerm: '', filterBy: ''});

  const handlesearchChange = (name, value) => {
    setSearch((search) => ({ ...search, [name]: value }));
  }
  console.log(search);
  return (
    <div>
      {/* Search with icon */}
      <div className="flex items-center justify-between relative my-10 md:justify-normal gap-2 md:gap-4 overflow-x-auto bg-white border border-borders p-4 rounded-2xl">
        <FiSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search ..."
          className="w-full bg-white p-4 pl-10 border border-borders rounded-lg"
          onChange={(e) => handlesearchChange('searchTerm', e.target.value)}
        />
        <DropDown data={tableheaders} className='text-black' type='search' onChange={(e) => handlesearchChange('filterBy', e.target.value)}/>
        <TableBtn label={'search'} Icon={FiSearch} type='search'/>
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
