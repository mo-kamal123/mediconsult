import { useState } from 'react';
import Btn from '../../../../../shared/UI/Btn';
import { FaRegPlusSquare } from 'react-icons/fa';
import Modal from '../../../../../shared/UI/modal';
import NewBranchForm from '../../components/new-branch-form';
import Table from '../../../../../shared/UI/table';
import ClientBranchTable from '../../components/client-branch-table';

const NewClientBranch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Table headers
  const headers = ['Branch Name', 'Members Count', 'Branch Status'];
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
      <ClientBranchTable  headers={headers} data={[]} type={'create'} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewBranchForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};
export default NewClientBranch;
