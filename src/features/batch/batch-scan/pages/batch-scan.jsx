import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill, RiPulseAiFill, RiSearch2Fill } from 'react-icons/ri';
import { TiAttachment } from 'react-icons/ti';
import { HiDocumentSearch } from 'react-icons/hi';
import TablePagiation from '../../../../shared/UI/table-pagiation';

const BatchScan = () => {
  const tableHeaders = [
    'Batch No',
    'Receive Date',
    'Due Date',
    'Provider ID',
    'Provider Name',
    'Claim Count',
    'Scanned Claims',
    'Status',
    'Folder Path',
  ];

  const data = [
    {
      'Batch No': '56229',
      'Receive Date': '01 Feb 2025',
      'Due Date': '01 Feb 2025',
      'Provider ID': '2082199',
      'Provider Name': 'City Clinic',
      'Claim Count': '5',
      'Scanned Claims': '3',
      Status: 'Received',
      'Folder Path': '\\\\196.218.246.128\\d8\\provider\\HP0234\\batch\\2374',
    },
  ];
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
    },
    {
      type: 'export',
      Icon: RiFileExcel2Fill,
      label: 'Export',
    },
  ];
  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Batch Management</MainHeader>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={data}
        checkbox={false}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
                <button
                  className="text-3xl "
                  onClick={() => alert(`activate ${row.Name}`)}
                >
                  <TiAttachment />
                </button>
                <button
                  className="text-2xl text-[#4285F4]"
                  onClick={() => alert(`deactivate ${row.Name}`)}
                >
                  <HiDocumentSearch />
                </button>
                <button
                  className="text-[#DC0600]  text-2xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <MdDelete />
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

export default BatchScan;
