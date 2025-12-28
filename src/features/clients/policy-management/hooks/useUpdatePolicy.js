import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePolicy } from '../api/policyApi';
import { toast } from 'sonner';

/**
 * Custom hook for updating an existing policy
 * @param {number|string} id - Policy ID to update
 * @returns {Object} React Query mutation object
 */
const useUpdatePolicy = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updatePolicy(id, data),
    onSuccess: () => {
      // Invalidate policy query to refetch updated data
      queryClient.invalidateQueries(['policies', id]);
      queryClient.invalidateQueries(['policies']); // Also invalidate list
      // ✅ success toast
      toast.success('Policy updated successfully ✔');
    },
    onError: () => {
      // ❌ error toast
      toast.error('Failed to update policy, try again later ❌');
    },
  });
};

export default useUpdatePolicy;
