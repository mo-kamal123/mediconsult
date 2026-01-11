import { useMutation, useQueryClient } from '@tanstack/react-query';
import { copyPolicy } from '../api/policyApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for copying/duplicating a policy
 * @returns {Object} React Query mutation object
 */
const useCopyPolicy = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (policyId) => copyPolicy(policyId),
    onSuccess: (data) => {
      // Invalidate policies list to refetch
      queryClient.invalidateQueries(['policies']);
      toast.success('Policy copied successfully ✔');
      // Navigate to the new copied policy if ID is returned
      if (data?.id || data?.Id) {
        navigate(`/policy/${data.id || data.Id}`);
      } else {
        navigate('/policy');
      }
    },
    onError: () => {
      toast.error('Failed to copy policy, try again later ❌');
    },
  });
};

export default useCopyPolicy;
