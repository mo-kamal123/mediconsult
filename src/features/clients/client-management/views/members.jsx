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

// Actions for the table
const actions = [
  {
    type: 'AddColumn',
    Icon: BsFillPlusSquareFill,
    label: 'Add Column',
  },
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
    type: 'AssignProgram',
    Icon: GrDocumentUser,
    label: 'Assign Program',
  },
  {
    type: 'NewMember',
    Icon: FaUserPlus,
    label: 'New Member',
  },
  {
    type: 'More',
    Icon: CgDetailsMore,
    label: 'More',
  },
];

const Members = () => {
  const navigate = useNavigate();
  const rows = useSelector((state) => state.members);
  const { clientId } = useParams(); // assuming route like /clients/:clientId/members
  return (
    <div>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={rows}
        checkbox={true}
        // handle leading data rendering
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
        // handle trailing data rendering
        trailingData={[
          {
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
