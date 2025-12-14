import { MdDeleteForever } from 'react-icons/md';
import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../../../../shared/UI/modal';
import NewContractForm from './new-contract-form';
import useDeleteContract from '../hooks/contracts-hooks/useDeleteContract';
import { useParams } from 'react-router-dom';

const ClientContractsTable = ({
  colskey,
  headers,
  data,
  type = 'update',
  onSaveEditedContract,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [modalType, setModalType] = useState(''); // 'delete' or 'edit'
  const { clientId } = useParams();
  const { mutate: deleteContract } = useDeleteContract();

  // Find selected contract from data prop
  const selectedContractData = data.find(
    (contract) => contract.Id === selectedContract
  );

  const handleSaveChanges = (updatedContract) => {
    // Call parent's onSaveEditedContract handler if available
    if (type === 'update' && onSaveEditedContract) {
      onSaveEditedContract(selectedContract, updatedContract);
    }
    setIsModalOpen(false);
    setSelectedContract(null);
  };

  const handleDeleteContract = () => {
    if (type === 'update') {
      deleteContract([clientId, selectedContract]);
      setIsModalOpen(false);
      setSelectedContract(null);
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
                    setSelectedContract(row.Id);
                  }}
                >
                  <MdDeleteForever />
                </button>
                <button
                  className="text-blue-500 text-2xl"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalType('edit');
                    setSelectedContract(row.Id);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            ),
          },
        ]}
      />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedContract(null);
        }}
      >
        {modalType === 'delete' ? (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Delete Contract</h2>
            <p>Are you sure you want to delete this contract?</p>
            <div className="flex justify-end gap-4 mt-6">
              <Btn
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedContract(null);
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </Btn>
              <Btn
                onClick={handleDeleteContract}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </Btn>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <NewContractForm
              data={selectedContractData}
              title={'Edit Contract'}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedContract(null);
              }}
              onSave={handleSaveChanges}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default ClientContractsTable;
