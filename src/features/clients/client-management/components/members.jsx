import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiUserVoiceFill } from 'react-icons/ri';
import TablePagination from '../../../../shared/UI/table-pagiation';
import MoreMenu from '../../../../shared/UI/more-menu';

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
}) => {
  return (
    <div className="">
      <TableActions actions={actions} tableheaders={tableHeaders}>
        <MoreMenu
          actions={[
            {
              label: 'Activate Selected Members',
              onClick: () => alert('Activate Selected Members'),
            },
            {
              label: 'Deactivate Selected Members',
              onClick: () => alert('Deactivate Selected Members'),
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
        data={data}
        checkbox={true}
        // handle leading data rendering
        leadingData={{
          col: '',
          render: (row) => (
            <p
              onClick={() =>
                navigate(`/clients/${clientId}/members/${row.id}/member-info`)
              }
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // handle trailing data rendering
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
          {
            col: 'Consumptions',
            render: (row) => (
              <button
                className="text-blue-500 underline"
                onClick={() =>
                  navigate(
                    `/clients/${row.id}/members/${row.id}/member-history`
                  )
                }
              >
                Consumptions
              </button>
            ),
          },
        ]}
      />
      <TablePagination
        page={page}
        setPage={setPage}
        totalPage={data?.totalPages}
        totalItem={data?.totalClients}
      />
    </div>
  );
};

export default Members;
