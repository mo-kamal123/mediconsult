import { useQuery } from '@tanstack/react-query';
import { getAllPolicies } from '../api/policyApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changepolicyData } from '../store/policy-slice';

/**
 * Custom hook to fetch policies with pagination and search
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number for pagination
 * @param {Object} params.search - Search/filter parameters
 * @returns {Object} React Query result object
 */
const usePolicies = ({ page, search }) => {
  const dispatch = useDispatch();
  // Create a stable key from search object
  const searchKey = search
    ? `${search.searchTerm || ''}_${search.filterBy || 'All'}`
    : '';

  const query = useQuery({
    queryKey: ['policies', page, searchKey], // include page and search in the key to cache properly
    queryFn: () => getAllPolicies({ page, search }),
    keepPreviousData: true, // keep previous data while fetching new data
  });
  useEffect(() => {
    if (query.data) {
      dispatch(changepolicyData(query.data.Data));
    }
  }, [query.data]);

  return query;
};

export default usePolicies;
