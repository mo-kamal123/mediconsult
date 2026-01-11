import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deletePolicy } from '../api/policyApi';

/**
 * Custom hook for deleting a policy
 * @returns {Object} React Query mutation object
 */
const useDeletePolicy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (policyId) => deletePolicy(policyId),
    onSuccess: () => {
      toast.success('Policy deleted successfully ✔');
      // Invalidate and refetch policies list
      queryClient.invalidateQueries(['policies']);
    },
    onError: () => {
      toast.error('Failed to delete policy, try again later ❌');
    },
  });
};

export default useDeletePolicy;
