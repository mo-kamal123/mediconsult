import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deactivateBulkMembers } from '../api/membersApi';
import { toast } from 'sonner';

const useDeactivateBulkMembers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deactivateBulkMembers,
    onSuccess: () => {
      // ✅ success toast
      toast.success('members Deactivated successfully ✔');
      queryClient.invalidateQueries(['members']);
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to Deactivate members, try again later ❌');
    },
  });
};

export default useDeactivateBulkMembers;
