import { useQuery } from '@tanstack/react-query';
import { getAllClients } from '../api/clientApi';

// custom hook to fetch clients with pagination
const useClients = ({ page, search }) => {
  // Create a stable key from search object
  const searchKey = search
    ? `${search.searchTerm || ''}_${search.filterBy || 'All'}`
    : '';

  return useQuery({
    queryKey: ['clients', page, searchKey], // include page and search in the key to cache properly
    queryFn: () => getAllClients({ page, search }),
    keepPreviousData: true, // keep previous data while fetching new data
  });
};

export default useClients;
