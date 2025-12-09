import { MdDeleteForever } from 'react-icons/md';
import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../../../../shared/UI/modal';
import NewContactForm from './new-contact-form';
import useDeleteContact from '../hooks/contacts-hooks/useDeleteContact';
import { useParams } from 'react-router-dom';

const ClientContactsTable = ({
  colskey,
  headers,
  data,
  type = 'update',
  onSaveEditedContact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalType, setModalType] = useState(''); // 'delete' or 'edit'
  const { clientId } = useParams();
  const { mutate: deleteContact } = useDeleteContact();

  // Find selected contact from data prop
  const selectedContactData = data.find(
    (contact) => contact.Id === selectedContact
  );

  const handleSaveChanges = (updatedContact) => {
    // Call parent's onSaveEditedContact handler if available
    if (type === 'update' && onSaveEditedContact) {
      onSaveEditedContact(selectedContact, updatedContact);
    }
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  const handleDeleteContact = () => {
    if (type === 'update') {
      deleteContact([clientId, selectedContact]);
      setIsModalOpen(false);
      setSelectedContact(null);
    }
  };
  return (
    <>
      <Table
        colkey={colskey}
        cols={headers}
        data={data}
        checkbox={false}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-center gap-2">
                <button
                  className="text-red-600 text-2xl"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalType('delete');
                    setSelectedContact(row.Id);
                  }}
                >
                  <MdDeleteForever />
                </button>
                <button
                  className="text-blue-500 text-2xl"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalType('edit');
                    setSelectedContact(row.Id);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            ),
          },
        ]}
      ></Table>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType === 'delete' ? (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Delete Contact</h2>
            <p>Are you sure you want to delete this contact?</p>
            <div className="flex justify-end gap-4 mt-6">
              <Btn
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </Btn>
              <Btn
                onClick={handleDeleteContact}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </Btn>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <NewContactForm
              data={selectedContactData}
              title={'Edit Contact'}
              onClose={() => setIsModalOpen(false)}
              onSave={handleSaveChanges}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default ClientContactsTable;
