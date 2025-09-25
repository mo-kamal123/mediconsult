import { MdFilterAltOff } from 'react-icons/md';
import MainHeader from '../../../../shared/UI/main-header';
import TableActions from '../../../../shared/UI/table-actions';
import Table from '../../../../shared/UI/table';
import TablePagiation from '../../../../shared/UI/table-pagiation';

const ApprovalsManagement = () => {
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
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
        extendableData={{
          render: (row) => (
            <div className="w-[90%] m-auto mt-5 flex flex-col ">
              <h3 className="text-lg text-[#1F4ED6]">Timeline</h3>
              <Table cols={['Date', 'Source']} data={[]} checkbox={false}/>
            </div>
          ),
        }}
      />
      <TablePagiation />
    </div>
  );
};

export default ApprovalsManagement;
