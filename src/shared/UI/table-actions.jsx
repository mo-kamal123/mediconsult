import { HiOutlineRefresh } from 'react-icons/hi';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { FiSearch } from "react-icons/fi";
import Btn from './Btn';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';

const actions = [
  {
    key: 'refresh',
    Icon: HiOutlineRefresh,
    label: 'Refresh',
  },
  {
    key: 'clearFilter',
    Icon: MdFilterAltOff,
    label: 'Clear Filter',
  },
  {
    key: 'delete',
    Icon: MdDelete,
    label: 'Delete',
  },
  {
    key: 'export',
    Icon: RiFileExcel2Fill,
    label: 'Export',
  },
];

const TableActions = () => {
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
      <div className="flex items-center gap-4">
        {actions.map(({ key, Icon }) => (
          <Btn key={key} label={key} Icon={Icon} />
        ))}
      </div>
    </div>
    
  );
};

export default TableActions;
