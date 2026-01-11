import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

/**
 * Policy API Functions
 * All API calls related to policy management
 *
 * Functions include:
 * - CRUD operations for policies
 * - Policy-related dropdown data (policy types, carrier companies, clients, etc.)
 * - Policy sub-entity operations (programs, pools, classes, reimbursements)
 * - Export functionality
 */

/**
 * Get all policies with pagination and search/filter support
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number for pagination
 * @param {Object} params.search - Search/filter parameters
 * @param {string} params.search.searchTerm - Search term to filter policies
 * @param {string} params.search.filterBy - Column to filter by (e.g., 'ClientName', 'PolicyTypeName')
 * @returns {Promise} API response containing policies data
 */
export const getAllPolicies = async ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    limit: LIMIT,
  });

  if (search?.searchTerm) params.append('search', search.searchTerm);
  if (search?.filterBy && search.filterBy !== 'All')
    params.append('searchColumn', search.filterBy);

  const response = await axiosInstance.get(`/en/Policy?${params.toString()}`);
  return response.data;
};

/**
 * Get a single policy by ID
 * @param {number|string} id - Policy ID
 * @returns {Promise} API response containing policy data
 */
export const getPolicy = async (id) => {
  const response = await axiosInstance.get(`/en/Policy/${id}`);
  return response.data;
};

/**
 * Get all policy types for dropdown/select options
 * @returns {Promise} API response containing policy types list
 */
export const getAllPolicyTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/policy-types`);
  return response.data;
};

/**
 * Get all carrier companies for dropdown/select options
 * @returns {Promise} API response containing carrier companies list
 */
export const getAllCarrierCompanies = async () => {
  const response = await axiosInstance.get(`/en/Policy/carrier-companies`);
  return response.data;
};

/**
 * Get all clients for dropdown/select options
 * @returns {Promise} API response containing clients list
 */
export const getAllClients = async () => {
  const response = await axiosInstance.get(`/en/Policy/clients`);
  return response.data;
};

/**
 * Get all programs for dropdown/select options
 * @param {number|string} clientId - Client ID (optional, for client-specific programs)
 * @returns {Promise} API response containing programs list
 */
export const getAllPrograms = async () => {
  const response = await axiosInstance.get(`/en/Policy/programs`);
  return response.data;
};

/**
 * Get all room types for dropdown/select options
 * @returns {Promise} API response containing room types list
 */
export const getAllRoomTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/room-types`);
  return response.data;
};

/**
 * Get all service classes for dropdown/select options
 * @returns {Promise} API response containing service classes list
 */
export const getAllServiceClasses = async () => {
  const response = await axiosInstance.get(`/en/Policy/service-classes`);
  return response.data;
};

/**
 * Get all pool types for dropdown/select options
 * @returns {Promise} API response containing pool types list
 */
export const getAllPoolTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/pool-types`);
  return response.data;
};

/**
 * Get all reimbursement types for dropdown/select options
 * @returns {Promise} API response containing reimbursement types list
 */
export const getAllReimbursementTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/reimbursement-types`);
  return response.data;
};

/**
 * Get all pricelists for dropdown/select options
 * @param {number|string} providerId - Provider ID (optional, for provider-specific pricelists)
 * @returns {Promise} API response containing pricelists list
 */
// export const getAllPricelists = async (providerId = null) => {
//   const url = providerId
//     ? `/en/Policy/pricelists/${providerId}`
//     : `/en/Policy/pricelists`;
//   const response = await axiosInstance.get(url);
//   return response.data;
// };

/**
 * Export all policies data to Excel file
 * @returns {Promise<Blob>} Excel file blob
 */
export const exportPolicies = async () => {
  const response = await axiosInstance.get(`/en/Policy/export/excel`, {
    responseType: 'blob',
  });
  return response.data;
};

/**
 * Create a new policy
 * @param {Object} policyData - Policy data object
 * @returns {Promise} API response containing created policy data
 */
export const createPolicy = async (policyData) => {
  const response = await axiosInstance.post('/en/Policy', policyData);
  return response.data;
};

/**
 * Update an existing policy
 * @param {number|string} id - Policy ID to update
 * @param {Object} policyData - Updated policy data
 * @returns {Promise} API response containing updated policy data
 */
export const updatePolicy = async (id, policyData) => {
  const response = await axiosInstance.put(`/en/Policy/${id}`, policyData);
  return response.data;
};

/**
 * Delete a policy
 * @param {number|string} id - Policy ID to delete
 * @returns {Promise} API response
 */
export const deletePolicy = async (id) => {
  const response = await axiosInstance.delete(`/en/Policy/${id}`);
  return response.data;
};

/**
 * Copy/duplicate a policy
 * @param {number|string} id - Policy ID to copy
 * @returns {Promise} API response containing copied policy data
 */
export const copyPolicy = async (id) => {
  const response = await axiosInstance.post(`/en/Policy/${id}/copy`);
  return response.data;
};

export const getPolicyPayments = async (id) => {
  const response = await axiosInstance.get(`/en/Policy/${id}/payments`);
  return response.data;
};

export const generatePolicyPaymentSchedule = async (id, scheduleData) => {
  const response = await axiosInstance.post(
    `/en/Policy/${id}/payments/generate`,
    scheduleData
  );
  return response.data;
};

export const createPolicyPayment = async (id, paymentData) => {
  const response = await axiosInstance.post(
    `/en/Policy/${id}/payments`,
    paymentData
  );
  return response.data;
};

export const deletePolicyPayment = async (paymentId) => {
  const response = await axiosInstance.delete(
    `/en/Policy/payments/${paymentId}`
  );
  return response.data;
};
