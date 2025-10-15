import { useMutation } from '@tanstack/react-query';
import { verifyOtp } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useVerify = (phone) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      console.log(data);
      navigate(`/auth/reset-password?phone=${phone}`);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data?.message);
    },
  });
};

export default useVerify;
