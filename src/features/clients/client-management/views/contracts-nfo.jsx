import Table from '../../../../shared/UI/table';

const ContractsInfo = () => {
  // Table headers
  const headers = [
    'Id',
    'Start Date',
    'Expire Date',
    'Total Amount',
    'Total Members',
    'Insurance Company',
  ];
  // Sample data rows
  const rows = [
    {
      Id: 1001,
      'Start Date': '01 Jan 2024',
      'Expire Date': '31 Dec 2024',
      'Total Amount': '$50,000',
      'Total Members': 120,
      'Insurance Company': 'MedLife Insurance',
    },
    {
      Id: 1002,
      'Start Date': '15 Feb 2024',
      'Expire Date': '14 Feb 2025',
      'Total Amount': '$75,000',
      'Total Members': 200,
      'Insurance Company': 'Allied Assurance',
    },
    {
      Id: 1003,
      'Start Date': '01 Mar 2024',
      'Expire Date': '28 Feb 2025',
      'Total Amount': '$60,000',
      'Total Members': 150,
      'Insurance Company': 'SecureHealth Co.',
    },
    {
      Id: 1004,
      'Start Date': '10 Apr 2024',
      'Expire Date': '09 Apr 2025',
      'Total Amount': '$40,000',
      'Total Members': 95,
      'Insurance Company': 'TrustCare Insurance',
    },
    {
      Id: 1005,
      'Start Date': '01 May 2024',
      'Expire Date': '30 Apr 2025',
      'Total Amount': '$90,000',
      'Total Members': 300,
      'Insurance Company': 'Unity Life Corp.',
    },
    {
      Id: 1006,
      'Start Date': '20 Jun 2024',
      'Expire Date': '19 Jun 2025',
      'Total Amount': '$65,000',
      'Total Members': 180,
      'Insurance Company': 'PrimeHealth Insurance',
    },
    {
      Id: 1007,
      'Start Date': '01 Jul 2024',
      'Expire Date': '30 Jun 2025',
      'Total Amount': '$70,000',
      'Total Members': 220,
      'Insurance Company': 'SafeGuard Life',
    },
    {
      Id: 1008,
      'Start Date': '15 Aug 2024',
      'Expire Date': '14 Aug 2025',
      'Total Amount': '$55,000',
      'Total Members': 130,
      'Insurance Company': 'GreenShield Insurance',
    },
    {
      Id: 1009,
      'Start Date': '01 Sep 2024',
      'Expire Date': '31 Aug 2025',
      'Total Amount': '$85,000',
      'Total Members': 275,
      'Insurance Company': 'BlueCrest Assurance',
    },
    {
      Id: 1010,
      'Start Date': '10 Oct 2024',
      'Expire Date': '09 Oct 2025',
      'Total Amount': '$95,000',
      'Total Members': 320,
      'Insurance Company': 'NovaCare Insurance',
    },
  ];

  return (
    <div>
      {/* <div className="flex justify-end">
        <Btn className="w-fit text-sm !bg-[#1F4ED6]">
          <span className="bg-white text-[#1F4ED6] px-1 mr-1">+</span> Add New
        </Btn>
      </div> */}
      <Table cols={headers} data={rows}></Table>
      {/* <div className="flex justify-end gap-5">
        <Btn className="!bg-[#1F4ED6] px-5 !py-[1px]">Save</Btn>
        <Btn className="!bg-white border border-red-400 !text-red-400">
          cancel
        </Btn>
      </div> */}
    </div>
  );
};

export default ContractsInfo;
