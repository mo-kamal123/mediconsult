import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { createNewprovider } from '../api/providersApi';

// custom hook for create client mutation

const useCreateProvider = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) => createNewprovider(data),
    onSuccess: () => {
      // ✅ success toast
      toast.success('Provider created successfully ✔');
      navigate(-1); // go back to previous page
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to create Provider, try again later ❌');
    },
  });
};
export default useCreateProvider;
