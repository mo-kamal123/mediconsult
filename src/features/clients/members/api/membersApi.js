import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// get all clients API call with pagination
export const getAllmembers = async (page) => {
  const response = await axiosInstance.get(
    `/en/MemberInfo?page=${page}&limit=${LIMIT}`
  );
  return response.data;
};

// get single client by id API call
export const getMember = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/${id}`);
  return response.data;
};

// create new client API call
export const createNewMember = async (credentials) => {
  const response = await axiosInstance.post('/en/MemberInfo', credentials);
  return response.data;
};

// update existing client API call
export const updateMember = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/MemberInfo/${id}`, credentials);
  return response.data;
};
