import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill, RiUserVoiceFill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';
import { SiGoogledocs } from 'react-icons/si';
import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImAttachment } from 'react-icons/im';
import TablePagination from '../../../../shared/UI/table-pagiation';
import useClients from '../hooks/useClients';
import { useState } from 'react';
import Spinner from '../../../../shared/layout/spinner';

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
const colKeys = [
  'id',
  'name',
  'oldID',
  'categoryName',
  'type',
  'member',
  'branch',
  'status',
];

const ClientsManagement = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  // TODO: remove comment when api ready
  const { data: clients, isLoading, isError, error } = useClients(page);
  console.log('Clients response:', clients); // const rows = useSelector((state) => state.clients);

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

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading clients</p>;
  if (!clients) return <p>No clients found</p>;

  return (
    <section className="w-[95%] m-auto">
      <MainHeader>Clients Management</MainHeader>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        colkey={colKeys}
        data={clients.data}
        checkbox={false}
        // Customize leading column with Google Docs icon
        leadingData={{
          col: '',
          render: (row) => (
            <p
              onClick={() => navigate(`${row.id}/client-info`)}
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // Customize trailing column with action buttons
        trailingData={[
          {
            col: 'Change Status',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
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
                  <RiUserVoiceFill />
                </button>
                <button
                  className="text-[#4285F4] text-2xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <FaUserClock />
                </button>
              </div>
            ),
          },
        ]}
      />
      {/* // TODO: Add pagination support for client list */}
      <TablePagination
        page={page}
        setPage={setPage}
        totalPage={clients.totalPages}
        totalItem={clients.totalClients}
      />
    </section>
  );
};

export default ClientsManagement;
