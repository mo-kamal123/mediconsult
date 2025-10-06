import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';

const MemberHistoryModal = () => {
  const actions = [];
  const tableheaders = [
    'Member Name',
    'Type',
    'Provider',
    'Date',
    'Name (EN)',
    'Name (Ar)',
    'Quantity',
  ];
  const data = [
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
    {
      'Member Name': 'Mohamed Medhat Rushdi',
      Type: 'Pharmacy Approval',
      Provider: 'Nahal Al-Leithy Pharmacy',
      Date: '20 Jan 2025',
      'Name (EN)': 'Creatinine',
      'Name (Ar)': 'كرياتين',
      Quantity: '3',
    },
  ];

  return (
    <div className="bg-white border border-borders p-4 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-[#1F4ED6] text-lg">Member History</h2>
      <div className="w-full mt-5">
        {/* <TableActions  tableheaders={tableheaders} /> */}
        <div className="max-h-130 overflow-auto ">
          <Table cols={tableheaders} data={data} checkbox={false} />
        </div>
      </div>
    </div>
  );
};

export default MemberHistoryModal;
