import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteContact } from '../../api/clientApi';

// custom hook for delete contact mutation
const useDeleteContact = () => {
  const queryClient = useQueryClient(); // ✅ required
  return useMutation({
    mutationFn: ([clientId, contactId]) => deleteContact(clientId, contactId),
    onSuccess: (data, variables) => {
      const [clientId] = variables;
      // ✅ success toast
      toast.success('Contact deleted successfully ✔');
      // Invalidate and refetch client data
      queryClient.invalidateQueries(['clients', clientId]);
    },
    onError: () => {
      // ❌ error toast
      toast.error('Failed to delete contact, try again later ❌');
    },
  });
};

export default useDeleteContact;
