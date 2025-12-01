import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../../../../shared/UI/Btn';
import Modal from '../../../../../shared/UI/modal';
import ClientMembersTable from '../../components/client-members-table';
import NewMemberForm from '../../components/new-member-form';
import FormBtn from '../../../../../shared/UI/form-Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from '../../store/client-data-slice';

const NewClientMembers = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  console.log(clientData.members);
  // Table headers
  const tableHeaders = [
    'Name',
    'Birthday',
    'Age',
    'Client',
    'Branch',
    'Program',
    'Status',
    'Mobile',
  ];
  const colskey = [
    'name',
    'birthday',
    'age',
    'client',
    'branch',
    'programName',
    'statusName',
    'mobile',
  ];
  const handleSaveMember = (member) => {
    dispatch(addMember(member));
  };

  const handleFinish = () => {
    // Log all collected data
    console.log(clientData);

    // Navigate back to clients list or show success message
    navigate('/clients');
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
        members={clientData.members}
        type="create"
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewMemberForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveMember}
        />
      </Modal>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-end mt-5">
        <FormBtn role={'delete'} type="button" onClick={handlePrevious}>
          Previous
        </FormBtn>
        <FormBtn role={'save'} type="button" onClick={handleFinish}>
          Finish
        </FormBtn>
      </div>
    </div>
  );
};

export default NewClientMembers;
