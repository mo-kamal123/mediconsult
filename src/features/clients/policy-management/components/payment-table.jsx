import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import useCreatePolicyPayment from '../hooks/useCreatePolicyPayment';
import useDeletePolicyPayment from '../hooks/useDeletePolicyPayment';
import Loading from '../../../../shared/components/loading';
import ErrorState from '../../../../shared/components/error-state';

const PaymentTable = ({ policyId, payments = [], isLoading, isError }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [formData, setFormData] = useState({
    PaymentDate: '',
    PaymentValue: '',
    ActualPaidValue: '',
    ActualPaymentDate: '',
    Notes: '',
  });

  // API hooks
  const { mutate: createPayment, isPending: isCreating } =
    useCreatePolicyPayment(policyId);
  const { mutate: deletePayment, isPending: isDeleting } =
    useDeletePolicyPayment(policyId);

  const handleAddNew = () => {
    setEditingPayment(null);
    setFormData({
      PaymentDate: '',
      PaymentValue: '',
      ActualPaidValue: '',
      ActualPaymentDate: '',
      Notes: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (payment) => {
    setEditingPayment(payment);
    setFormData({
      PaymentDate: payment.PaymentDate || payment.paymentDate || '',
      PaymentValue:
        payment.PaymentValue?.toString() ||
        payment.paymentValue?.toString() ||
        '',
      ActualPaidValue:
        payment.ActualPaidValue?.toString() ||
        payment.actualPaidValue?.toString() ||
        '',
      ActualPaymentDate:
        payment.ActualPaymentDate || payment.actualPaymentDate || '',
      Notes: payment.Notes || payment.notes || '',
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e?.preventDefault();

    if (!formData.PaymentDate || !formData.PaymentValue) {
      alert('Please fill in required fields (Payment Date and Payment Value)');
      return;
    }

    // Format payment data according to API spec
    const paymentData = {
      Payments: [
        {
          Id: editingPayment?.Id || editingPayment?.id || 0,
          PolicyId: parseInt(policyId) || 0,
          PaymentDate: formData.PaymentDate,
          PaymentValue: parseFloat(formData.PaymentValue) || 0,
          ActualPaidValue: parseFloat(formData.ActualPaidValue) || 0,
          ActualPaymentDate: formData.ActualPaymentDate || formData.PaymentDate,
          Notes: formData.Notes || '',
        },
      ],
    };

    createPayment(paymentData);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPayment(null);
    setFormData({
      PaymentDate: '',
      PaymentValue: '',
      ActualPaidValue: '',
      ActualPaymentDate: '',
      Notes: '',
    });
  };

  const handleDelete = (payment) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      const paymentId = payment.Id || payment.id;
      if (paymentId) {
        deletePayment(paymentId);
      }
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Error state
  if (isError) {
    return (
      <ErrorState title="Error Loading Payments" message="Failed to load payments. Please try again later." className="w-full p-4" />
    );
  }

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
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                Actual Payment Date
              </th>
              <th className="text-left p-3 text-sm font-medium text-gray-700">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No payments found
                </td>
              </tr>
            ) : (
              payments.map((payment) => {
                const paymentId = payment.Id || payment.id;
                return (
                  <tr
                    key={paymentId}
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
                          onClick={() => handleDelete(payment)}
                          disabled={isDeleting}
                        />
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-700">
                        {formatDate(payment.PaymentDate || payment.paymentDate)}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-700">
                        {payment.PaymentValue || payment.paymentValue || '0'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-700">
                        {payment.ActualPaidValue ||
                          payment.actualPaidValue ||
                          '0'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-700">
                        {formatDate(
                          payment.ActualPaymentDate || payment.actualPaymentDate
                        )}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-700">
                        {payment.Notes || payment.notes || '-'}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSave}
        title={editingPayment ? 'Edit Payment' : 'Add New Payment'}
        submitLabel={isCreating ? 'Saving...' : editingPayment ? 'Save' : 'Add'}
      >
        <Input
          type="date"
          name="PaymentDate"
          label="Payment Date"
          value={formData.PaymentDate}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          step="0.01"
          name="PaymentValue"
          label="Payment Value"
          value={formData.PaymentValue}
          onChange={handleInputChange}
          placeholder="Payment Value"
          required
        />
        <Input
          type="number"
          step="0.01"
          name="ActualPaidValue"
          label="Actual Paid Value"
          value={formData.ActualPaidValue}
          onChange={handleInputChange}
          placeholder="Actual Paid Value"
        />
        <Input
          type="date"
          name="ActualPaymentDate"
          label="Actual Payment Date"
          value={formData.ActualPaymentDate}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="Notes"
          label="Notes"
          value={formData.Notes}
          onChange={handleInputChange}
          placeholder="Notes"
        />
      </Modal>
    </div>
  );
};

export default PaymentTable;
