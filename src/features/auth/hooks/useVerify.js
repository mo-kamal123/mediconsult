import { useMutation } from '@tanstack/react-query';
import { verifyOtp } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// custom hook for verify OTP mutation
const useVerify = (phone) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      navigate(`/auth/reset-password?phone=${phone}`); // redirect to reset password page
    },
    onError: (error) => {
      // ❌ error toast
      toast.error(error.response?.data?.message);
    },
  });
};

export default useVerify;
