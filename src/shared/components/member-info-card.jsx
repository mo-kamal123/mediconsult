import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import DragAndDrop from '../UI/drag&drop';
import Modal from '../UI/modal';
import MemberHistoryModal from '../../features/approvals/approvals-management/components/member-history-modal';

const MemberInfoCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'history' or 'attachment'

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-6">
        <h2 className="font-semibold text-[#1F4ED6] text-lg">
          Member Information
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Member Image */}
          <div className="w-[150px] h-[180px] rounded overflow-hidden border border-gray-300 flex items-center justify-center bg-gray-100">
            <FaUser className="text-gray-400 text-6xl" />
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 text-sm text-gray-700">
            <div>
              <strong>Member Name:</strong> Mustafa Ibrahim Zaghloul
            </div>
            <div>
              <strong>Gender:</strong> Male
            </div>
            <div>
              <strong>Job Title:</strong> Accountant
            </div>
            <div>
              <strong>Birth Date:</strong> 07 Sept 1988
            </div>
            <div>
              <strong>Mobil Number:</strong> 01012211222
            </div>
            <div>
              <strong>Company Name:</strong> My Gas
            </div>
            <div>
              <strong>Company Code:</strong> 2169143
            </div>
            <div>
              <strong>Program:</strong> Gold A
            </div>
            <div>
              <strong>Card Number:</strong> 2083744
            </div>
            <div>
              <strong>VIP:</strong> No
            </div>
            <div>
              <strong>Add Date:</strong> 18 Nov 2024
            </div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-4">
          <div>
            <strong>Coverage:</strong> 60328.7671232877
          </div>
          <div>
            <strong>Total Approvals:</strong> 80.14
          </div>
          <div>
            <strong>Total Expenses:</strong> 80.14
          </div>
          <div>
            <strong>Remaining:</strong> 60328.7671232877
          </div>
          <div>
            <strong>Total Claims:</strong> 0
          </div>
          <div>
            <strong>Debit Spent:</strong> -
          </div>
          <div>
            <strong>Exceed Pool Limit:</strong> -
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="border px-4 py-2 rounded"
            onClick={() => {
              setModalType('history');
              setIsModalOpen(true);
            }}
          >
            History
          </button>
          <button
            onClick={() => {
              setModalType('attachment');
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Attachment
          </button>
        </div>
      </div>

      {/* Attachment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType === 'history' && <MemberHistoryModal />}
        {modalType === 'attachment' && <DragAndDrop />}
      </Modal>
    </>
  );
};

export default MemberInfoCard;
