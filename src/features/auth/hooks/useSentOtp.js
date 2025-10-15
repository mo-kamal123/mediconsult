import { useMutation } from '@tanstack/react-query';
import { sendOTP } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useSentOtp = (phone) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: sendOTP,
    onSuccess: (data) => {
      console.log(phone);
      console.log(data);
      navigate(`/auth/verify?phone=${phone}`);
    },
    onError: (error) => {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message);
    },
  });
};

export default useSentOtp;
