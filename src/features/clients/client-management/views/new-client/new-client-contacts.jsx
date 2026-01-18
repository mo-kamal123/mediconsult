import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../../../../shared/UI/Btn';
import Modal from '../../../../../shared/UI/modal';
import ClientContactsTable from '../../components/client-contacts-table';
import NewContactForm from '../../components/new-contact-form';
import FormBtn from '../../../../../shared/UI/form-Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/client-data-slice';

const NewClientContacts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = ['Name', 'Job Title', 'Email', 'Mobile', 'Address', 'Note'];
  const colskey = ['Name', 'JobTitle', 'Email', 'Mobile', 'Address', 'Note'];

  const handleSaveContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleNext = () => {
    navigate('/clients/new-client/branch-info');
  };

  const handlePrevious = () => {
    navigate('/clients/new-client/client-info');
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

      <ClientContactsTable
        colskey={colskey}
        headers={headers}
        data={clientData.Contacts}
        type="create"
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewContactForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveContact}
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

export default NewClientContacts;
