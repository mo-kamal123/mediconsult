import { useQuery } from '@tanstack/react-query';
import {
  getAllPolicyTypes,
  getAllCarrierCompanies,
  getAllClients,
  getAllPrograms,
  getAllRoomTypes,
  getAllServiceClasses,
  getAllPoolTypes,
  getAllReimbursementTypes,
  // getAllPricelists, // TODO: Uncomment when API is available
} from '../api/policyApi';

/**
 * Custom hook to fetch all dropdown data for policy forms
 * @param {Object} options - Options for client/provider-specific dropdowns
 * @param {number|string} options.clientId - Client ID for client-specific programs
 * @param {number|string} options.providerId - Provider ID for provider-specific pricelists
 * @returns {Object} Object containing all dropdown data and loading/error states
 */
const usePolicyDropDowns = (options = {}) => {
  const { clientId, providerId } = options;

  // Fetch all dropdown data in parallel
  const policyTypesQuery = useQuery({
    queryKey: ['policyTypes'],
    queryFn: getAllPolicyTypes,
  });

  const carrierCompaniesQuery = useQuery({
    queryKey: ['carrierCompanies'],
    queryFn: getAllCarrierCompanies,
  });

  const clientsQuery = useQuery({
    queryKey: ['policyClients'],
    queryFn: getAllClients,
  });

  const programsQuery = useQuery({
    queryKey: ['policyPrograms', clientId],
    queryFn: getAllPrograms,
    enabled: true, // Always fetch, clientId is optional
  });

  const roomTypesQuery = useQuery({
    queryKey: ['roomTypes'],
    queryFn: getAllRoomTypes,
  });

  const serviceClassesQuery = useQuery({
    queryKey: ['serviceClasses'],
    queryFn: getAllServiceClasses,
  });

  const poolTypesQuery = useQuery({
    queryKey: ['poolTypes'],
    queryFn: getAllPoolTypes,
  });

  const reimbursementTypesQuery = useQuery({
    queryKey: ['reimbursementTypes'],
    queryFn: getAllReimbursementTypes,
  });

  // Note: getAllPricelists is currently commented out in API file
  // const pricelistsQuery = useQuery({
  //   queryKey: ['policyPricelists', providerId],
  //   queryFn: () => getAllPricelists(providerId),
  //   enabled: true,
  // });

  return {
    // Data
    policyTypes: policyTypesQuery.data || [],
    carrierCompanies: carrierCompaniesQuery.data || [],
    clients: clientsQuery.data || [],
    programs: programsQuery.data || [],
    roomTypes: roomTypesQuery.data || [],
    serviceClasses: serviceClassesQuery.data || [],
    poolTypes: poolTypesQuery.data || [],
    reimbursementTypes: reimbursementTypesQuery.data || [],
    pricelists: [], // TODO: Uncomment when getAllPricelists API is available

    // Loading state - true if any query is loading
    isLoading:
      policyTypesQuery.isLoading ||
      carrierCompaniesQuery.isLoading ||
      clientsQuery.isLoading ||
      programsQuery.isLoading ||
      roomTypesQuery.isLoading ||
      serviceClassesQuery.isLoading ||
      poolTypesQuery.isLoading ||
      reimbursementTypesQuery.isLoading,

    // Error state - true if any query has error
    isError:
      policyTypesQuery.isError ||
      carrierCompaniesQuery.isError ||
      clientsQuery.isError ||
      programsQuery.isError ||
      roomTypesQuery.isError ||
      serviceClassesQuery.isError ||
      poolTypesQuery.isError ||
      reimbursementTypesQuery.isError,

    // Individual query refetch functions
    refetchPolicyTypes: policyTypesQuery.refetch,
    refetchCarrierCompanies: carrierCompaniesQuery.refetch,
    refetchClients: clientsQuery.refetch,
    refetchPrograms: programsQuery.refetch,
    refetchRoomTypes: roomTypesQuery.refetch,
    refetchServiceClasses: serviceClassesQuery.refetch,
    refetchPoolTypes: poolTypesQuery.refetch,
    refetchReimbursementTypes: reimbursementTypesQuery.refetch,
  };
};

export default usePolicyDropDowns;
