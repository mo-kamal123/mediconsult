import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill, RiUserVoiceFill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';
import { SiGoogledocs } from 'react-icons/si';
import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TablePagination from '../../../../shared/UI/table-pagiation';
import useClients from '../hooks/useClients';
import { useEffect, useState, useMemo, useCallback } from 'react';
import Spinner from '../../../../shared/layout/spinner';
import { useDispatch } from 'react-redux';
import { resetClientData } from '../store/client-data-slice';
import useChangeClientStatus from '../hooks/useChangeClientStatus';
import { exportClients } from '../api/clientApi';
import useDebounce from '../../../../shared/hooks/useDebounce';
import useDownloadExcel from '../../../../shared/hooks/useDownloadExcel';

/**
 * ClientsManagement Component
 * Main page for managing clients - displays list of all clients with search, filter, and actions
 *
 * Features:
 * - Client list table with pagination
 * - Search and filter functionality
 * - Export clients to Excel
 * - Change client status (Activate, Deactivate, Hold, Pending)
 * - Navigate to client details or create new client
 */

// Table column headers for display
const tableHeaders = [
  'ID',
  'Name',
  'Category',
  'Type',
  'Member',
  'Branch',
  'Status',
];

// Table column keys matching API response data structure
const colKeys = [
  'Id',
  'EnglishName',
  'Category',
  'Type',
  'Members',
  'Branches',
  'Status',
];

const ClientsManagement = () => {
  const [page, setPage] = useState(1); // current page state
  const [search, setSearch] = useState({ searchTerm: '', filterBy: 'All' }); // state to hold search term and filter column

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(search, 700); // Debounce the search object

  const {
    data: clients,
    isLoading,
    isError,
  } = useClients({
    page,
    search: debouncedSearch, // Pass debounced search to the hook
  });

  // Hook for changing client status (activate, deactivate, hold, pending)
  const { mutate: changeStatus, isLoading: statusLoading } =
    useChangeClientStatus();

  // Hook for downloading clients data as Excel file
  const { downloadExcel } = useDownloadExcel('clients', page, exportClients);

  // Handle clear filter - reset search and page
  const handleClearFilter = useCallback(() => {
    setSearch({ searchTerm: '', filterBy: 'All' });
    setPage(1); // Reset to first page when clearing filters
  }, []);

  // Memoize download excel handler
  const handleExport = useCallback(async () => {
    const file = await exportClients(); // blob returned
    downloadExcel(file, 'clients.xlsx');
  }, []);

  // Memoize new client navigation
  const handleNewClient = useCallback(() => {
    navigate('/clients/new-client/client-info');
  }, [navigate]);

  // Memoize actions array to prevent re-renders that cause focus loss
  const actions = useMemo(
    () => [
      {
        type: 'clearFilter',
        Icon: MdFilterAltOff,
        label: 'Clear Filter',
        onClick: handleClearFilter,
      },
      {
        type: 'export',
        Icon: RiFileExcel2Fill,
        label: 'Export',
        onClick: handleExport,
      },
      {
        type: 'newClient',
        Icon: RiFileExcel2Fill,
        label: 'New Client',
        onClick: handleNewClient,
      },
    ],
    [handleClearFilter, handleExport, handleNewClient]
  );

  // Reset client data in Redux store when clients data is successfully fetched
  // This ensures clean state when navigating between clients
  useEffect(() => {
    if (!isLoading && !isError && clients) {
      dispatch(resetClientData());
    }
  }, [clients, isLoading, isError, dispatch]);

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading clients</p>;
  if (!clients) return <p>No clients found</p>;

  return (
    <section className="w-[95%] m-auto">
      <MainHeader>Clients Management</MainHeader>
      <TableActions
        actions={actions}
        tableheaders={tableHeaders}
        search={search}
        setSearch={setSearch}
      />
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
              onClick={() => navigate(`${row.Id}/client-info`)}
              className="text-blue-500 text-xl cursor-pointer"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // Customize trailing column with action buttons
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
                {/* Status Change Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    className="text-[#388E3C] text-2xl cursor-pointer "
                    disabled={statusLoading}
                    onClick={() =>
                      changeStatus({ id: row.Id, body: { StatusId: 1 } })
                    }
                    title="Activate"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    className="text-[#DC0600] text-2xl cursor-pointer "
                    disabled={statusLoading}
                    onClick={() =>
                      changeStatus({ id: row.Id, body: { StatusId: 2 } })
                    }
                    title="Deactivate"
                  >
                    <FaUserTimes />
                  </button>
                  <button
                    className="text-[#FFCC00] text-2xl cursor-pointer "
                    disabled={statusLoading}
                    onClick={() =>
                      changeStatus({ id: row.Id, body: { StatusId: 4 } })
                    }
                    title="Pending"
                  >
                    <RiUserVoiceFill />
                  </button>
                  <button
                    className="text-[#4285F4] text-2xl cursor-pointer "
                    disabled={statusLoading}
                    onClick={() =>
                      changeStatus({ id: row.Id, body: { StatusId: 3 } })
                    }
                    title="Hold"
                  >
                    <FaUserClock />
                  </button>
                </div>
              </div>
            ),
          },
        ]}
      />

      {/* Pagination component - allows navigation between pages of clients */}
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
