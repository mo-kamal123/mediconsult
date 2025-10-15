import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authApi';
import { toast } from 'sonner';

export const useLogin = (onSuccessCallBack) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token);
      console.log(data.data.token);
      // ✅ success toast
      toast.success('Login successful!', {
        description: 'Welcome back 👋',
      });

      if (onSuccessCallBack) {
        onSuccessCallBack(data);
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data?.message || 'Login failed');
    },
    retry: false,
  });
};
