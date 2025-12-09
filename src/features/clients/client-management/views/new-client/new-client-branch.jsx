import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../../../../shared/UI/Btn';
import { FaRegPlusSquare } from 'react-icons/fa';
import Modal from '../../../../../shared/UI/modal';
import NewBranchForm from '../../components/new-branch-form';
import ClientBranchTable from '../../components/client-branch-table';
import FormBtn from '../../../../../shared/UI/form-Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addBranch } from '../../store/client-data-slice';

const NewClientBranch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Table headers
  const headers = ['Branch Name', 'Members Count', 'Branch Status'];
  const colskey = ['BranchName', 'MemberCount', 'BranchStatusId'];
  const handleSaveBranch = (branch) => {
    dispatch(addBranch(branch));
  };

  const handleNext = () => {
    navigate('/clients/new-client/contracts-info');
  };

  const handlePrevious = () => {
    navigate('/clients/new-client/contact-info');
  };

  return (
    <div className="flex flex-col gap-6">
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
        colskey={colskey}
        headers={headers}
        data={clientData.Branches}
        type={'create'}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewBranchForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveBranch}
        />
      </Modal>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-end mt-5">
        <FormBtn role={'delete'} type="button" onClick={handlePrevious}>
          Previous
        </FormBtn>
        <FormBtn role={'save'} type="button" onClick={handleNext}>
          Next
        </FormBtn>
      </div>
    </div>
  );
};

export default NewClientBranch;
