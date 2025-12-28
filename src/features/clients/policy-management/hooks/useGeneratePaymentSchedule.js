import { useMutation, useQueryClient } from '@tanstack/react-query';
import { generatePolicyPaymentSchedule } from '../api/policyApi';
import { toast } from 'sonner';

/**
 * Custom hook for generating payment schedule
 * @param {number|string} policyId - Policy ID
 * @returns {Object} React Query mutation object
 */
const useGeneratePaymentSchedule = (policyId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleData) =>
      generatePolicyPaymentSchedule(policyId, scheduleData),
    onSuccess: () => {
      // Invalidate payments query to refetch updated data
      queryClient.invalidateQueries(['policies', policyId, 'payments']);
      toast.success('Payment schedule generated successfully ✔');
    },
    onError: () => {
      toast.error('Failed to generate payment schedule, try again later ❌');
    },
  });
};

export default useGeneratePaymentSchedule;
