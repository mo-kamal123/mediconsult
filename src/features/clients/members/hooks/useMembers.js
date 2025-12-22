import { useQuery } from '@tanstack/react-query';
import { getAllmembers } from '../api/membersApi';

// custom hook to fetch members with pagination + search
const useMembers = ({ page, search }) => {
  return useQuery({
    queryKey: ['members', page, search],
    queryFn: () => getAllmembers({ page, search }),
    keepPreviousData: true,
  });
};

export default useMembers;
