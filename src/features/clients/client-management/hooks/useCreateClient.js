import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { createNewClient } from '../api/clientApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const useCreateClient = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNewClient,
    onSuccess: () => {
      toast.success('client created successfully ✔');
      navigate(-1);
    },
    onError: () => {
      toast.error('faild to create client, try again later ❌');
    },
  });
};

export default useCreateClient;
