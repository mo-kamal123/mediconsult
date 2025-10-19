import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// get all clients API call with pagination
export const getAllClients = async (page) => {
  const response = await axiosInstance.get(
    `/en/Client?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};

// get single client by id API call
export const getClient = async (id) => {
  const response = await axiosInstance.get(`/en/Client/${id}`);
  return response.data;
};

// create new client API call
export const createNewClient = async (credentials) => {
  const response = await axiosInstance.post('/en/Client', credentials);
  return response.data;
};

// update existing client API call
export const updateClient = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/Client/${id}`, credentials);
  return response.data;
};
