// useDeleteBranch.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteBranch } from '../../api/clientApi';

const useDeleteBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ([clientId, branchId]) => deleteBranch(clientId, branchId),
    onSuccess: (data, variables) => {
      const [clientId] = variables;
      toast.success('Branch deleted ✔');
      // Invalidate and refetch client data
      queryClient.invalidateQueries(['clients', clientId]);
    },
    onError: () => toast.error('Failed to delete branch ❌'),
  });
};

export default useDeleteBranch;
