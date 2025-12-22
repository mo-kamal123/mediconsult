// useChangeMemberStatus.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeMemberStatus } from '../api/membersApi';
import { toast } from 'sonner';

const useChangeMemberStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, body }) => changeMemberStatus(id, body),
    onSuccess: () => {
      toast.success('Member status changed ✔');
      queryClient.invalidateQueries(['members']);
    },
    onError: () => {
      toast.error('Failed to change member status ❌');
    },
  });
};

export default useChangeMemberStatus;
