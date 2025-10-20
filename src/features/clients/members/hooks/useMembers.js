import { useQuery } from '@tanstack/react-query';
import { getAllmembers } from '../api/membersApi';

// custom hook to fetch members with pagination
const useMembers = (page) => {
  return useQuery({
    queryKey: ['members', page], // include page in the key to cache properly
    queryFn: () => getAllmembers(page),
    keepPreviousData: true, // keep previous data while fetching new data
  });
};

export default useMembers;
