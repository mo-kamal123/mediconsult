import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// get all clients API call with pagination
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

// get single client by id API call
export const getClient = async (id) => {
  const response = await axiosInstance.get(`/en/Client/${id}`);
  return response.data;
};
// get single client by id API call
export const getClientMembers = async (id, page) => {
  const response = await axiosInstance.get(
    `/en/Client/${id}/members?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};
// get all categories API call
export const getAllCategories = async () => {
  const response = await axiosInstance.get(`/en/Client/categories`);
  return response.data;
};
// get all status API call
export const getAllStatus = async () => {
  const response = await axiosInstance.get(`/en/Client/statuses`);
  return response.data;
};
// get all types API call
export const getAllTypes = async () => {
  const response = await axiosInstance.get(`/en/Client/types`);
  return response.data;
};
// get all Programs API call
export const getAllPrograms = async () => {
  const response = await axiosInstance.get(`/en/Client/programs`);
  return response.data;
};
// get all Levels API call
export const getAllLevels = async () => {
  const response = await axiosInstance.get(`/en/Client/levels`);
  return response.data;
};
// get all vip-statuses API call
export const getAllVipStatuses = async () => {
  const response = await axiosInstance.get(`/en/Client/vip-statuses`);
  return response.data;
};
// get all insurance-companies API call
export const getAllInsuranceCompanies = async () => {
  const response = await axiosInstance.get(`/en/Client/insurance-companies`);
  return response.data;
};
// get excel API call
export const exportClients = async () => {
  const response = await axiosInstance.get(`/en/Client/export/excel`, {
    responseType: 'blob', // THIS IS IMPORTANT
  });
  return response.data;
};

export const createNewClient = async (formData) => {
  // ⚠️ formData is already FormData - don't stringify!
  const response = await axiosInstance.post('/en/Client', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// update existing client API call
export const updateClient = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/Client/${id}`, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// change client status API call
export const changeClientStatus = async (id, credentials) => {
  const response = await axiosInstance.patch(
    `/en/Client/${id}/status`,
    credentials
  );
  return response.data;
};

// delete existing branch API call
export const deleteBranch = async (clientId, branchId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/branches/${branchId}`
  );
  return response.data;
};

// delete existing Contact API call
export const deleteContact = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contacts/${contactId}`
  );
  return response.data;
};
// delete existing Contact API call
export const deleteContract = async (clientId, contactId) => {
  const response = await axiosInstance.delete(
    `/en/Client/${clientId}/contracts/${contactId}`
  );
  return response.data;
};
// delete existing client API call
export const deleteClient = async (id) => {
  const response = await axiosInstance.delete(`/en/Client/${id}`);
  return response.data;
};
