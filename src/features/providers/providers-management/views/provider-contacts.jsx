import { BsFillPlusSquareFill } from 'react-icons/bs';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { CiImport } from 'react-icons/ci';

const ProviderContacts = () => {
  const tableHeaders = ['Name', 'job Title', 'Email', 'Mobile', 'Notes'];
  const actions = [
    {
      type: 'AddColumn',
      Icon: BsFillPlusSquareFill,
      label: 'Add New',
    },
    {
      type: 'AddColumn',
      Icon: CiImport,
      label: 'Import Contacts',
    },
  ];
  return (
    <div>
      <TableActions tableheaders={tableHeaders} actions={actions} />
      <Table
        cols={tableHeaders}
        data={[]}
        checkbox={false}
        leadingData={{
          col: 'Actions',
          render: (row) => (
            <button
              className="text-[#DC0600] pl-2 "
              onClick={() => alert(`delete ${row['EN Address']}`)}
            >
              Delete
            </button>
          ),
        }}
      />
    </div>
  );
};

export default ProviderContacts;
