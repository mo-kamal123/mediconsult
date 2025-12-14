import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

// get all members API call with pagination & search
export const getAllmembers = async ({ page, search }) => {
  const params = new URLSearchParams({
    page,
    limit: LIMIT,
  });

  if (search?.searchTerm) params.append('search', search.searchTerm);
  if (search?.filterBy && search.filterBy !== 'All')
    params.append('searchColumn', search.filterBy);

  const response = await axiosInstance.get(
    `/en/MemberInfo?${params.toString()}`
  );

  return response.data;
};

// get single client by id API call
export const getMember = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/${id}`);
  return response.data;
};

// get all categories API call
export const getAllClients = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/clients`);
  return response.data;
};
// get all status API call
export const getAllStatus = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/statuses`);
  return response.data;
};
// get all types API call
export const getAllbranches = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/branches/${id}`);
  return response.data;
};
// get all Programs API call
export const getAllPrograms = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/programs/${id}`);
  return response.data;
};
// get all Levels API call
export const getAllLevels = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/levels`);
  return response.data;
};
// get all vip-statuses API call
export const getAllVipStatuses = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/vip-statuses`);
  return response.data;
};

// get all vip-statuses API call
export const exportMembers = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/export/excel`, {
    responseType: 'blob', 
  });
  return response.data;
};

// create new member API call
export const createNewMember = async (formdata) => {
  const response = await axiosInstance.post('/en/MemberInfo', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// update existing member API call
export const updateMember = async (id, credentials) => {
  const response = await axiosInstance.put(`/en/MemberInfo/${id}`, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// change member status API call
export const changeMemberStatus = async (id, credentials) => {
  const response = await axiosInstance.patch(
    `/en/MemberInfo/${id}/status`,
    credentials
  );
  return response.data;
};

// change bulk members status API call
export const activateBulkMembers = async (ids) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/activate`,
    ids
  );
  return response.data;
};

// change bulk members status API call
export const deactivateBulkMembers = async (ids) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/deactivate`,
    ids
  );
  return response.data;
};