import MainHeader from '../../../shared/UI/main-header';
import Table from '../../../shared/UI/table';
import TableActions from '../../../shared/UI/table-actions';

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

const ApprovalsRequests = () => {
  return (
    <div className="w-[90%] m-auto">
      <MainHeader>Portals Approvals Requests</MainHeader>
      <Table cols={tableHeaders} />
      <TableActions />
      <Table cols={tableHeaders} data={rows} />
    </div>
  );
};

export default ApprovalsRequests;
