import MainHeader from '../../../../shared/UI/main-header';
import Members from '../../client-management/components/members';
import { FaUserPlus } from 'react-icons/fa';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import useMembers from '../hooks/useMembers';
import { useNavigate } from 'react-router-dom';
import useDownloadExcel from '../../../../shared/hooks/useDownloadExcel';
import { exportMembers } from '../api/membersApi';
import useDebounce from '../../../../shared/hooks/useDebounce';
import Spinner from '../../../../shared/layout/spinner';
import useDeleteBulkMembers from '../hooks/useDeleteBulkMembers';

const MembersManagement = () => {
  const [page, setPage] = useState(1); // current page state
  const [search, setSearch] = useState({ searchTerm: '', filterBy: 'All' });
  const [selectedRowsIds, setSelectedRowsIds] = useState([]);
  const rows = useSelector((state) => state.members);
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(search, 700);

  const {
    data: members,
    isLoading,
    isError,
  } = useMembers({
    page,
    search: debouncedSearch,
  });
  console.log(members);
  const { mutate: deleteMembers } = useDeleteBulkMembers();
  const { downloadExcel } = useDownloadExcel('members', page, exportMembers);
  // Handle clear filter - reset search and page
  const handleClearFilter = useCallback(() => {
    setSearch({ searchTerm: '', filterBy: 'All' });
    setPage(1); // Reset to first page when clearing filters
  }, []);

  // Actions for the table
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
      onClick: handleClearFilter,
    },
    {
      type: 'delete',
      Icon: MdDelete,
      label: 'Delete',
      onClick: async () => {
        deleteMembers({ MemberIds: selectedRowsIds });
      },
    },
    {
      type: 'export',
      Icon: RiFileExcel2Fill,
      label: 'Export',
      onClick: async () => {
        try {
          const file = await exportMembers(); // Get the blob directly from API
          downloadExcel(file, 'members.xlsx');
        } catch (error) {
          console.error('Failed to export members:', error);
        }
      },
    },
    // {
    //   type: 'AssignProgram',
    //   Icon: GrDocumentUser,
    //   label: 'Assign Program',
    // },
    {
      type: 'NewMember',
      Icon: FaUserPlus,
      label: 'New Member',
      onClick: () => navigate('/members/new'),
    },
  ];

  // Handle loading state
  if (isLoading) return <Spinner />;

  // Handle error state
  if (isError) {
    return (
      <div className="w-[95%] m-auto flex flex-col">
        <MainHeader>Members Management</MainHeader>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Error Loading Members
            </h3>
            <p className="text-red-600">
              Failed to load members. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] m-auto flex flex-col">
      <MainHeader>Members Management</MainHeader>
      <Members
        actions={actions}
        data={members}
        error={isError}
        loading={isLoading}
        page={page}
        setPage={setPage}
        rows={rows}
        search={search}
        setSearch={setSearch}
        selectedRowsIds={selectedRowsIds}
        setSelectedRowsIds={setSelectedRowsIds}
      />
    </div>
  );
};

export default MembersManagement;
