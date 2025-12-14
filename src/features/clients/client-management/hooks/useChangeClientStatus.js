import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeClientStatus } from '../api/clientApi';
import { toast } from 'sonner';

// custom hook for create client mutation
const useChangeClientStatus = () => {
  const queryClient = useQueryClient(); // ✅ required
  return useMutation({
    mutationFn: ({ id, body }) => changeClientStatus(id, body),
    onSuccess: () => {
      // ✅ success toast
      toast.success('Status Changed successfully ✔');
      queryClient.invalidateQueries(['clients']); // invalidate clients query to refetch updated data
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to change client status, try again later ❌');
    },
  });
};

export default useChangeClientStatus;
