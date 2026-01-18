import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// Get all clients with pagination and search/filter support
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

// Get single client by ID
export const getClient = async (id) => {
  const response = await axiosInstance.get(`/en/Client/${id}`);
  return response.data;
};

// Get client members with pagination
export const getClientMembers = async (id, page) => {
  const response = await axiosInstance.get(
    `/en/Client/${id}/members?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};

// Get all client categories for dropdown
export const getAllCategories = async () => {
  const response = await axiosInstance.get(`/en/Client/categories`);
  return response.data;
};

// Get all client statuses for dropdown
export const getAllStatus = async () => {
  const response = await axiosInstance.get(`/en/Client/statuses`);
  return response.data;
};

// Get all client types for dropdown
export const getAllTypes = async () => {
  const response = await axiosInstance.get(`/en/Client/types`);
  return response.data;
};

// Get all programs for dropdown
export const getAllPrograms = async () => {
  const response = await axiosInstance.get(`/en/Client/programs`);
  return response.data;
};

// Get all client levels for dropdown
export const getAllLevels = async () => {
  const response = await axiosInstance.get(`/en/Client/levels`);
  return response.data;
};

// Get all VIP statuses for dropdown
export const getAllVipStatuses = async () => {
  const response = await axiosInstance.get(`/en/Client/vip-statuses`);
  return response.data;
};

// Get all insurance companies for dropdown
export const getAllInsuranceCompanies = async () => {
  const response = await axiosInstance.get(`/en/Client/insurance-companies`);
  return response.data;
};

// Export clients to Excel
export const exportClients = async () => {
  const response = await axiosInstance.get(`/en/Client/export/excel`, {
    responseType: 'blob',
  });
  return response.data;
};

// Create new client - uses FormData for file uploads
export const createNewClient = async (formData) => {
  const response = await axiosInstance.post('/en/Client', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Update existing client - uses FormData for file uploads
export const updateClient = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/Client/${id}`, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Change client status (activate, deactivate, hold, pending)
export const changeClientStatus = async (id, credentials) => {
  const response = await axiosInstance.patch(
    `/en/Client/${id}/status`,
    credentials
  );
  return response.data;
};

// Delete client branch
export const deleteBranch = async (clientId, branchId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/branches/${branchId}`
  );
  return response.data;
};

// Delete client contact
export const deleteContact = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contacts/${contactId}`
  );
  return response.data;
};

// Delete client contract
export const deleteContract = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contracts/${contactId}`
  );
  return response.data;
};

// Delete client
export const deleteClient = async (id) => {
  const response = await axiosInstance.delete(`/en/Client/${id}`);
  return response.data;
};
