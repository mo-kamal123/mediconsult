import { useQuery } from '@tanstack/react-query';
import { getClient } from '../api/clientApi';
import { useDispatch } from 'react-redux';
import { updateClientInfo } from '../store/client-data-slice';
import { useEffect, useRef } from 'react';

// custom hook to fetch a client by ID
const useClientById = (id, options = {}) => {
  const dispatch = useDispatch();
  const hasInitialized = useRef(false);

  const query = useQuery({
    queryKey: ['clients', id],
    queryFn: () => getClient(id),
    ...options,
  });

  // Only dispatch once when data first loads, not on every render
  useEffect(() => {
    if (query.data && !hasInitialized.current) {
      dispatch(updateClientInfo(query.data));
      hasInitialized.current = true;

      // Call user-provided callback if exists
      options.onSuccess?.(query.data);
    }
  }, [query.data, dispatch]); // Removed options from dependencies

  return query;
};

export default useClientById;
