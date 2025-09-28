import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import Table from '../../../../shared/UI/table';
import { SiGoogledocs } from 'react-icons/si';
import { TiAttachment } from 'react-icons/ti';
import { HiDocumentCheck } from 'react-icons/hi2';
import { IoMdPrint } from 'react-icons/io';
import { GrDocumentMissing } from 'react-icons/gr';

const MonthlyChronic = () => {
  const MonthlyChronicData = useSelector((state) => state.monthlyChronic);
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
  const tableheaders = [
    'Approval No.',
    'Member ID',
    'Member Name',
    'Approval Date',
    'Portal Date',
    'Account',
    'Provider',
    'Total',
    'Status',
    'Debit',
    'Member Old ID',
    'Delivery',
    'User Name',
  ];
  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Monthly Chronic Approvals</MainHeader>

      <TableActions actions={actions} tableheaders={tableheaders} />

      <Table
        cols={tableheaders}
        data={MonthlyChronicData}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
                <button
                  className=" text-2xl "
                  onClick={() => alert(`activate ${row.Name}`)}
                >
                  <IoMdPrint />
                </button>
                <button
                  className="text-blue-500 text-2xl "
                  onClick={() => alert(`deactivate ${row.Name}`)}
                >
                  <SiGoogledocs />
                </button>
                <button
                  className="text-green-600 text-2xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <HiDocumentCheck />
                </button>
                <button
                  className="text-[#c93b36] text-2xl "
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <GrDocumentMissing />
                </button>
              </div>
            ),
          },
        ]}
        extendableData={{
            render: () => (
                <div className="w-[90%] m-auto mt-5 flex flex-col ">
                  <h3 className="text-lg text-[#1F4ED6]">Timeline</h3>
                  <Table data={[]} cols={['Date', 'Source', 'User', 'Status', 'Nostes']} checkbox={false} />
                </div>
              ),
        }}
      />
    </div>
  );
};

export default MonthlyChronic;
