import {
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserTimes,
} from 'react-icons/fa';
import Table from '../../../shared/UI/table';
import { SiGoogledocs } from 'react-icons/si';
import TableActions from '../../../shared/UI/table-actions';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';
import { CgDetailsMore } from 'react-icons/cg';
import TablePagiation from '../../../shared/UI/table-pagiation';

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

const rows = [
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2172,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2173,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2174,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2175,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
  {
    ID: 2171,
    Name: 'Nada Mohamed Ahmed Ali',
    OldID: 2066176,
    Birthday: '04 Mar 1983',
    Age: 41,
    Client: 'Galala University',
    Branch: 'Galala University',
    Program: 'Gold-A',
    Status: 'Activated',
    Mobile: '01003414384',
  },
];

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

const MembersInfo = () => {
  return (
    <div>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={rows}
        checkbox={true}
        leadingData={{
          col: '',
          render: (row) => (
            <p onClick={() => navigate('11')} className="text-blue-500 text-xl">
              <SiGoogledocs />
            </p>
          ),
        }}
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

export default MembersInfo;
