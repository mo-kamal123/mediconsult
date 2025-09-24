import { BsFillPlusSquareFill } from 'react-icons/bs';
import MainHeader from '../../../../shared/UI/main-header';
import TableActions from '../../../../shared/UI/table-actions';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { GrDocumentUser } from 'react-icons/gr';
import { FaUserPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import Table from '../../../../shared/UI/table';
import { ImAttachment } from 'react-icons/im';
import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProvidersManagement = () => {
  const navigate = useNavigate();
  const tableRows = useSelector((state) => state.providers); // Get providers data from Redux store
  // Table headers
  const tableHeaders = [
    'ID',
    'Name',
    'Old ID',
    'Category',
    'Branches',
    'Status',
    'Batch Due Days',
    'Provider Class',
    'Priority',
    'Latest Clearance',
    'Tax Number',
    'Online',
    'Allow Chronic Portal',
  ];

  // Actions for the table
  const actions = [
    {
      type: 'AddColumn',
      Icon: BsFillPlusSquareFill,
      label: 'Add Column',
    },
    {
      type: 'newProvider',
      Icon: undefined,
      label: 'New Provider',
    },
    {
      type: 'updateStatus',
      Icon: undefined,
      label: 'Update Status',
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
  ];

  return (
    <div className="w-[95%] m-auto">
      <MainHeader>ProvidersManagement</MainHeader>
      <TableActions tableheaders={tableHeaders} actions={actions} />
      <Table
        cols={tableHeaders}
        data={tableRows}
        // handle leading data rendering
        leadingData={{
          col: '',
          render: (row) => (
            <p
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate(`${row.ID}/locations`)}
            >
              view
            </p>
          ),
        }}
      />
      <TablePagiation />
    </div>
  );
};

export default ProvidersManagement;
