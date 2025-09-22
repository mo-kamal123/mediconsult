import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';
import { SiGoogledocs } from 'react-icons/si';
import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Table headers
const tableHeaders = [
  'ID',
  'Name',
  'OldID',
  'Category',
  'Type',
  'Member',
  'Branch',
  'Status',
];

// Sample data rows
// const rows = [
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
//   {
//     ID: 2171,
//     Name: 'Mercure Ismailia Hotel',
//     OldID: 'CO-0371',
//     Category: 'Hotels',
//     Type: 'Corporate',
//     Member: 136,
//     Branch: 1,
//     Status: 'Activated',
//     'Change Status': ['Green', 'Red', 'Yellow', 'Blue'],
//   },
// ];

const ClientsManagement = () => {
  const navigate = useNavigate();
  const rows = useSelector((state) => state.clients);

  // Define actions for the table
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
    },
    {
      type: 'export',
      Icon: RiFileExcel2Fill,
      label: 'Export',
    },
    {
      type: 'newClient',
      Icon: RiFileExcel2Fill,
      label: 'New Client',
      onClick: () => navigate('new'),
    },
  ];

  return (
    <section className="w-[90%] m-auto">
      <MainHeader>Clients Management</MainHeader>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={rows}
        checkbox={false}
        // Customize leading column with Google Docs icon
        leadingData={{
          col: '',
          render: () => (
            <p
              onClick={() => navigate('120/client-info')}
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // Customize trailing column with action buttons
        trailingData={{
          col: 'Change Status',
          render: (row) => (
            <div className="flex items-center justify-between">
              <button
                className="text-[#388E3C] text-2xl "
                onClick={() => alert(`activate ${row.Name}`)}
              >
                <FaUserCheck />
              </button>
              <button
                className="text-[#DC0600] text-2xl "
                onClick={() => alert(`deactivate ${row.Name}`)}
              >
                <FaUserTimes />
              </button>
              <button
                className="text-[#FFCC00] text-2xl "
                onClick={() => alert(`pending ${row.Name}`)}
              >
                <FaUserClock />
              </button>
            </div>
          ),
        }}
      />
      {/* <Modal /> */}
      <Outlet />
    </section>
  );
};

export default ClientsManagement;
