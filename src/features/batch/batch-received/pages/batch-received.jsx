import { MdFilterAltOff } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill, RiSearch2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { SiGoogledocs } from 'react-icons/si';
import { BiAddToQueue } from 'react-icons/bi';

const BatchReceived = () => {
  const navigate = useNavigate();
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
    {
      type: 'newClient',
      Icon: RiSearch2Fill,
      label: 'Approval',
    },
    {
      type: 'newClient',
      Icon: BiAddToQueue,
      label: 'New Batch',
      onClick: () => navigate('/batch/new'),
    },
  ];
  const tableheaders = [
    'ID',
    'Receive Date',
    'Due Date',
    'Provider ID',
    'Provider Name',
    'Claim Count',
    'Total Amount',
    'Actual Amount',
    'Need Review',
    'Reviewed',
    'Receiving Way',
    'Uploaded on Portal',
    'User Name',
  ];
  const data = [
    {
      ID: 100254,
      'Receive Date': '15 Sep 2025',
      'Due Date': '30 Sep 2025',
      'Provider ID': 'PRV-7843',
      'Provider Name': 'National Health Clinic',
      'Claim Count': 12,
      'Total Amount': 4500.75,
      'Actual Amount': 4200.0,
      'Need Review': '0 / 10',
      Reviewed: '10 / 10',
      'Receiving Way': 'Email',
      'Uploaded on Portal': '16 Sep 2025',
      'User Name': 'claims_admin01',
    },
  ];
  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Batch Received</MainHeader>
      <TableActions actions={actions} tableheaders={tableheaders} />
      <Table
        cols={tableheaders}
        data={data}
        extendableData={{
          render: () => (
            <div className="w-[95%] m-auto mt-5 flex flex-col bg-gray-50 p-5 rounded-2xl border mb-5">
              <h3 className="text-lg text-[#1F4ED6]">Claims</h3>
              <TableActions
                actions={actions}
                tableheaders={[
                  'Serial',
                  'ID',
                  'Member ID',
                  'Member Name',
                  'Date',
                ]}
              />
              <Table
                cols={['Serial', 'ID', 'Member ID', 'Member Name', 'Date']}
                data={[
                  {
                    Serial: '2',
                    ID: '43432',
                    'Member ID': '5135412',
                    'Member Name': 'Karim Atef Mahmoud Badwy',
                    Date: '01 Feb 2025',
                  },
                ]}
                leadingData={{
                  col: 'view',
                  render: (row) => (
                    <p
                      onClick={() => navigate('/batch/120/claim/43432')}
                      className="text-blue-500 text-xl"
                    >
                      <SiGoogledocs />
                    </p>
                  ),
                }}
              />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default BatchReceived;
