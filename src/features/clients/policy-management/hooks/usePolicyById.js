import { useQuery } from '@tanstack/react-query';
import { getPolicy } from '../api/policyApi';

/**
 * Custom hook to fetch a policy by ID
 * @param {number|string} id - Policy ID
 * @param {Object} options - Additional React Query options
 * @returns {Object} React Query result object
 */
const usePolicyById = (id, options = {}) => {
  return useQuery({
    queryKey: ['policies', id],
    queryFn: () => getPolicy(id),
    enabled: !!id, // Only run query if id exists
    ...options,
  });
};

export default usePolicyById;
