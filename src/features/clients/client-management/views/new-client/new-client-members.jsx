import { useState } from 'react';
import Btn from '../../../../../shared/UI/Btn';
import Modal from '../../../../../shared/UI/modal';
import ClientMembersTable from '../../components/client-members-table';

const NewClientMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
// Table headers
const tableHeaders = [
    'Name',
    'OldID',
    'Birthday',
    'Age',
    'Client',
    'Branch',
    'Program',
    'Status',
    'Mobile',
  ];
  return (
    <div>
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
      <ClientMembersTable headers={tableHeaders} data={[]} type="create" />
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* <NewClientMemberForm onClose={() => setIsModalOpen(false)} /> */}
        <div className="p-5 text-center text-gray-600">
          Create Member Form Goes Here
        </div>
      </Modal>
    </div>
  );
};

export default NewClientMembers;
