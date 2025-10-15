import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { loggedin } from '../store/auth-slice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const useResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      // dispatch(loggedin()); // you can replace this with resetPassword API call
      navigate('/auth');
      toast.success('Your password changed ✔');
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        error.response?.data?.message || 'confirm that the password match'
      );
    },
  });
};

export default useResetPassword;
