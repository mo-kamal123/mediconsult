import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// get all providers API call with pagination
export const getAllproviders = async (page) => {
  const response = await axiosInstance.get(
    `/en/Provider?page=${page}&limit=${LIMIT}`
  );
  return response.data.data;
};

// get single providers by id API call
export const getprovider = async (id) => {
  const response = await axiosInstance.get(`/en/Provider/${id}`);
  return response.data;
};

// create new providers API call
export const createNewprovider = async (credentials) => {
  const response = await axiosInstance.post('/en/Provider', credentials);
  return response.data;
};

// update existing providers API call
export const updateprovider = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/Provider/${id}`, credentials);
  return response.data;
};

// delete providers API call
export const deleteprovider = async (id) => {
  const response = await axiosInstance.delete(`/en/Provider/${id}`);
  return response.data;
};
