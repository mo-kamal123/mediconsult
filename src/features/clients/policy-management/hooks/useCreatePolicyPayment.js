import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPolicyPayment } from '../api/policyApi';
import { toast } from 'sonner';

/**
 * Custom hook for creating a new policy payment
 * @param {number|string} policyId - Policy ID
 * @returns {Object} React Query mutation object
 */
const useCreatePolicyPayment = (policyId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (paymentData) => createPolicyPayment(policyId, paymentData),
    onSuccess: () => {
      // Invalidate payments query to refetch updated data
      queryClient.invalidateQueries(['policies', policyId, 'payments']);
      toast.success('Payment created successfully ✔');
    },
    onError: () => {
      toast.error('Failed to create payment, try again later ❌');
    },
  });
};

export default useCreatePolicyPayment;
