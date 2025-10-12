import { FaRegPlusSquare } from 'react-icons/fa';
import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';

const ContractsInfo = () => {
  // Table headers
  const headers = [
    'ID',
    'Start Date',
    'Expire Date',
    'Total Amount',
    'Total Members',
    'Insurance Company',
  ];
  // Sample data rows
  const rows = [
    {
      ID: 1001,
      'Start Date': '01 Jan 2024',
      'Expire Date': '31 Dec 2024',
      'Total Amount': '$50,000',
      'Total Members': 120,
      'Insurance Company': 'MedLife Insurance',
    },
    {
      ID: 1002,
      'Start Date': '15 Feb 2024',
      'Expire Date': '14 Feb 2025',
      'Total Amount': '$75,000',
      'Total Members': 200,
      'Insurance Company': 'Allied Assurance',
    },
    {
      ID: 1003,
      'Start Date': '01 Mar 2024',
      'Expire Date': '28 Feb 2025',
      'Total Amount': '$60,000',
      'Total Members': 150,
      'Insurance Company': 'SecureHealth Co.',
    },
    {
      ID: 1004,
      'Start Date': '10 Apr 2024',
      'Expire Date': '09 Apr 2025',
      'Total Amount': '$40,000',
      'Total Members': 95,
      'Insurance Company': 'TrustCare Insurance',
    },
    {
      ID: 1005,
      'Start Date': '01 May 2024',
      'Expire Date': '30 Apr 2025',
      'Total Amount': '$90,000',
      'Total Members': 300,
      'Insurance Company': 'Unity Life Corp.',
    },
    {
      ID: 1006,
      'Start Date': '20 Jun 2024',
      'Expire Date': '19 Jun 2025',
      'Total Amount': '$65,000',
      'Total Members': 180,
      'Insurance Company': 'PrimeHealth Insurance',
    },
    {
      ID: 1007,
      'Start Date': '01 Jul 2024',
      'Expire Date': '30 Jun 2025',
      'Total Amount': '$70,000',
      'Total Members': 220,
      'Insurance Company': 'SafeGuard Life',
    },
    {
      ID: 1008,
      'Start Date': '15 Aug 2024',
      'Expire Date': '14 Aug 2025',
      'Total Amount': '$55,000',
      'Total Members': 130,
      'Insurance Company': 'GreenShield Insurance',
    },
    {
      ID: 1009,
      'Start Date': '01 Sep 2024',
      'Expire Date': '31 Aug 2025',
      'Total Amount': '$85,000',
      'Total Members': 275,
      'Insurance Company': 'BlueCrest Assurance',
    },
    {
      ID: 1010,
      'Start Date': '10 Oct 2024',
      'Expire Date': '09 Oct 2025',
      'Total Amount': '$95,000',
      'Total Members': 320,
      'Insurance Company': 'NovaCare Insurance',
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <Btn
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          <FaRegPlusSquare />
          Add New
        </Btn>
      </div>
      <Table cols={headers} data={rows}></Table>
    </div>
  );
};

export default ContractsInfo;
