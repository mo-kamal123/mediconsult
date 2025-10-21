import { useQuery } from '@tanstack/react-query';
import { getAllproviders } from '../api/providersApi';

// custom hook to fetch providers with pagination
const useProviders = (page) => {
  return useQuery({
    queryKey: ['providers', page], // include page in the key to cache properly
    queryFn: () => getAllproviders(page),
    keepPreviousData: true, // keep previous data while fetching new data
  });
};

export default useProviders;
