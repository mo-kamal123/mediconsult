import { useQuery } from '@tanstack/react-query';
import { getClient } from '../api/clientApi';

const useClientById = (id) => {
  return useQuery({
    queryKey: ['clients', id], // include page in the key to cache properly
    queryFn: () => getClient(id), // wrap in a function
  });
};

export default useClientById;
