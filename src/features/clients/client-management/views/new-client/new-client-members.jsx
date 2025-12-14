import { useDispatch, useSelector } from 'react-redux';
import useCreateClient from '../../hooks/useCreateClient';
import { addMember } from '../../store/client-data-slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormBtn from '../../../../../shared/UI/form-Btn';
import Btn from '../../../../../shared/UI/Btn';
import ClientMembersTable from '../../components/client-members-table';
import Modal from '../../../../../shared/UI/modal';
import NewMemberForm from '../../components/new-member-form';
import { useTransformClientData } from '../../hooks/useTransformClientData';

const NewClientMembers = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  const { mutate: createClient, isPending } = useCreateClient();
  const { formData } = useTransformClientData(clientData);
  console.log(formData);
  console.log(clientData.Branches);
  // Table headers
  const tableHeaders = [
    'Name',
    'Birthday',
    'job Title',
    'Branch',
    'Status',
    'Mobile',
  ];
  const colskey = [
    'Name',
    'Birthday',
    'JobTitle',
    'BranchName',
    'StatusId',
    'Mobile',
  ];
  const handleSaveMember = (member) => {
    dispatch(addMember(member));
  };

  const handleFinish = () => {
    createClient(formData);
  };

  const handlePrevious = () => {
    navigate('/clients/new-client/contracts-info');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Btn
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          <span className="bg-white text-[#1F4ED6] px-2 mr-1 rounded">+</span>
          Add New
        </Btn>
      </div>

      {/* Members Table Here */}
      <ClientMembersTable
        colskey={colskey}
        headers={tableHeaders}
        members={clientData.Members || []}
        type="create"
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewMemberForm
          branches={
            clientData.Branches.map((branch) => branch.BranchName) || []
          }
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveMember}
        />
      </Modal>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-end mt-5">
        <FormBtn role={'delete'} type="button" onClick={handlePrevious}>
          Previous
        </FormBtn>
        <FormBtn
          role={'save'}
          type="button"
          onClick={handleFinish}
          disabled={isPending}
        >
          {isPending ? 'Creating...' : 'Finish'}
        </FormBtn>
      </div>
    </div>
  );
};

export default NewClientMembers;
