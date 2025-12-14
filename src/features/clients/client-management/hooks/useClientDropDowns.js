import { useQuery } from '@tanstack/react-query';
import {
  getAllCategories,
  getAllStatus,
  getAllTypes,
  getAllPrograms,
  getAllLevels,
  getAllVipStatuses,
  getAllInsuranceCompanies,
} from '../api/clientApi';

const useClientDropDowns = () => {
  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const statusQuery = useQuery({
    queryKey: ['status'],
    queryFn: getAllStatus,
  });

  const typesQuery = useQuery({
    queryKey: ['types'],
    queryFn: getAllTypes,
  });

  const programsQuery = useQuery({
    queryKey: ['programs'],
    queryFn: getAllPrograms,
  });

  const levelsQuery = useQuery({
    queryKey: ['levels'],
    queryFn: getAllLevels,
  });

  const vipStatusQuery = useQuery({
    queryKey: ['vipStatuses'],
    queryFn: getAllVipStatuses,
  });
  const insuranceCompaniesQuery = useQuery({
    queryKey: ['insuranceCompanies'],
    queryFn: getAllInsuranceCompanies,
  });

  return {
    categories: categoriesQuery.data || [],
    status: statusQuery.data || [],
    types: typesQuery.data || [],
    programs: programsQuery.data || [],
    levels: levelsQuery.data || [],
    vipStatuses: vipStatusQuery.data || [],
    insuranceCompanies: insuranceCompaniesQuery.data || [],

    isLoading:
      categoriesQuery.isLoading ||
      statusQuery.isLoading ||
      typesQuery.isLoading ||
      programsQuery.isLoading ||
      levelsQuery.isLoading ||
      insuranceCompaniesQuery.isLoading ||
      vipStatusQuery.isLoading,

    isError:
      categoriesQuery.isError ||
      statusQuery.isError ||
      typesQuery.isError ||
      programsQuery.isError ||
      levelsQuery.isError ||
      insuranceCompaniesQuery.isError ||
      vipStatusQuery.isError,
  };
};

export default useClientDropDowns;
