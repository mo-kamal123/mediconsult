import { MdFilterAltOff, MdLocalPrintshop } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import TableActions from '../../../../shared/UI/table-actions';
import Table from '../../../../shared/UI/table';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { FaPlusSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SiGoogledocs } from 'react-icons/si';
import DragAndDrop from '../../../../shared/UI/drag&drop';

const ApprovalsManagement = () => {
  const navigate = useNavigate();
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
    },
    {
      type: 'newClient',
      Icon: FaPlusSquare,
      label: 'New Pharmacy Approval',
      onClick: () => navigate('/approvals/new-pharmacy-approval'),
    },
    {
      type: 'newClient',
      Icon: FaPlusSquare,
      label: 'New Regular Approval',
      onClick: () => navigate('/approvals/new-regular-approval'),
    },
  ];
  const tableHeaders = [
    'ID',
    'Member ID',
    'Member Name',
    'Provider',
    'Client',
    'Service Class',
  ];

  const rows = Array.from({ length: 12 }, (_, i) => ({
    ID: (55907 + i).toString(),
    'Member ID': '2083744',
    'Member Name': 'Mustafa Ibrahim Zaghloul',
    Provider: 'El Ezaby',
    Client: 'My Gas Company',
    'Service Class': 'Acute Medication',
  }));

  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Approvals Management</MainHeader>
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
                  className=" text-2xl "
                  onClick={() => alert(`activate ${row.Name}`)}
                >
                  <MdLocalPrintshop />
                </button>
                <button
                  className="text-[#4285F4] text-2xl "
                  onClick={() => alert(`deactivate ${row.Name}`)}
                >
                  <SiGoogledocs />
                </button>
              </div>
            ),
          },
        ]}
        extendableData={{
          render: () => (
            <div className="w-[90%] m-auto mt-5 flex flex-col ">
              <h3 className="text-lg text-[#1F4ED6]">Timeline</h3>
              <Table cols={['Date', 'Source']} data={[]} checkbox={false} />
            </div>
          ),
        }}
      />
      <TablePagiation />
      <DragAndDrop />
    </div>
  );
};

export default ApprovalsManagement;
