import { useSelector } from 'react-redux';
import MainHeader from '../../../../shared/UI/main-header';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { RiFileExcel2Fill } from 'react-icons/ri';
import TablePagiation from '../../../../shared/UI/table-pagiation';

const ProvidersLocations = () => {
  const providerLocationsData = useSelector(
    (state) => state.providersLocations
  );
  const actions = [
    {
      type: 'AddColumn',
      Icon: BsFillPlusSquareFill,
      label: 'Add Column',
    },
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

  const tableHeaders = [
    'ID',
    'Provider',
    'Government',
    'City',
    'Area AR',
    'Address AR',
    'Hotline',
    'Mobile',
    'Telephone',
    'Category',
    'Status',
    'Network  ( A )',
    'Network  ( B )',
    'Allow Chronic Portal',
    'Online',
    'Priority',
  ];

  return (
    <div className="w-[95%] m-auto">
      <MainHeader>Providers Locations</MainHeader>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table cols={tableHeaders} data={providerLocationsData} />
      <TablePagiation />
    </div>
  );
};

export default ProvidersLocations;
