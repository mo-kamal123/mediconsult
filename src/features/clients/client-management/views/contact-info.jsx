import { useState } from 'react';
import Btn from '../../../../shared/UI/Btn';
import Modal from '../../../../shared/UI/modal';
import ClientContactsTable from '../components/client-contacts-table';
import NewContactForm from '../components/new-contact-form';
import { useSelector } from 'react-redux';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useSelector((state) => state.clientData)
  console.log(data);
  // Table headers
  const headers = ['Name', 'Job Title', 'Email', 'Mobile', 'Address', 'Note'];
  const colkey = ['Name', 'JobTitle', 'Email', 'Mobile', 'Address', 'Note'];

  return (
    <div>
      {/* Add New Button */}
      <div className="flex justify-end">
        <Btn
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          <span className="bg-white text-[#1F4ED6] px-2 mr-1 rounded">+</span>
          Add New
        </Btn>
      </div>

      {/* Table */}
      <ClientContactsTable colskey={colkey} headers={headers}  data={data.Contacts} />

      {/* Save + Cancel Buttons */}
      <div className="flex items-center justify-end gap-5 mt-5">
        <Btn className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800">
          Save
        </Btn>
        <Btn className="flex items-center justify-center gap-2 w-fit px-7 py-3 !bg-white border border-red-400 !text-red-400">
          Cancel
        </Btn>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default ContactInfo;
