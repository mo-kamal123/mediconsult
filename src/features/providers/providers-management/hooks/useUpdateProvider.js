import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateprovider } from '../api/providersApi';

// custom hook for update client mutation
const useUpdateProvider = (id) => {
  return useMutation({
    mutationFn: (data) => updateprovider(id, data),
    onSuccess: (data) => {
      //TODO: remove logs
      console.log(data);
      // ✅ success toast
      toast.success('Provider updated successfully ✔');
    },
    onError: (err) => {
      //TODO: remove logs
      console.error(err);
      // ❌ error toast
      toast.error('faild to update Provider, try again later ❌');
    },
  });
};

export default useUpdateProvider;
