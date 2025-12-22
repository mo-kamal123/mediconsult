import { useQuery } from '@tanstack/react-query';
import { getAllbranches } from '../api/membersApi';

const useBranchesDropDown = (id) => {
  return useQuery({
    queryKey: ['branches', id],
    queryFn: () => getAllbranches(id),
    enabled: !!id, // only run when id exists
  });
};

export default useBranchesDropDown;
