import { MdFilterAltOff } from 'react-icons/md';
import DropDown from '../../../../shared/UI/drop-down';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';

const tableHeaders = [
  'Medicine Name',
  'Unite',
  'Provider Price Before Copayment',
  'Price',
  'Money paid by Member',
];

const rows = Array.from({ length: 6 }, (_, i) => ({
  'Medicine Name': 'flacort',
  Unite: 'Box',
  'Provider Price Before Copayment': '200  EGP',
  Price: '139.4 EGP',
  'Money paid by Member': '150  EGP',
}));

const actions = [
  {
    type: 'clearFilter',
    Icon: MdFilterAltOff,
    label: 'Clear Filter',
  },
];
const ClaimInfo = () => {
  return (
    <div>
      <div className="bg-white border border-borders p-4 rounded-2xl shadow-sm -mb-5">
        <h2 className="font-semibold text-[#1F4ED6] text-lg">
          Claim Information
        </h2>
        <div className="flex items-center justify-between gap-10 ">
          <DropDown
            data={['moo', 'bar', 'baz']}
            classNamex="p-5"
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

export default ClaimInfo;
