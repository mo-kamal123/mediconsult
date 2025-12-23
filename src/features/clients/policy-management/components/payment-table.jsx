import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import TableBtn from '../../../../shared/UI/table-Btn';

const PaymentTable = ({ paymentNumber, totalAmount, onGeneratePayment }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [payments, setPayments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    paymentDate: '',
    paymentValue: '',
    actualPaidValue: '',
  });

  const totalPages = 3;
  const totalItems = 12;

  // Generate payments when trigger is activated
  useEffect(() => {
    if (
      onGeneratePayment > 0 &&
      paymentNumber &&
      totalAmount > 0 &&
      parseInt(paymentNumber) > 0
    ) {
      const numberOfPayments = parseInt(paymentNumber);
      const paymentValue = (totalAmount / numberOfPayments).toFixed(2);

      const generatedPayments = Array.from(
        { length: numberOfPayments },
        (_, i) => ({
          id: i + 1,
          paymentDate: '', // Will be filled by user
          paymentValue: paymentValue,
          actualPaidValue: '0',
        })
      );

      setPayments(generatedPayments);
    }
  }, [onGeneratePayment, paymentNumber, totalAmount]);

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      paymentDate: '',
      paymentValue: '',
      actualPaidValue: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (payment) => {
    setEditingId(payment.id);
    setFormData({
      paymentDate: payment.paymentDate,
      paymentValue: payment.paymentValue,
      actualPaidValue: payment.actualPaidValue,
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingId) {
      setPayments(
        payments.map((payment) =>
          payment.id === editingId ? { ...payment, ...formData } : payment
        )
      );
    } else {
      const newPayment = {
        id: Math.max(...payments.map((p) => p.id), 0) + 1,
        ...formData,
      };
      setPayments([...payments, newPayment]);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      paymentDate: '',
      paymentValue: '',
      actualPaidValue: '',
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      setPayments(payments.filter((payment) => payment.id !== id));
    }
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Plus
                    className="text-blue-600 cursor-pointer w-5 h-5 hover:text-blue-700"
                    strokeWidth={2}
                    onClick={handleAddNew}
                  />
                  <span>New</span>
                </div>
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                Payment Date
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                Payment Value
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                Actual Paid Value
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <Edit2
                      className="text-gray-600 cursor-pointer w-5 h-5 hover:text-blue-600"
                      onClick={() => handleEdit(payment)}
                    />
                    <Trash2
                      className="text-red-600 cursor-pointer w-5 h-5 hover:text-red-700"
                      onClick={() => handleDelete(payment.id)}
                    />
                  </div>
                </td>
                <td className="p-3">
                  <span className="text-sm text-gray-700">
                    {payment.paymentDate}
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-sm text-gray-700">
                    {payment.paymentValue}
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-sm text-gray-700">
                    {payment.actualPaidValue}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="text-sm text-gray-600">
          Page 1 to {totalPages} ({totalItems} Items)
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSave}
        title={editingId ? 'Edit Payment' : 'Add New Payment'}
        submitLabel={editingId ? 'Save' : 'Add'}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#1F4ED6]">
            {editingId ? 'Edit Payment' : 'Add New Payment'}
          </h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <Input
          type="date"
          name="paymentDate"
          label="Payment Date"
          value={formData.paymentDate}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="paymentValue"
          label="Payment Value"
          value={formData.paymentValue}
          onChange={handleInputChange}
          placeholder="Payment Value"
          required
        />
        <Input
          type="text"
          name="actualPaidValue"
          label="Actual Paid Value"
          value={formData.actualPaidValue}
          onChange={handleInputChange}
          placeholder="Actual Paid Value"
        />
        <div className="flex items-center justify-end gap-3 mt-4">
          <TableBtn
            type="clearFilter"
            label={editingId ? 'Save' : 'Add'}
            handleClick={handleCloseModal}
          />
          <TableBtn
            type="AddColumn"
            label={editingId ? 'Save' : 'Add'}
            handleClick={(e) => {
              e.preventDefault();
              handleSave(e);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PaymentTable;
