import { useQuery } from '@tanstack/react-query';
import { getAllClients } from '../api/clientApi';

// custom hook to fetch clients with pagination
const useClients = (page) => {
  return useQuery({
    queryKey: ['clients', page], // include page in the key to cache properly
    queryFn: () => getAllClients(page),
    keepPreviousData: true, // keep previous data while fetching new data
  });
};

export default useClients;
