import { useQuery } from '@tanstack/react-query';
import { getPolicyPayments } from '../api/policyApi';

/**
 * Custom hook to fetch policy payments
 * @param {number|string} id - Policy ID
 * @param {Object} options - Additional React Query options
 * @returns {Object} React Query result object
 */
const usePolicyPayments = (id, options = {}) => {
  return useQuery({
    queryKey: ['policies', id, 'payments'],
    queryFn: () => getPolicyPayments(id),
    enabled: !!id, // Only run query if id exists
    ...options,
  });
};

export default usePolicyPayments;
