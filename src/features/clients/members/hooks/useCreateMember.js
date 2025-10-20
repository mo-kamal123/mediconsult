import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { createNewMember } from '../api/membersApi';

// custom hook for create client mutation

const useCreateMember = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) => createNewMember(data),
    onSuccess: () => {
      // ✅ success toast
      toast.success('member created successfully ✔');
      navigate(-1); // go back to previous page
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to create member, try again later ❌');
    },
  });
};
export default useCreateMember;
