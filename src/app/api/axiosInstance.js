import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.mediconsulteg.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
