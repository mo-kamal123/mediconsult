import { useMutation } from '@tanstack/react-query';
import { updateClient } from '../api/clientApi';
import { toast } from 'sonner';

// custom hook for update client mutation
const useUpdateClient = (id) => {
  return useMutation({
    mutationFn: (data) => updateClient(id, data),
    onSuccess: (data) => {
      //TODO: remove logs
      console.log(data);
      // ✅ success toast
      toast.success('client updated successfully ✔');
    },
    onError: (err) => {
      //TODO: remove logs
      console.error(err);
      // ❌ error toast
      toast.error('faild to update client, try again later ❌');
    },
  });
};

export default useUpdateClient;
