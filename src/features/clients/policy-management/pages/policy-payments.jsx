import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import TableBtn from '../../../../shared/UI/table-Btn';
import PaymentTable from '../components/payment-table';

const PolicyPayments = () => {
  const { policyId } = useParams();
  const [paymentNumber, setPaymentNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState(0); // This will come from API
  const [triggerGenerate, setTriggerGenerate] = useState(0);

  // TODO: Fetch total amount from API based on policyId
  useEffect(() => {
    // Example: fetch(`/api/policies/${policyId}`)
    //   .then(res => res.json())
    //   .then(data => setTotalAmount(data.totalAmount));

    // Mock data for now
    setTotalAmount(1000);
  }, [policyId]);

  const handleGeneratePayment = () => {
    if (!paymentNumber || paymentNumber <= 0) {
      alert('Please enter a valid payment number');
      return;
    }
    if (!totalAmount || totalAmount <= 0) {
      alert('Total amount is not available. Please check the API connection.');
      return;
    }
    // Trigger payment generation in PaymentTable
    setTriggerGenerate((prev) => prev + 1);
  };

  return (
    <div className="w-[95%] m-auto flex flex-col gap-6">
      <MainHeader>Policy Payments - {policyId}</MainHeader>
      <div className="flex flex-col gap-4">
        <div className="bg-white border border-borders rounded-2xl p-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <label className="text-sm text-gray-700 md:w-1/6 w-full md:text-right pr-2 flex items-center">
              Payment Number
            </label>
            <input
              type="number"
              className="border border-borders rounded-lg px-3 py-2 flex-1 min-w-[200px]"
              placeholder="Payment Number"
              value={paymentNumber}
              onChange={(e) => setPaymentNumber(e.target.value)}
            />
            <TableBtn
              type="AddColumn"
              label="Generate Payment"
              handleClick={handleGeneratePayment}
            />
          </div>

          <PaymentTable
            paymentNumber={paymentNumber}
            totalAmount={totalAmount}
            onGeneratePayment={triggerGenerate}
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyPayments;
