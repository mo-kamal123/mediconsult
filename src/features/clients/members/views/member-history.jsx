import { SiGoogledocs } from 'react-icons/si';
import Table from '../../../../shared/UI/table';
import DropDown from '../../../../shared/UI/drop-down';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';
import TableBtn from '../../../../shared/UI/table-Btn';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { useNavigate, useParams } from 'react-router-dom';

const tableHeaders = [
  'Member',
  'Type',
  'Approval / Claims No.',
  'Batch No.',
  'Provider',
  'Date',
  'En. Service Name',
  'Ar. Service Name',
  'Price',
  'Quantity',
  'Status',
];

const rows = Array(12).fill({
  Member: 'A/Hamid Eid Ali',
  Type: 'Pharmacy Claim',
  'Approval / Claims No.': '201844',
  'Batch No.': '1368',
  Provider: 'El Ezaby Pharmacy',
  Date: '1',
  'En. Service Name': 'flacort 30mg 20 tab(Box)',
  'Ar. Service Name': 'علبة فلاكورت 30 مجم 20 قرص',
  Price: '139.4 EGP',
  Quantity: '1',
  Status: 'Approved',
});

const actions = [
  {
    type: 'export',
    Icon: RiFileExcel2Fill,
    label: 'Export',
  },
  {
    type: 'clearFilter',
    Icon: MdFilterAltOff,
    label: 'Clear Filter',
  },
];

const MemberHistory = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  return (
    <div>
      <div className="bg-white border border-borders p-4 rounded-2xl shadow-sm">
        <p className="font-semibold">Member Name</p>
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
            <p
              onClick={() => navigate(`/clients/${clientId}/members/${row.ID}`)}
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
      />
      <TablePagiation />
    </div>
  );
};

export default MemberHistory;
