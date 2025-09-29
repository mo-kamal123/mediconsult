import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { SiGoogledocs } from 'react-icons/si';
import { HiDocumentCheck } from 'react-icons/hi2';
import { TiAttachment } from 'react-icons/ti';
import TablePagiation from '../../../../shared/UI/table-pagiation';

const tableHeaders = [
  'RequestNo',
  'MemberName',
  'MemberID',
  'Date',
  'Provider',
  'Status',
  'Request Type',
  'Booking Date',
  'Portal Source',
  'Client',
  'Approval No',
  'Note',
];
const rows = [
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
    'Request Type': 'Consultation',
    'Booking Date': '20 Jun 2025',
    'Portal Source': 'Mobile App',
    Client: 'HealthFirst Insurance',
    'Approval No': 'AP-2025-9887',
    Note: 'Patient requires follow-up within 7 days',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
    'Request Type': 'Consultation',
    'Booking Date': '20 Jun 2025',
    'Portal Source': 'Mobile App',
    Client: 'HealthFirst Insurance',
    'Approval No': 'AP-2025-9887',
    Note: 'Patient requires follow-up within 7 days',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
    'Request Type': 'Consultation',
    'Booking Date': '20 Jun 2025',
    'Portal Source': 'Mobile App',
    Client: 'HealthFirst Insurance',
    'Approval No': 'AP-2025-9887',
    Note: 'Patient requires follow-up within 7 days',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
    'Request Type': 'Consultation',
    'Booking Date': '20 Jun 2025',
    'Portal Source': 'Mobile App',
    Client: 'HealthFirst Insurance',
    'Approval No': 'AP-2025-9887',
    Note: 'Patient requires follow-up within 7 days',
  },
  {
    RequestNo: 14468,
    MemberName: 'Mary Maurice Shalk Salame',
    MemberID: 357872,
    Date: '22 Jun 2025',
    Provider: 'Fawzi Hospital',
    Status: 'Approved',
    'Request Type': 'Consultation',
    'Booking Date': '20 Jun 2025',
    'Portal Source': 'Mobile App',
    Client: 'HealthFirst Insurance',
    'Approval No': 'AP-2025-9887',
    Note: 'Patient requires follow-up within 7 days',
  },
];

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
];

const PortalApproval = () => {
  return (
    <div className="w-[90%] m-auto">
      <MainHeader>Portals Approvals Requests</MainHeader>
      <Table cols={tableHeaders} />
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={rows}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
                <button
                  className="text-[#c93b36] text-2xl "
                  onClick={() => alert(`activate ${row.Name}`)}
                >
                  <MdDelete />
                </button>
                <button
                  className="text-blue-500 text-2xl "
                  onClick={() => alert(`deactivate ${row.Name}`)}
                >
                  <SiGoogledocs />
                </button>
                <button
                  className="text-3xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <TiAttachment />
                </button>
                <button
                  className="text-green-500 text-2xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <HiDocumentCheck />
                </button>
              </div>
            ),
          },
        ]}
      />
      <TablePagiation />
    </div>
  );
};

export default PortalApproval;
