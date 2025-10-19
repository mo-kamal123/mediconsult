import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { loggedin } from '../store/auth-slice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

// custom hook for reset password mutation
const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      // dispatch(loggedin()); // you can replace this with resetPassword API call
      navigate('/auth'); // redirect to login page
      // ✅ success toast
      toast.success('Your password changed ✔');
    },
    onError: (error) => {
      //TODO: remove logs
      console.log(error);
      // ❌ error toast
      toast.error(
        error.response?.data?.message || 'confirm that the password match'
      );
    },
  });
};

export default useResetPassword;
