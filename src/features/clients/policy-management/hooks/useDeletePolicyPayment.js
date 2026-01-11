import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePolicyPayment } from '../api/policyApi';
import { toast } from 'sonner';

/**
 * Custom hook for deleting a policy payment
 * @param {number|string} policyId - Policy ID (for cache invalidation)
 * @returns {Object} React Query mutation object
 */
const useDeletePolicyPayment = (policyId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (paymentId) => deletePolicyPayment(paymentId),
    onSuccess: () => {
      // Invalidate payments query to refetch updated data
      queryClient.invalidateQueries(['policies', policyId, 'payments']);
      toast.success('Payment deleted successfully ✔');
    },
    onError: () => {
      toast.error('Failed to delete payment, try again later ❌');
    },
  });
};

export default useDeletePolicyPayment;
