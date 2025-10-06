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
  const navigate = useNavigate();
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
        <DropDown
          placeholder="More"
          className="p-5 mb-2 w-28 border-borders text-blue-600"
          data={['item1', 'item2']}
        />
      </TableActions>
      <Table
        cols={tableHeaders}
        data={rows}
        checkbox={true}
        // handle leading data rendering
        leadingData={{
          col: '',
          render: (row) => (
            <p
              onClick={() =>
                navigate(`/clients/${clientId}/members/${row.ID}/member-info`)
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
                onClick={() => alert(`Consumption for ${row.Name}`)}
              >
                Consumptions
              </button>
            ),
          },
        ]}
      />
      <TablePagiation />
    </div>
  );
};

export default Members;
