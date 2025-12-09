import { useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import Btn from '../../../../shared/UI/Btn';
import Modal from '../../../../shared/UI/modal';
import ClientContractsTable from '../components/client-contracts-table';
import NewContractForm from '../components/new-contract-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useClientById from '../hooks/useClientById';
import { addContract, updateContract } from '../store/client-data-slice';
import { useQueryClient } from '@tanstack/react-query';
import useUpdateClient from '../hooks/useUpdateClient';

const ContractsInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clientId } = useParams(); // get clientId from url params
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const reduxContracts = useSelector((state) => state.clientData.Contracts);

  // Fetch client data - this will update Redux automatically
  const { data: client, isLoading, isError } = useClientById(clientId);

  // Use Redux contracts if they exist, otherwise use fetched client contracts
  const finalContracts =
    reduxContracts && reduxContracts.length > 0
      ? reduxContracts
      : client?.Contracts || [];

  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId); // update client mutation hook
  // Table headers
  const headers = [
    'ID',
    'Start Date',
    'Expire Date',
    'Total Amount',
    'Total Members',
    'Insurance Company',
  ];
  const colkey = [
    'Id',
    'StartDate',
    'ExpireDate',
    'TotalAmount',
    'TotalMembers',
    'InsuranceCompanyId',
  ];

  const handleSaveNewContract = (contractData) => {
    // Add new contract to Redux (will show immediately in table)
    dispatch(addContract(contractData));
    setIsModalOpen(false);
  };

  const handleSaveEditedContract = (contractId, contractData) => {
    // Update contract in Redux
    dispatch(updateContract({ id: contractId, data: contractData }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('Contracts', JSON.stringify(finalContracts));

    updateClient(formData);
    // useUpdateClient already invalidates queries on success
    // useClientById will automatically update Redux store when data refetches
  };
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
      <ClientContractsTable
        colskey={colkey}
        headers={headers}
        data={finalContracts}
        type={'update'}
        onSaveEditedContract={handleSaveEditedContract}
      />

      {/* Save + Cancel Buttons */}
      <div className="flex items-center justify-end gap-5 mt-5">
        <Btn
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          Save
        </Btn>
        <Btn className="flex items-center justify-center gap-2 w-fit px-7 py-3 !bg-white border border-red-400 !text-red-400">
          Cancel
        </Btn>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewContractForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveNewContract}
        />
      </Modal>
    </div>
  );
};

export default ContractsInfo;
