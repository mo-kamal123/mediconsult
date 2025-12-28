import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import TableBtn from '../../../../shared/UI/table-Btn';
import PaymentTable from '../components/payment-table';
import usePolicyById from '../hooks/usePolicyById';
import usePolicyPayments from '../hooks/usePolicyPayments';
import useGeneratePaymentSchedule from '../hooks/useGeneratePaymentSchedule';
import Spinner from '../../../../shared/layout/spinner';

const PolicyPayments = () => {
  const { policyId } = useParams();
  // Fetch policy data
  const {
    data: policy,
    isLoading: policyLoading,
    isError: policyError,
  } = usePolicyById(policyId, {
    enabled: !!policyId,
  });

  // Fetch payments data
  const {
    data: paymentsData,
    isLoading: paymentsLoading,
    isError: paymentsError,
  } = usePolicyPayments(policyId);

  // Generate payment schedule mutation
  const { mutate: generatePaymentSchedule, isPending: isGenerating } =
    useGeneratePaymentSchedule(policyId);

  const [paymentNumber, setPaymentNumber] = useState('');

  const handleGeneratePayment = () => {
    if (!paymentNumber || parseInt(paymentNumber) <= 0) {
      alert('Please enter a valid payment number');
      return;
    }
    if (!policy?.TotalAmount || policy.TotalAmount <= 0) {
      alert('Total amount is not available. Please check the API connection.');
      return;
    }
    if (!policy?.StartDate) {
      alert('Start date is not available. Please check the API connection.');
      return;
    }

    // Prepare request body
    const scheduleData = {
      StartDate: policy.StartDate,
      NumberOfPayments: parseInt(paymentNumber),
      TotalAmount: policy.TotalAmount,
    };

    generatePaymentSchedule(scheduleData);
  };

  // Loading state
  if (policyLoading || paymentsLoading) {
    return <Spinner />;
  }

  // Error state
  if (policyError || !policy) {
    return (
      <div className="w-[95%] m-auto flex items-center justify-center p-8">
        <p className="text-red-600">Error loading policy data</p>
      </div>
    );
  }

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
              label={isGenerating ? 'Generating...' : 'Generate Payment'}
              handleClick={handleGeneratePayment}
              disabled={isGenerating}
            />
          </div>

          <PaymentTable
            policyId={policyId}
            payments={
              Array.isArray(paymentsData)
                ? paymentsData
                : paymentsData?.data || paymentsData?.Payments || []
            }
            isLoading={paymentsLoading}
            isError={paymentsError}
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyPayments;
