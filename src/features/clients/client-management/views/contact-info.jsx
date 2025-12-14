import { useState } from 'react';
import Btn from '../../../../shared/UI/Btn';
import Modal from '../../../../shared/UI/modal';
import ClientContactsTable from '../components/client-contacts-table';
import NewContactForm from '../components/new-contact-form';
import { useDispatch, useSelector } from 'react-redux';
import useClientById from '../hooks/useClientById';
import { useParams } from 'react-router-dom';
import {
  addContact,
  updateContact,
  clearContacts,
} from '../store/client-data-slice';
import useUpdateClient from '../hooks/useUpdateClient';
import { useQueryClient } from '@tanstack/react-query';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clientId } = useParams();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const reduxContacts = useSelector((state) => state.clientData.Contacts);

  // Fetch client data
  const { data: client, isLoading, isError } = useClientById(clientId);

  // Use Redux contacts if they exist, otherwise use fetched client contacts
  const finalContacts =
    reduxContacts?.length > 0 ? reduxContacts : client?.Contacts || [];

  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId);

  console.log('Redux Contacts:', reduxContacts);
  console.log('Client Data:', client);

  // Table headers
  const headers = [
    'ID',
    'Name',
    'Job Title',
    'Email',
    'Mobile',
    'Address',
    'Note',
  ];
  const colkey = [
    'Id',
    'Name',
    'JobTitle',
    'Email',
    'Mobile',
    'Address',
    'Note',
  ];

  const handleSaveNewContact = (contactData) => {
    const newContact = {
      ...contactData,
    };

    dispatch(addContact(newContact));
    setIsModalOpen(false);
  };

  const handleSaveEditedContact = (contactId, contactData) => {
    dispatch(updateContact({ id: contactId, data: contactData }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('ContactUs', JSON.stringify(finalContacts));

    updateClient(formData, {
      onSuccess: () => {
        // Clear Redux state after successful save
        dispatch(clearContacts());
        // Refetch will repopulate Redux with fresh data
        queryClient.invalidateQueries(['clients', clientId]);
      },
    });
  };

  const handleCancel = () => {
    // Reset to server data
    dispatch(clearContacts());
    queryClient.invalidateQueries(['clients', clientId]);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading client data</div>;

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
      <ClientContactsTable
        colskey={colkey}
        headers={headers}
        data={finalContacts}
        type="update"
        onSaveEditedContact={handleSaveEditedContact}
      />

      {/* Save + Cancel Buttons */}
      <div className="flex items-center justify-end gap-5 mt-5">
        <Btn
          onClick={handleSubmit}
          disabled={clientPending}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800 disabled:opacity-50"
        >
          {clientPending ? 'Saving...' : 'Save'}
        </Btn>
        <Btn
          onClick={handleCancel}
          className="flex items-center justify-center gap-2 w-fit px-7 py-3 !bg-white border border-red-400 !text-red-400 hover:bg-red-50"
        >
          Cancel
        </Btn>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewContactForm
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveNewContact}
        />
      </Modal>
    </div>
  );
};

export default ContactInfo;
