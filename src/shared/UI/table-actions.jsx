import { FiSearch } from 'react-icons/fi';
import TableBtn from './table-Btn';
import DropDown from './drop-down';
import { useCallback, useEffect, useRef } from 'react';

const TableActions = ({
  actions,
  tableheaders,
  children,
  search,
  setSearch,
}) => {
  const inputRef = useRef(null);
  // handle search input change - memoized to prevent re-renders
  const handlesearchChange = useCallback(
    (name, value) => {
      setSearch((prevSearch) => ({ ...prevSearch, [name]: value }));
    },
    [setSearch]
  );
  useEffect(() => {
    // Focus the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      {/* Search with icon */}
      <form className="flex items-center justify-center relative my-10 md:justify-normal gap-2 md:gap-4 overflow-x-auto bg-white border border-borders p-4 rounded-2xl shadow-sm">
        <FiSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          ref={inputRef}
          key="search-input"
          type="text"
          placeholder="Search ..."
          value={search?.searchTerm || ''}
          className="w-full bg-white p-3 pl-10 border border-borders rounded-lg"
          onChange={(e) => handlesearchChange('searchTerm', e.target.value)}
        />
        <div className="flex w-1/5 items-center justify-between gap-5">
          <DropDown
            data={tableheaders || []}
            className="py-3 -mt-2"
            type="search"
            value={search?.filterBy}
            onValueChange={(value) => handlesearchChange('filterBy', value)}
            placeholder="Filter By"
            usePortal={true}
          />
          {/* <TableBtn label={'search'} Icon={FiSearch} type="search" handleClick={handleSubmit} /> */}
        </div>
      </form>

      {/* Action buttons */}
      {(actions || children) && (
        <div className="flex items-center justify-between md:justify-normal gap-2 max-h-[100px] md:gap-4 overflow-x-auto overflow-y-visible bg-white border border-borders p-4 rounded-2xl shadow-sm">
          {actions?.map(({ type, label, Icon, onClick }) => (
            <TableBtn
              key={type}
              type={type}
              label={label}
              Icon={Icon}
              handleClick={onClick}
            />
          ))}
          {children}
        </div>
      )}
    </div>
  );
};

export default TableActions;
