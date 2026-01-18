import { useMutation } from '@tanstack/react-query';
import { sendOTP } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// custom hook for send OTP mutation
const useSentOtp = (phone) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: sendOTP,
    onSuccess: (data) => {
      navigate(`/auth/verify?phone=${phone}`); // redirect to verify OTP page
    },
    onError: (error) => {
      // ❌ error toast
      toast.error(error.response?.data?.Message);
    },
  });
};

export default useSentOtp;
