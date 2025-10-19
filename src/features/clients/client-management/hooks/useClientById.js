import { useQuery } from '@tanstack/react-query';
import { getClient } from '../api/clientApi';

// custom hook to fetch a client by ID
const useClientById = (id) => {
  return useQuery({
    queryKey: ['clients', id], // include page in the key to cache properly
    queryFn: () => getClient(id),
  });
};

export default useClientById;
