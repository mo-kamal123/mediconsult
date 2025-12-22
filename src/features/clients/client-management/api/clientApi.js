import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

/**
 * Client API Functions
 * All API calls related to client management
 *
 * Functions include:
 * - CRUD operations for clients
 * - Client-related dropdown data (categories, types, statuses, etc.)
 * - Client member management
 * - Client sub-entity operations (branches, contacts, contracts)
 * - Export functionality
 */

/**
 * Get all clients with pagination and search/filter support
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number for pagination
 * @param {Object} params.search - Search/filter parameters
 * @param {string} params.search.searchTerm - Search term to filter clients
 * @param {string} params.search.filterBy - Column to filter by (e.g., 'Name', 'Category')
 * @returns {Promise} API response containing clients data
 */
export const getAllClients = async ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    limit: LIMIT,
  });

  if (search?.searchTerm) params.append('search', search.searchTerm);
  if (search?.filterBy && search.filterBy !== 'All')
    params.append('searchColumn', search.filterBy);

  const response = await axiosInstance.get(`/en/Client?${params.toString()}`);
  return response.data;
};

/**
 * Get a single client by ID
 * @param {number|string} id - Client ID
 * @returns {Promise} API response containing client data
 */
export const getClient = async (id) => {
  const response = await axiosInstance.get(`/en/Client/${id}`);
  return response.data;
};

/**
 * Get members belonging to a specific client with pagination
 * @param {number|string} id - Client ID
 * @param {number} page - Page number for pagination
 * @returns {Promise} API response containing client members data
 */
export const getClientMembers = async (id, page) => {
  const response = await axiosInstance.get(
    `/en/Client/${id}/members?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};

/**
 * Get all client categories for dropdown/select options
 * @returns {Promise} API response containing categories list
 */
export const getAllCategories = async () => {
  const response = await axiosInstance.get(`/en/Client/categories`);
  return response.data;
};

/**
 * Get all client statuses for dropdown/select options
 * @returns {Promise} API response containing statuses list
 */
export const getAllStatus = async () => {
  const response = await axiosInstance.get(`/en/Client/statuses`);
  return response.data;
};

/**
 * Get all client types for dropdown/select options
 * @returns {Promise} API response containing types list
 */
export const getAllTypes = async () => {
  const response = await axiosInstance.get(`/en/Client/types`);
  return response.data;
};

/**
 * Get all programs for dropdown/select options
 * @returns {Promise} API response containing programs list
 */
export const getAllPrograms = async () => {
  const response = await axiosInstance.get(`/en/Client/programs`);
  return response.data;
};

/**
 * Get all client levels for dropdown/select options
 * @returns {Promise} API response containing levels list
 */
export const getAllLevels = async () => {
  const response = await axiosInstance.get(`/en/Client/levels`);
  return response.data;
};

/**
 * Get all VIP statuses for dropdown/select options
 * @returns {Promise} API response containing VIP statuses list
 */
export const getAllVipStatuses = async () => {
  const response = await axiosInstance.get(`/en/Client/vip-statuses`);
  return response.data;
};

/**
 * Get all insurance companies for dropdown/select options
 * @returns {Promise} API response containing insurance companies list
 */
export const getAllInsuranceCompanies = async () => {
  const response = await axiosInstance.get(`/en/Client/insurance-companies`);
  return response.data;
};
// get excel API call
export const exportClients = async () => {
  const response = await axiosInstance.get(`/en/Client/export/excel`, {
    responseType: 'blob',
  });
  return response.data;
};

/**
 * Create a new client
 * @param {FormData} formData - Client data including image file (FormData object)
 * @returns {Promise} API response containing created client data
 * @note formData must be FormData object (not JSON) to support file uploads
 */
export const createNewClient = async (formData) => {
  const response = await axiosInstance.post('/en/Client', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Update an existing client
 * @param {number|string} id - Client ID to update
 * @param {FormData} credentials - Updated client data including image file (FormData object)
 * @returns {Promise} API response containing updated client data
 * @note credentials must be FormData object (not JSON) to support file uploads
 */
export const updateClient = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/Client/${id}`, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Change client status (activate, deactivate, hold, pending)
 * @param {number|string} id - Client ID
 * @param {Object} credentials - Status change data
 * @param {number} credentials.StatusId - New status ID (1=Active, 2=Deactive, 3=Hold, 4=Pending)
 * @returns {Promise} API response
 */
export const changeClientStatus = async (id, credentials) => {
  const response = await axiosInstance.patch(
    `/en/Client/${id}/status`,
    credentials
  );
  return response.data;
};

/**
 * Delete a branch belonging to a client
 * @param {number|string} clientId - Client ID
 * @param {number|string} branchId - Branch ID to delete
 * @returns {Promise} API response
 */
export const deleteBranch = async (clientId, branchId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/branches/${branchId}`
  );
  return response.data;
};

/**
 * Delete a contact belonging to a client
 * @param {number|string} clientId - Client ID
 * @param {number|string} contactId - Contact ID to delete
 * @returns {Promise} API response
 */
export const deleteContact = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contacts/${contactId}`
  );
  return response.data;
};

/**
 * Delete a contract belonging to a client
 * @param {number|string} clientId - Client ID
 * @param {number|string} contactId - Contract ID to delete
 * @returns {Promise} API response
 */
export const deleteContract = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contracts/${contactId}`
  );
  return response.data;
};

/**
 * Delete a client
 * @param {number|string} id - Client ID to delete
 * @returns {Promise} API response
 */
export const deleteClient = async (id) => {
  const response = await axiosInstance.delete(`/en/Client/${id}`);
  return response.data;
};
