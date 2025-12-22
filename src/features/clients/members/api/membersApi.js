import axiosInstance, { LIMIT } from '../../../../app/api/axiosInstance';

/**
 * Members API Functions
 * All API calls related to member management
 *
 * Functions include:
 * - CRUD operations for members
 * - Member-related dropdown data (clients, branches, programs, statuses, etc.)
 * - Bulk operations (activate, deactivate, delete, update)
 * - Export and import functionality
 */

/**
 * Get all members with pagination and search/filter support
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number for pagination
 * @param {Object} params.search - Search/filter parameters
 * @param {string} params.search.searchTerm - Search term to filter members
 * @param {string} params.search.filterBy - Column to filter by
 * @returns {Promise} API response containing members data
 */
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

/**
 * Get a single member by ID
 * @param {number|string} id - Member ID
 * @returns {Promise} API response containing member data
 */
export const getMember = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/${id}`);
  return response.data;
};

/**
 * Get all clients for dropdown/select options
 * @returns {Promise} API response containing clients list
 */
export const getAllClients = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/clients`);
  return response.data;
};

/**
 * Get all member statuses for dropdown/select options
 * @returns {Promise} API response containing statuses list
 */
export const getAllStatus = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/statuses`);
  return response.data;
};

/**
 * Get all branches for a specific client for dropdown/select options
 * @param {number|string} id - Client ID
 * @returns {Promise} API response containing branches list
 */
export const getAllbranches = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/branches/${id}`);
  return response.data;
};

/**
 * Get all programs for a specific client for dropdown/select options
 * @param {number|string} id - Client ID
 * @returns {Promise} API response containing programs list
 */
export const getAllPrograms = async (id) => {
  const response = await axiosInstance.get(`/en/MemberInfo/programs/${id}`);
  return response.data;
};

/**
 * Get all member levels for dropdown/select options
 * @returns {Promise} API response containing levels list
 */
export const getAllLevels = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/levels`);
  return response.data;
};
// get all vip-statuses API call
export const getAllVipStatuses = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/vip-statuses`);
  return response.data;
};

/**
 * Export all members data to Excel file
 * @returns {Promise<Blob>} Excel file blob
 */
export const exportMembers = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/export/excel`, {
    responseType: 'blob',
  });
  return response.data;
};

/**
 * Get Excel schema/template file for bulk member import
 * @returns {Promise<Blob>} Excel schema file blob
 */
export const getExcelSchema = async () => {
  const response = await axiosInstance.get(`/en/MemberInfo/Schema-excel`, {
    responseType: 'blob',
  });
  return response.data;
};

/**
 * Create a new member
 * @param {FormData} formdata - Member data including image file (FormData object)
 * @returns {Promise} API response containing created member data
 * @note formdata must be FormData object (not JSON) to support file uploads
 */
export const createNewMember = async (formdata) => {
  const response = await axiosInstance.post('/en/MemberInfo', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Update an existing member
 * @param {number|string} id - Member ID to update
 * @param {FormData} credentials - Updated member data including image file (FormData object)
 * @returns {Promise} API response containing updated member data
 * @note credentials must be FormData object (not JSON) to support file uploads
 */
export const updateMember = async (id, credentials) => {
  const response = await axiosInstance.put(
    `/en/MemberInfo/${id}`,
    credentials,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};

/**
 * Change member status (activate, deactivate, etc.)
 * @param {number|string} id - Member ID
 * @param {Object} credentials - Status change data
 * @param {number} credentials.StatusId - New status ID
 * @returns {Promise} API response
 */
export const changeMemberStatus = async (id, credentials) => {
  const response = await axiosInstance.patch(
    `/en/MemberInfo/${id}/status`,
    credentials
  );
  return response.data;
};

/**
 * Activate multiple members in bulk
 * @param {Object} ids - Object containing array of member IDs
 * @param {Array<number|string>} ids.ids - Array of member IDs to activate
 * @returns {Promise} API response
 */
export const activateBulkMembers = async (ids) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/activate`,
    ids
  );
  return response.data;
};

/**
 * Deactivate multiple members in bulk
 * @param {Object} ids - Object containing array of member IDs
 * @param {Array<number|string>} ids.ids - Array of member IDs to deactivate
 * @returns {Promise} API response
 */
export const deactivateBulkMembers = async (ids) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/deactivate`,
    ids
  );
  return response.data;
};

/**
 * Delete multiple members in bulk
 * @param {Object} ids - Object containing array of member IDs
 * @param {Array<number|string>} ids.ids - Array of member IDs to delete
 * @returns {Promise} API response
 */
export const deleteBulkMembers = async (ids) => {
  const response = await axiosInstance.delete(
    `/en/MemberInfo/bulk/delete`,
    ids
  );
  return response.data;
};

/**
 * Update multiple members from Excel file (bulk update)
 * @param {FormData} file - Excel file containing member data (FormData object)
 * @returns {Promise} API response
 * @note file must be FormData object with Excel file
 */
export const updateBulkMembers = async (file) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/update-from-excel`,
    file,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};

/**
 * Upload multiple member images in bulk
 * @param {FormData} imgs - FormData containing multiple image files
 * @returns {Promise} API response
 * @note imgs must be FormData object with image files
 */
export const uploadBulkImgs = async (imgs) => {
  const response = await axiosInstance.post(
    `/en/MemberInfo/bulk/upload-images`,
    imgs,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};
