import { useMutation, useQueryClient } from '@tanstack/react-query';
import { activateBulkMembers } from '../api/membersApi';
import { toast } from 'sonner';

const useActivateBulkMembers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: activateBulkMembers,
    onSuccess: () => {
      // ✅ success toast
      toast.success('members Activated successfully ✔');
      queryClient.invalidateQueries(['members']);
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to Activate members, try again later ❌');
    },
  });
};

export default useActivateBulkMembers;
