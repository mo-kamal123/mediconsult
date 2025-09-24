import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const ProviderFinancial = () => {
  const tableHeaders = ['Clearance Date'];
  const actions = [
    {
      type: 'AddColumn',
      Icon: BsFillPlusSquareFill,
      label: 'Add New',
    },
  ];
  return (
    <div>
      <h3 className="font-semibold text-lg text-[#1F4ED6]">
        Financial clearance
      </h3>

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
      {/* Buttons */}
      <div className="flex gap-6 justify-end">
        <button
          className="border border-[#F56C6C] text-[#F56C6C] py-2 px-6 rounded-lg"
          type="submit"
        >
          Delete
        </button>
        <button
          className="bg-blue-500 py-2 px-6 text-white rounded-lg"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProviderFinancial;
