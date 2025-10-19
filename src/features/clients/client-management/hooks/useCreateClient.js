import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { createNewClient } from '../api/clientApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

// custom hook for create client mutation
const useCreateClient = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNewClient,
    onSuccess: () => {
      // ✅ success toast
      toast.success('client created successfully ✔');
      navigate(-1); // go back to previous page
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to create client, try again later ❌');
    },
  });
};

export default useCreateClient;
