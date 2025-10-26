import { useMutation } from '@tanstack/react-query';
import { deleteprovider } from '../api/providersApi';
import { useNavigate } from 'react-router-dom';

const useDeleteProvider = (id) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => deleteprovider(id),
    onSuccess: () => {
      // ✅ success toast
      toast.success('Provider deleted successfully ✔');
      navigate(-1);
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to delete Provider, try again later ❌');
    },
  });
};

export default useDeleteProvider;
