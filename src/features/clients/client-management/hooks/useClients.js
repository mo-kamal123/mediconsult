import { useQuery } from '@tanstack/react-query';
import { getAllClients } from '../api/clientApi';

const useClients = (page) => {
  return useQuery({
    queryKey: ['clients', page], // include page in the key to cache properly
    queryFn: () => getAllClients(page), // wrap in a function
    keepPreviousData: true,
  });
};

export default useClients;
