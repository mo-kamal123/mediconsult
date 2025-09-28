import { SiGoogledocs } from 'react-icons/si';
import DropDown from '../../../../shared/UI/drop-down';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';

const tableHeaders = [
  'Medicine Name',
  'Unite',
  'Full Form',
  'Days',
  'Price',
  'Quantity',
];

const rows = Array.from({ length: 6 }, (_, i) => ({
  'Medicine Name': 'flacort',
  Unite: 'Box',
  'Full Form': 'flacort 30mg 20 tab',
  Days: '1',
  Price: '139.4 EGP',
  Quantity: '1',
}));

const actions = [
  {
    type: 'clearFilter',
    Icon: MdFilterAltOff,
    label: 'Clear Filter',
  },
];

const MedicinesInfo = () => {
  return (
    <div>
      <div className="bg-white border border-borders p-4 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-[#1F4ED6] text-lg">
          Medicines Information
        </h2>
        <div className="flex items-center justify-between gap-10 ">
          <DropDown
            data={['moo', 'bar', 'baz']}
            classNamex="p-5"
            value="moo" // ✅ Matches an item in the list
            onValueChange={(val) => console.log(val)} // Optional
          />

          <div className="flex items-center gap-5 ">
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
      </div>
      <Table
        cols={tableHeaders}
        data={rows}
        checkbox={false}
        leadingData={{
          col: '',
          render: (row) => (
            <button
              className="text-[#DC0600] pl-2 "
              onClick={() => alert(`delete ${row['EN Address']}`)}
            >
              Delete
            </button>
          ),
        }}
      />
    </div>
  );
};

export default MedicinesInfo;
