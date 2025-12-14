import { useQuery } from '@tanstack/react-query';
import { getClientMembers } from '../api/clientApi';

// custom hook to fetch a client by ID
const useClientMembers = (id, page, options = {}) => {
  return useQuery({
    queryKey: ['members', id, page], // include page in the key to cache properly
    queryFn: () => getClientMembers(id, page),
    ...options, // allow passing "enabled"
  });
};

export default useClientMembers;
