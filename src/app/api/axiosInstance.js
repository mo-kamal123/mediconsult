import axios from 'axios';

// limit for pagination
export const LIMIT = 10;

// create an axios instance with base URL
const axiosInstance = axios.create({
  baseURL: 'https://api.mediconsulteg.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
