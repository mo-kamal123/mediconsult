import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBulkMembers } from '../api/membersApi';
import { toast } from 'sonner';

const useDeleteBulkMembers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBulkMembers,
    onSuccess: () => {
      // ✅ success toast
      toast.success('members Deleted successfully ✔');
      queryClient.invalidateQueries(['members']);
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to Delete members, try again later ❌');
    },
  });
};

export default useDeleteBulkMembers;
