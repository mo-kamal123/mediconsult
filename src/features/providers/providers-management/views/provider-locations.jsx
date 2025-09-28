import { BsFillPlusSquareFill } from 'react-icons/bs';
import TableActions from '../../../../shared/UI/table-actions';
import { CiImport } from 'react-icons/ci';
import Table from '../../../../shared/UI/table';

const ProviderLocations = () => {
  const tableheaders = [
    'Government',
    'City',
    'EN Area',
    'AR Area',
    'EN Address',
    'AR Address',
  ];
  const actions = [
    {
      type: 'AddColumn',
      Icon: BsFillPlusSquareFill,
      label: 'Add New',
    },
    {
      type: 'AddColumn',
      Icon: CiImport,
      label: 'Import Locations',
    },
  ];
  const rows = [
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
  ];

  return (
    <div>
      <TableActions tableheaders={tableheaders} actions={actions} />
      <Table
        cols={tableheaders}
        data={rows}
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

export default ProviderLocations;
