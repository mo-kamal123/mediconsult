import axios from 'axios';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../shared/utils/localStorage-actions';
import { dispatchAction, navigateTo } from '../../shared/utils/navigation';
import { logout } from '../../features/auth/store/auth-slice';
import { env } from '../../shared/config/env';

export const LIMIT = env.API_LIMIT;

// Create axios instance with base URL and default headers
const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: adds auth token to headers before request
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = getFromLocalStorage('token');
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach auth token if available
      }
      return config;
    } catch (err) {
      console.error('Axios interceptor error:', err);
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handles 401 unauthorized errors by logging out user
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // Logout user on unauthorized access
      removeFromLocalStorage('token');
      removeFromLocalStorage('isLogged');
      dispatchAction(logout());
      navigateTo('/auth');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
