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
      //TODO: remove logs
      console.log(phone);
      console.log(data);
      navigate(`/auth/verify?phone=${phone}`); // redirect to verify OTP page
    },
    onError: (error) => {
      console.log(error.response?.data?.message);
      // ❌ error toast
      toast.error(error.response?.data?.message);
    },
  });
};

export default useSentOtp;
