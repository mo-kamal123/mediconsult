import { FaRegPlusSquare } from 'react-icons/fa';
import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';
import { useState } from 'react';
import Modal from '../../../../shared/UI/modal';
import Form from '../../../../shared/UI/from';
import NewBranchForm from '../components/new-branch-form';
import ClientBranchTable from '../components/client-branch-table';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useClientById from '../hooks/useClientById';
import { addBranch, updateBranch } from '../store/client-data-slice';
import { useQueryClient } from '@tanstack/react-query';
import useUpdateClient from '../hooks/useUpdateClient';

const BranchInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clientId } = useParams(); // get clientId from url params
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const reduxBranches = useSelector((state) => state.clientData.Branches);

  // Fetch client data - this will update Redux automatically
  const { data: client, isLoading, isError } = useClientById(clientId);

  // Use Redux branches if they exist, otherwise use fetched client branches
  const finalBranches =
    reduxBranches && reduxBranches.length > 0
      ? reduxBranches
      : client?.Branches || [];

  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId); // update client mutation hook

  // Table headers
  const headers = ['ID', 'Branch Name', 'Members Count', 'Branch Status'];
  const colkey = ['Id', 'BranchName', 'MemberCount', 'BranchStatusName'];

  const handleSaveNewBranch = (branchData) => {
    // Add new branch to Redux (will show immediately in table)
    dispatch(addBranch(branchData));
    setIsModalOpen(false);
  };

  const handleSaveEditedBranch = (branchId, branchData) => {
    // Update branch in Redux
    dispatch(updateBranch({ id: branchId, data: branchData }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('Branches', JSON.stringify(finalBranches));

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
      <ClientBranchTable
        colskey={colkey}
        headers={headers}
        data={finalBranches}
        type={'update'}
        onSaveEditedBranch={handleSaveEditedBranch}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewBranchForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveNewBranch}
        />
      </Modal>
    </div>
  );
};

export default BranchInfo;
