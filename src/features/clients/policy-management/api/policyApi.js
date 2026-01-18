import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// Get all policies with pagination and search/filter support
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

// Get single policy by ID
export const getPolicy = async (id) => {
  const response = await axiosInstance.get(`/en/Policy/${id}`);
  return response.data;
};

// Get all policy types for dropdown
export const getAllPolicyTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/policy-types`);
  return response.data;
};

// Get all carrier companies for dropdown
export const getAllCarrierCompanies = async () => {
  const response = await axiosInstance.get(`/en/Policy/carrier-companies`);
  return response.data;
};

// Get all clients for dropdown
export const getAllClients = async () => {
  const response = await axiosInstance.get(`/en/Policy/clients`);
  return response.data;
};

// Get all programs for dropdown
export const getAllPrograms = async () => {
  const response = await axiosInstance.get(`/en/Policy/programs`);
  return response.data;
};

// Get all room types for dropdown
export const getAllRoomTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/room-types`);
  return response.data;
};

// Get all service classes for dropdown
export const getAllServiceClasses = async () => {
  const response = await axiosInstance.get(`/en/Policy/service-classes`);
  return response.data;
};

// Get all pool types for dropdown
export const getAllPoolTypes = async () => {
  const response = await axiosInstance.get(`/en/Policy/pool-types`);
  return response.data;
};

// Get all reimbursement types for dropdown
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

// Export all policies to Excel
export const exportPolicies = async () => {
  const response = await axiosInstance.get(`/en/Policy/export/excel`, {
    responseType: 'blob',
  });
  return response.data;
};

// Create new policy
export const createPolicy = async (policyData) => {
  const response = await axiosInstance.post('/en/Policy', policyData);
  return response.data;
};

// Update existing policy
export const updatePolicy = async (id, policyData) => {
  const response = await axiosInstance.put(`/en/Policy/${id}`, policyData);
  return response.data;
};

// Delete policy
export const deletePolicy = async (id) => {
  const response = await axiosInstance.delete(`/en/Policy/${id}`);
  return response.data;
};

// Copy/duplicate policy
export const copyPolicy = async (id) => {
  const response = await axiosInstance.post(`/en/Policy/${id}/copy`);
  return response.data;
};

// Get policy payments
export const getPolicyPayments = async (id) => {
  const response = await axiosInstance.get(`/en/Policy/${id}/payments`);
  return response.data;
};

// Generate payment schedule for policy
export const generatePolicyPaymentSchedule = async (id, scheduleData) => {
  const response = await axiosInstance.post(
    `/en/Policy/${id}/payments/generate`,
    scheduleData
  );
  return response.data;
};

// Create policy payment
export const createPolicyPayment = async (id, paymentData) => {
  const response = await axiosInstance.post(
    `/en/Policy/${id}/payments`,
    paymentData
  );
  return response.data;
};

// Delete policy payment
export const deletePolicyPayment = async (paymentId) => {
  const response = await axiosInstance.delete(
    `/en/Policy/payments/${paymentId}`
  );
  return response.data;
};
