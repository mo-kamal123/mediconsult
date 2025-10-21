import { useQuery } from '@tanstack/react-query';
import { getprovider } from '../api/providersApi';

// custom hook to fetch a provider by ID
const useProviderById = (id) => {
  return useQuery({
    queryKey: ['providers', id], // include page in the key to cache properly
    queryFn: () => getprovider(id),
  });
};

export default useProviderById;
