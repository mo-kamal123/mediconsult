import {
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserTimes,
} from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';
import { CgDetailsMore } from 'react-icons/cg';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { useSelector } from 'react-redux';
import { RiFileExcel2Fill, RiUserVoiceFill } from 'react-icons/ri';
import DropDown from '../../../../shared/UI/drop-down';
import { useState } from 'react';
import { TbHandFinger } from 'react-icons/tb';
import MemberHistoryModal from '../../../approvals/approvals-management/components/member-history-modal';
import Modal from '../../../../shared/UI/modal';
import useMembers from '../../members/hooks/useMembers';
import TablePagination from '../../../../shared/UI/table-pagiation';
import MoreMenu from '../../../../shared/UI/more-menu';
import ClientMembersTable from '../components/client-members-table';

// Table headers
const tableHeaders = [
  'ID',
  'Name',
  'OldID',
  'Birthday',
  'Age',
  'Client',
  'Branch',
  'Program',
  'Status',
  'Mobile',
];

const Members = () => {
  const [page, setPage] = useState(1); // current page state
  const navigate = useNavigate();
  const { data: members, isLoading, isError } = useMembers(page);
  const rows = useSelector((state) => state.members);
  const { clientId } = useParams(); // assuming route like /clients/:clientId/members
  // Actions for the table
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
    },
    {
      type: 'delete',
      Icon: MdDelete,
      label: 'Delete',
    },
    {
      type: 'export',
      Icon: RiFileExcel2Fill,
      label: 'Export',
    },
    {
      type: 'AssignProgram',
      Icon: GrDocumentUser,
      label: 'Assign Program',
    },
    {
      type: 'NewMember',
      Icon: FaUserPlus,
      label: 'New Member',
      onClick: () => navigate('/members/new'),
    },
  ];
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
      <ClientMembersTable headers={tableHeaders} data={[]} type="update" />
      {/* <Table
        cols={tableHeaders}
        data={members}
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
      /> */}
      {/* <TablePagination
        page={page}
        setPage={setPage}
        totalPage={members.totalPages}
        totalItem={members.totalClients}
      /> */}
    </div>
  );
};

export default Members;
