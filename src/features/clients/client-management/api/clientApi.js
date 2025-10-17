import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

export const getAllClients = async (page) => {
  const response = await axiosInstance.get(
    `/en/Client?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};

export const getClient = async (id) => {
  const response = await axiosInstance.get(`/en/Client/${id}`);
  return response.data;
};

export const createNewClient = (credentials) => {
  const response = axiosInstance.post('/en/Client', credentials);
  return response.data;
};

export const updateClient = (id, credentials) => {
  const response = axiosInstance.put(`/en/Client/${id}`, credentials);
  return response.data;
};
