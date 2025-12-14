import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteContract } from '../../api/clientApi';

// custom hook for delete contract mutation
const useDeleteContract = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ([clientId, contractId]) =>
      deleteContract(clientId, contractId),
    onSuccess: (data, variables) => {
      const [clientId] = variables;
      toast.success('Contract deleted successfully ✔');
      // Invalidate and refetch client data
      queryClient.invalidateQueries(['clients', clientId]);
    },
    onError: () => {
      toast.error('Failed to delete contract, try again later ❌');
    },
  });
};

export default useDeleteContract;
