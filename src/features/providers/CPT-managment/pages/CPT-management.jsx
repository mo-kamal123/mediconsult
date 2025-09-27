import { FaPlusSquare } from 'react-icons/fa';
import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { MdFilterAltOff } from 'react-icons/md';

const CPTManagement = () => {
  const tableheaders = [
    'ID',
    'Name (EN)',
    'Name (AR)',
    'CPT',
    'ICHI',
    'Category',
    'Count in Price List',
    'Status',
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
    {
      type: 'AddColumn',
      Icon: FaPlusSquare,
      label: 'New',
    },
  ];
  const cptData = [
    {
      ID: '66576',
      'Name (EN)': 'CBC',
      'Name (AR)': 'صورة دم كاملة',
      CPT: '85025',
      ICHI: '-',
      Category: 'Laboratory',
      'Count in Price List': '14',
      Status: 'Activated',
    },
    {
      ID: '66577',
      'Name (EN)': 'CBC',
      'Name (AR)': 'صورة دم كاملة',
      CPT: '85025',
      ICHI: '-',
      Category: 'Laboratory',
      'Count in Price List': '14',
      Status: 'Activated',
    },
    {
      ID: '66578',
      'Name (EN)': 'CBC',
      'Name (AR)': 'صورة دم كاملة',
      CPT: '85025',
      ICHI: '-',
      Category: 'Laboratory',
      'Count in Price List': '14',
      Status: 'Activated',
    },
    {
      ID: '66579',
      'Name (EN)': 'CBC',
      'Name (AR)': 'صورة دم كاملة',
      CPT: '85025',
      ICHI: '-',
      Category: 'Laboratory',
      'Count in Price List': '14',
      Status: 'Activated',
    },
    {
      ID: '66580',
      'Name (EN)': 'CBC',
      'Name (AR)': 'صورة دم كاملة',
      CPT: '85025',
      ICHI: '-',
      Category: 'Laboratory',
      'Count in Price List': '14',
      Status: 'Activated',
    },
  ];
  return (
    <div className="w-[95%] m-auto ">
      <MainHeader>Master CPT Management</MainHeader>
      <TableActions actions={actions} tableheaders={tableheaders} />
      <Table
        cols={tableheaders}
        data={cptData}
        checkbox={false}
        extendableData={{
          render: () => (
            <div className="w-[90%] m-auto mt-5 flex flex-col ">
              <h3 className="text-lg text-[#1F4ED6]">Price Lists</h3>
              <Table data={[]} cols={['view', 'name']} checkbox={false} />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default CPTManagement;
