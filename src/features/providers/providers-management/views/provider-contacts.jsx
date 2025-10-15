import { BsFillPlusSquareFill } from 'react-icons/bs';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { CiImport } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const ProviderContacts = () => {
  const tableHeaders = ['Name', 'job Title', 'Email', 'Mobile', 'Notes'];
  const actions = [
    {
      type: 'newClient',
      Icon: BsFillPlusSquareFill,
      label: 'Add New',
    },
    {
      type: 'newClient',
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
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-center gap-2">
                <button
                  className="text-red-600 text-2xl"
                  onClick={() => alert(`delete ${row['EN Address']}`)}
                >
                  <MdDeleteForever />
                </button>
                <button
                  className="text-blue-500 text-2xl"
                  onClick={() => {
                    setSelectedLocation(row); // Pass row to form
                    setIsModalOpen(true);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ProviderContacts;
