import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateMember } from '../api/membersApi';

// custom hook for update client mutation
const useUpdateMember = (id) => {
  return useMutation({
    mutationFn: (data) => updateMember(id, data),
    onSuccess: (data) => {
      //TODO: remove logs
      console.log(data);
      // ✅ success toast
      toast.success('Member updated successfully ✔');
    },
    onError: (err) => {
      //TODO: remove logs
      console.error(err);
      // ❌ error toast
      toast.error('faild to update Member, try again later ❌');
    },
  });
};

export default useUpdateMember;
