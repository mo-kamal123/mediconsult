import { useState } from 'react';
import {
  FaUser,
  FaBuilding,
  FaIdCard,
  FaStar,
  FaCalendarAlt,
  FaPhone,
} from 'react-icons/fa';
import DragAndDrop from '../UI/drag&drop';
import Modal from '../UI/modal';
import { useNavigate } from 'react-router-dom';
import { TbNotes } from 'react-icons/tb';

const MemberInfoCard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Member data - replace with API data
  const member = {
    image: '',
    name: 'Ibrahim Hamdy Ibrahim',
    gender: 'Male',
    jobTitle: 'Accountant',
    birthDate: '23 Sept 1997',
    mobile: '01273463818',
    companyName: 'Domty',
    companyCode: '24323',
    cardNumber: '2080206',
    note: '',
    vip: 'No',
    program: 'White - B',
    addDate: '14 Jul 2024',
    coverage: '20,000',
    totalApprovals: '309',
    totalExpenses: '1,404',
    remaining: '18,596',
    totalClaims: '1,095',
    debitSpent: '-',
    exceedPoolSpent: '-',
    exceedPoolLimit: '-',
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
        <h2 className="font-semibold text-[#1F4ED6] text-lg">
          Member Information
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Member Image */}
          <div className="w-[180px] h-[220px] rounded overflow-hidden border border-gray-300 bg-gray-100 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt="Member"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser className="text-gray-400 text-6xl" />
            )}
          </div>

          {/* Left + Right Info Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-700 w-full">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-3">
              <p className="text-base">
                <strong>Member Name:</strong> {member.name}
              </p>
              <p className="text-base">
                <strong>Job Title:</strong> {member.jobTitle}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaPhone className="text-blue-600" />
                <strong>Mobil Number:</strong> {member.mobile}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaBuilding className="text-blue-600" />
                <strong>Company Name:</strong> {member.companyName}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaIdCard className="text-blue-600" />
                <strong>Company Code:</strong> {member.companyCode}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaIdCard className="text-blue-600" />
                <strong>Card Number:</strong> {member.cardNumber}
              </p>

              <p className="flex items-center gap-2 text-base">
                <TbNotes className="text-blue-600" />
                <strong>Note:</strong> {member.note || '-'}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-3">
              <p className="text-base">
                <strong>Gender:</strong> {member.gender}
              </p>
              <p className="text-base">
                <strong>Birth Date:</strong> {member.birthDate}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaStar className="text-blue-600" />
                <strong>VIP:</strong> {member.vip}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaIdCard className="text-blue-600" />
                <strong>Program:</strong> {member.program}
              </p>

              <p className="flex items-center gap-2 text-base">
                <FaCalendarAlt className="text-blue-600" />
                <strong>Add Date:</strong> {member.addDate}
              </p>
            </div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-4">
          <p className="text-base">
            <strong>Coverage:</strong> {member.coverage}
          </p>
          <p className="text-base">
            <strong>Total Approvals:</strong> {member.totalApprovals}
          </p>
          <p className="text-base">
            <strong>Total Expenses:</strong> {member.totalExpenses}
          </p>
          <p className="text-base">
            <strong>Remaining:</strong> {member.remaining}
          </p>
          <p className="text-base">
            <strong>Total Claims:</strong> {member.totalClaims}
          </p>
          <p className="text-base">
            <strong>Debit Spent:</strong> {member.debitSpent}
          </p>
          <p className="text-base">
            <strong>Exceed Pool Spent:</strong> {member.exceedPoolSpent}
          </p>
          <p className="text-base">
            <strong>Exceed Pool Limit:</strong> {member.exceedPoolLimit}
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="border px-4 py-2 rounded"
            onClick={() => navigate('/clients/10/members/5/member-info')}
          >
            History
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Attachment
          </button>
        </div>
      </div>

      {/* Attachment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DragAndDrop />
      </Modal>
    </>
  );
};

export default MemberInfoCard;
