import { useMutation } from '@tanstack/react-query';
import { createPolicy } from '../api/policyApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for creating a new policy
 * @returns {Object} React Query mutation object
 */
const useCreatePolicy = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createPolicy,
    onSuccess: () => {
      // ✅ success toast
      toast.success('Policy created successfully ✔');
      navigate('/policy'); // navigate back to policies list
    },
    onError: () => {
      // ❌ error toast
      toast.error('Failed to create policy, try again later ❌');
    },
  });
};

export default useCreatePolicy;
