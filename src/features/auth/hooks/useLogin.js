import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authApi';
import { toast } from 'sonner';

// custom hook for login mutation
export const useLogin = (onSuccessCallBack) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      //TODO: remove logs
      // store token in local storage
      localStorage.setItem('token', data.data.token);
      console.log(data.data.token);
      // ✅ success toast
      toast.success('Login successful!', {
        description: 'Welcome back 👋',
      });

      if (onSuccessCallBack) {
        // execute callback function
        onSuccessCallBack(data);
      }
    },
    onError: (error) => {
      console.log(error);
      // ❌ error toast
      toast.error(error.response?.data?.message || 'Login failed');
    },
    retry: false, // disable automatic retries
  });
};
