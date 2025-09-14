import MainHeader from '../../../shared/UI/main-header';
import Table from '../../../shared/UI/table';
import TableActions from '../../../shared/UI/table-actions';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';

const tableHeaders = [
  'RequestNo',
  'MemberName',
  'MemberID',
  'Date',
  'Provider',
  'Status',
];
const rows = [
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
  },
];

const actions = [
  {
    key: 'clearFilter',
    Icon: MdFilterAltOff,
    label: 'Clear Filter',
  },
  {
    key: 'delete',
    Icon: MdDelete,
    label: 'Delete',
  },
  {
    key: 'export',
    Icon: RiFileExcel2Fill,
    label: 'Export',
  },
];

const ApprovalsRequests = () => {
  return (
    <div className="w-[90%] m-auto">
      <MainHeader>Portals Approvals Requests</MainHeader>
      <Table cols={tableHeaders} />
      <TableActions actions={actions} />
      <Table cols={tableHeaders} data={rows} />
    </div>
  );
};

export default ApprovalsRequests;
