import { useQuery } from '@tanstack/react-query';
import { getMember } from '../api/membersApi';

// custom hook to fetch a provider by ID
const useMemberById = (id) => {
  return useQuery({
    queryKey: ['Members', id], // include page in the key to cache properly
    queryFn: () => getMember(id),
  });
};

export default useMemberById;
