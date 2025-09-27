import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { RiFileExcel2Fill } from 'react-icons/ri';

const PricelistDatabase = () => {
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
  ];
  const tableHeaders = ['ID', 'Name ( EN )', 'Name ( AR )', 'CPT', 'Price'];
  const tableData = [
    {
      ID: 23662,
      'Name ( EN )': 'Atomic scan lung',
      'Name ( AR )': 'مسح ذرى على الرئة',
      CPT: '76942',
      Price: 2000,
    },
    {
      ID: 23663,
      'Name ( EN )': 'CT Brain',
      'Name ( AR )': 'أشعة مقطعية على المخ',
      CPT: '70450',
      Price: 1500,
    },
    {
      ID: 23664,
      'Name ( EN )': 'MRI Spine',
      'Name ( AR )': 'رنين مغناطيسى على العمود الفقرى',
      CPT: '72148',
      Price: 2800,
    },
    {
      ID: 23665,
      'Name ( EN )': 'Ultrasound Abdomen',
      'Name ( AR )': 'سونار على البطن',
      CPT: '76700',
      Price: 900,
    },
    {
      ID: 23666,
      'Name ( EN )': 'X-ray Chest',
      'Name ( AR )': 'أشعة عادية على الصدر',
      CPT: '71020',
      Price: 500,
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 bg-white border border-borders rounded-2xl shadow-sm">
      <h3 className="font-semibold text-lg text-[#1F4ED6]">
        Pricelist Database
      </h3>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table cols={tableHeaders} data={tableData} />
      <TablePagiation />
    </div>
  );
};

export default PricelistDatabase;
