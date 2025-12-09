import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { createNewClient } from '../api/clientApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetClientData } from '../store/client-data-slice';

// custom hook for create client mutation
const useCreateClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: createNewClient,
    onSuccess: () => {
      // ✅ success toast
      toast.success('client created successfully ✔');
      navigate('/clients'); // go back to previous page
      dispatch(resetClientData()); // reset client data in redux store
    },
    onError: () => {
      // ❌ error toast
      toast.error('faild to create client, try again later ❌');
    },
  });
};

export default useCreateClient;
