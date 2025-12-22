import { useQuery } from '@tanstack/react-query';
import {
  getAllClients,
  getAllStatus,
  getAllLevels,
  getAllVipStatuses,
} from '../api/membersApi'; // update path if needed

const useMemberDropDowns = () => {
  const clientsQuery = useQuery({
    queryKey: ['clients'],
    queryFn: getAllClients,
  });

  const statusQuery = useQuery({
    queryKey: ['memberStatus'],
    queryFn: getAllStatus,
  });

  const levelsQuery = useQuery({
    queryKey: ['memberLevels'],
    queryFn: getAllLevels,
  });

  const vipStatusQuery = useQuery({
    queryKey: ['memberVipStatuses'],
    queryFn: getAllVipStatuses,
  });

  return {
    clients: clientsQuery.data || [],
    status: statusQuery.data || [],
    levels: levelsQuery.data || [],
    vipStatuses: vipStatusQuery.data || [],

    isLoading:
      clientsQuery.isLoading ||
      statusQuery.isLoading ||
      levelsQuery.isLoading ||
      vipStatusQuery.isLoading,

    isError:
      clientsQuery.isError ||
      statusQuery.isError ||
      levelsQuery.isError ||
      vipStatusQuery.isError,
  };
};

export default useMemberDropDowns;
