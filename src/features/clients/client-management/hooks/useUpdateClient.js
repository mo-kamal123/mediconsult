import { useMutation } from '@tanstack/react-query';
import { updateClient } from '../api/clientApi';
import { toast } from 'sonner';

const useUpdateClient = (id) => {
  return useMutation({
    mutationFn: (data) => updateClient(id, data),
    onSuccess: (data) => {
      console.log(data);
      toast.success('client updated successfully ✔');
    },
    onError: (err) => {
      console.error(err);
      toast.error('faild to update client, try again later ❌');
    },
  });
};

export default useUpdateClient;
