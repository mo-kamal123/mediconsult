import axios from 'axios';

export const LIMIT = 10;

const axiosInstance = axios.create({
  baseURL: 'https://api.mediconsulteg.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
