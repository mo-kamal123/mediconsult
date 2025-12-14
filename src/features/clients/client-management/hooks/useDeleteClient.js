import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteClient } from '../api/clientApi';

// custom hook for delete client mutation
const useDeleteClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (clientId) => deleteClient(clientId),
    onSuccess: () => {
      toast.success('Client deleted successfully ✔');
      // Invalidate and refetch clients list
      queryClient.invalidateQueries(['clients']);
    },
    onError: () => {
      toast.error('Failed to delete client, try again later ❌');
    },
  });
};

export default useDeleteClient;
