import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FolderOpen,
  PlusSquare,
  RefreshCw,
  Trash2,
  Grid3x3,
  Copy,
  FileSpreadsheet,
  Paperclip,
  CircleDollarSign,
} from 'lucide-react';
import MainHeader from '../../../../shared/UI/main-header';
import TableActions from '../../../../shared/UI/table-actions';
import Table from '../../../../shared/UI/table';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import PolicyTableActions from '../components/policy-table-actions';
import usePolicies from '../hooks/usePolicies';
import useDebounce from '../../../../shared/hooks/useDebounce';
import Spinner from '../../../../shared/layout/spinner';

const rows = Array.from({ length: 15 }, (_, i) => ({
  Id: 3,
  ClientId: 35,
  ClientName: '1212',
  StartDate: '2025-12-14',
  EndDate: '2027-12-14',
  PolicyTypeId: 1,
  PolicyTypeName: 'Management',
  CarrierCompanyId: 1,
  CarrierCompanyName: 'Suez Canal',
  TotalAmount: 20,
}));

const PolicyManagement = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // current page state
  const [search, setSearch] = useState({ searchTerm: '', filterBy: 'All' }); // state to hold search term and filter column

  // Table headers
  const tableHeaders = [
    'Policy ID',
    'Client ID',
    'Client Name',
    'Start Date',
    'End Date',
    'Policy Type',
    'Carrier Company',
    'Total Amount',
  ];
  const colkey = [
    'Id',
    'ClientId',
    'ClientName',
    'StartDate',
    'EndDate',
    'PolicyTypeName',
    'CarrierCompanyName',
    'TotalAmount',
  ];
  // const tableHeaders = [
  //   {
  //     title: 'Policy ID',
  //     key: 'Policy ID',
  //     render: (row) => (
  //       <span
  //         className="text-[#1F4ED6] cursor-pointer hover:text-blue-700 hover:underline font-medium"
  //         onClick={() => navigate(`/policy/${row['Policy ID']}/edit`)}
  //       >
  //         {row['Policy ID']}
  //       </span>
  //     ),
  //   },
  //   { title: 'Client ID', key: 'Client ID' },
  //   { title: 'Client Name', key: 'Client Name' },
  //   { title: 'Start Date', key: 'Start Date' },
  //   { title: 'End Date', key: 'End Date' },
  // ];
  const fileInputRef = useRef(null);
  const [attachedFiles, setAttachedFiles] = useState({});
  const tableHeaderTitles = tableHeaders.map((col) =>
    typeof col === 'string' ? col : col.title
  );
  const debouncedSearch = useDebounce(search, 700); // Debounce the search object
  const {
    data: policies,
    isLoading,
    isError,
  } = usePolicies({
    page,
    search: debouncedSearch, // Pass debounced search to the hook
  });
  const handleAttachmentClick = (rowId) => {
    fileInputRef.current?.setAttribute('data-row-id', rowId);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const rowId = e.target.getAttribute('data-row-id');

    if (files.length > 0) {
      setAttachedFiles((prev) => ({
        ...prev,
        [rowId]: [...(prev[rowId] || []), ...files],
      }));
      console.log(`Files attached to row ${rowId}:`, files);
      alert(
        `Attached ${files.length} file(s) to Policy ID ${rowId}: ${files.map((f) => f.name).join(', ')}`
      );
    }

    e.target.value = '';
  };

  const handlePolicyGrid = (row) => {
    console.log('Grid clicked', row);
  };

  const handlePolicyCopy = (row) => {
    console.log('Copy clicked', row);
  };

  const handlePolicyDelete = (row) => {
    console.log('Delete policy', row);
  };

  const actions = [
    {
      type: 'newClient',
      label: 'New Policy',
      Icon: PlusSquare,
      onClick: () => navigate('/policy/new'),
    },

    {
      type: 'clearFilter',
      label: 'Clear Filter',
      onClick: () => console.log('Clear Filter clicked'),
    },
    {
      type: 'export',
      label: 'Export',
      Icon: FileSpreadsheet,
      onClick: () => console.log('Export clicked'),
    },
  ];
  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading policies</p>;
  if (!policies) return null;

  return (
    <div className="w-[95%] m-auto flex flex-col gap-6">
      <MainHeader>Policy Management</MainHeader>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      />

      <TableActions
        actions={actions}
        tableheaders={tableHeaderTitles}
        search={search}
        setSearch={setSearch}
      />

      <Table
        cols={tableHeaders}
        colkey={colkey}
        data={policies?.Data}
        checkbox={false}
        leadingData={[
          {
            col: 'View',
            render: (row) => (
              <FolderOpen
                className="text-[#1F4ED6] cursor-pointer hover:text-blue-700"
                onClick={() => navigate(`/policy/${row.Id}`)}
              />
            ),
          },
          {
            col: 'Payments',
            render: (row) => (
              <CircleDollarSign
                className={`cursor-pointer w-full flex items-center`}
                onClick={() => navigate(`/policy/${row.Id}/payments`)}
              />
            ),
          },
        ]}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <PolicyTableActions
                row={row}
                onAttachmentClick={handleAttachmentClick}
                onGridClick={handlePolicyGrid}
                onCopyClick={handlePolicyCopy}
                onDeleteClick={handlePolicyDelete}
              />
            ),
          },
        ]}
      />

      <TablePagiation
        totalPage={policies?.TotalPages ?? 0}
        totalItem={policies?.TotalPolicies ?? 0}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default PolicyManagement;
