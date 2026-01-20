import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import Table from '../../../../shared/UI/table';
import Modal from '../../../../shared/UI/modal';
import Btn from '../../../../shared/UI/Btn';
import NewBranchForm from './new-branch-form';
import useDeleteBranch from '../hooks/branchs-hooks/useDeleteBranch';
import { useParams } from 'react-router-dom';
// (You must create this similar to NewContactForm)
// Your delete mutation

const ClientBranchTable = ({
  colskey,
  headers,
  data,
  type = 'update',
  onSaveEditedBranch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null); // row object
  const [modalType, setModalType] = useState(''); // "edit" or "delete"
  const { clientId } = useParams();

  const { mutate: deleteBranch } = useDeleteBranch();

  const handleSaveChanges = (updatedBranch) => {
    // Call parent's onSaveEditedBranch handler if available
    if (type === 'update' && onSaveEditedBranch && selectedBranch) {
      onSaveEditedBranch(selectedBranch.Id, updatedBranch);
    }
    setIsModalOpen(false);
    setSelectedBranch(null);
  };

  const handleDeleteBranch = () => {
    if (type === 'update' && selectedBranch) {
      deleteBranch([clientId, selectedBranch.Id]);
      setIsModalOpen(false);
      setSelectedBranch(null);
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
                {/* DELETE BUTTON */}
                <button
                  className="text-red-600 text-2xl"
                  onClick={() => {
                    setSelectedBranch(row);
                    setModalType('delete');
                    setIsModalOpen(true);
                  }}
                >
                  <MdDeleteForever />
                </button>

                {/* EDIT BUTTON */}
                <button
                  className="text-blue-500 text-2xl"
                  onClick={() => {
                    setSelectedBranch(row);
                    setModalType('edit');
                    setIsModalOpen(true);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            ),
          },
        ]}
      />

      {/* ---------------------- MODAL ---------------------- */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'delete' ? 'Delete Branch' : 'Edit Branch'}
        submitLabel={modalType === 'delete' ? 'Delete' : 'Save'}
        onSubmit={modalType === 'delete' ? handleDeleteBranch : undefined}
      >
        {modalType === 'delete' ? (
          <div className="p-6">
            <p>Are you sure you want to delete this branch?</p>
          </div>
        ) : (
          <div className="p-6">
            <NewBranchForm
              data={selectedBranch}
              title={'Edit Branch'}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedBranch(null);
              }}
              onSave={handleSaveChanges}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default ClientBranchTable;
