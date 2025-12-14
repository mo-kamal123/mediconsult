import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiUserVoiceFill } from 'react-icons/ri';
import TablePagination from '../../../../shared/UI/table-pagiation';
import MoreMenu from '../../../../shared/UI/more-menu';
import { useNavigate } from 'react-router-dom';
import useChangeMemberStatus from '../../members/hooks/useChangeMemberStatus';
import { useState } from 'react';
import useActivateBulkMembers from '../../members/hooks/useActivateBulkMembers';
import useDeactivateBulkMembers from '../../members/hooks/useDeactivateBulkMembers';
import Spinner from '../../../../shared/layout/spinner';

// Table headers
const tableHeaders = [
  'ID',
  'Name',
  'BirthDate',
  'Age',
  'Client',
  'Branch',
  'Program',
  'Status',
  'Mobile',
];
const colkey = [
  'Id',
  'Name',
  'BirthDate',
  'Age',
  'ClientName',
  'BranchName',
  'ProgramName',
  'StatusName',
  'Mobile',
];

const Members = ({
  page,
  data,
  loading,
  error,
  clientId,
  setPage,
  rows,
  actions,
  search,
  setSearch,
}) => {
  const navigate = useNavigate();
  const [selectedRowsIds, setSelectedRowsIds] = useState([]);
  const { mutate: changeStatus, isLoading: statusLoading } =
    useChangeMemberStatus();
    const {mutate: activateMembers, isLoading} = useActivateBulkMembers()
    const {mutate: deactivateMembers} = useDeactivateBulkMembers()
  const navigatationRoute = (row) =>
    clientId
      ? `/clients/${clientId}/members/${row.Id}/member-info`
      : `/member-management/${row.Id}/member-info`;

      console.log(selectedRowsIds);
  
  // Show loading state
  if (loading) {
    return (
      <div className="w-full">
        <TableActions actions={actions} tableheaders={tableHeaders} search={search} setSearch={setSearch}>
          <MoreMenu
            actions={[
              {
                label: 'Activate Selected Members',
                onClick: () => activateMembers({MemberIds: selectedRowsIds}),
              },
              {
                label: 'Deactivate Selected Members',
                onClick: () => deactivateMembers({MemberIds: selectedRowsIds}),
              },
              {
                label: 'Bulk update Members',
                onClick: () => alert('Bulk update Members'),
              },
              {
                label: 'Bulk upload Image',
                onClick: () => alert('Bulk upload Image'),
              },
            ]}
          />
        </TableActions>
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full">
        <TableActions actions={actions} tableheaders={tableHeaders} search={search} setSearch={setSearch}>
          <MoreMenu
            actions={[
              {
                label: 'Activate Selected Members',
                onClick: () => activateMembers({MemberIds: selectedRowsIds}),
              },
              {
                label: 'Deactivate Selected Members',
                onClick: () => deactivateMembers({MemberIds: selectedRowsIds}),
              },
              {
                label: 'Bulk update Members',
                onClick: () => alert('Bulk update Members'),
              },
              {
                label: 'Bulk upload Image',
                onClick: () => alert('Bulk upload Image'),
              },
            ]}
          />
        </TableActions>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Error Loading Members
            </h3>
            <p className="text-red-600">
              Failed to load members data. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <TableActions actions={actions} tableheaders={tableHeaders} search={search} setSearch={setSearch}>
        <MoreMenu
          actions={[
            {
              label: 'Activate Selected Members',
              onClick: () => activateMembers({MemberIds: selectedRowsIds}),
            },
            {
              label: 'Deactivate Selected Members',
              onClick: () => deactivateMembers({MemberIds: selectedRowsIds}),
            },
            {
              label: 'Bulk update Members',
              onClick: () => alert('Bulk update Members'),
            },
            {
              label: 'Bulk upload Image',
              onClick: () => alert('Bulk upload Image'),
            },
          ]}
        />
      </TableActions>
      <Table
        colkey={colkey}
        cols={tableHeaders}
        data={data?.Data}
        checkbox={true}
        getRowId={setSelectedRowsIds}
        // handle leading data rendering
        leadingData={{
          col: '',
          render: (row) => (
            <p
              onClick={() => navigate(navigatationRoute(row))}
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // handle trailing data rendering
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center gap-2">
                <button
                  className="text-[#388E3C] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 1 } })
                  }
                  title="Activate"
                >
                  <FaUserCheck />
                </button>
                <button
                  className="text-[#DC0600] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 2 } })
                  }
                  title="Deactivate"
                >
                  <FaUserTimes />
                </button>
                <button
                  className="text-[#FFCC00] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 4 } })
                  }
                  title="Pending"
                >
                  <RiUserVoiceFill />
                </button>
                <button
                  className="text-[#4285F4] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 3 } })
                  }
                  title="Hold"
                >
                  <FaUserClock />
                </button>
              </div>
            ),
          },
        ]}
      />

      <TablePagination
        page={page}
        setPage={setPage}
        totalPage={data?.TotalPages}
        totalItem={data?.TotalMembers}
      />
    </div>
  );
};

export default Members;
