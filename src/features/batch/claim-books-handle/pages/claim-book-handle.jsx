import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiFileExcel2Fill } from 'react-icons/ri';
import MainHeader from '../../../../shared/UI/main-header';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { FiPlusSquare } from 'react-icons/fi';

const ClaimBooHandle = () => {
  const tableHeaders = [
    'Provider ID',
    'Provider Name',
    'Books Count',
    'First Serial',
    'Last Serial',
    'Date',
    'User Name',
  ];

  const data = [
    {
      'Provider ID': '2082199',
      'Provider Name': 'Garden City Hospital',
      'Books Count': '1',
      'First Serial': '200501',
      'Last Serial': '200550',
      Date: '01 Feb 2025',
      'User Name': 'Maged Shenouda',
    },
  ];
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
    {
      type: 'newClient',
      Icon: FiPlusSquare,
      label: 'New',
    },
  ];
  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Claim Book Handle</MainHeader>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table cols={tableHeaders} data={data} />
      <TablePagiation />
    </div>
  );
};

export default ClaimBooHandle;
