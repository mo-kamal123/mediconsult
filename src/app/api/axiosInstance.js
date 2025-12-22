import axios from 'axios';

/**
 * Pagination limit constant
 * Default number of items per page for paginated API requests
 */
export const LIMIT = 10;

/**
 * Axios Instance Configuration
 * Pre-configured axios instance with base URL and default headers
 * Used throughout the application for API calls
 *
 * Base URL: Production API endpoint
 * Headers: Default JSON content type for all requests
 */
const axiosInstance = axios.create({
  baseURL: 'https://api.mediconsulteg.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
