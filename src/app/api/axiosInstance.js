import axios from 'axios';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../shared/utils/localStorage-actions';
import { dispatchAction, navigateTo } from '../../shared/utils/navigation';
import { logout } from '../../features/auth/store/auth-slice';

export const LIMIT = 10;

const axiosInstance = axios.create({
  baseURL: 'https://api.mediconsulteg.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = getFromLocalStorage('token');

      config.headers = config.headers || {};

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (err) {
      console.error('Axios interceptor error:', err);
      return config;
    }
  },
  (error) => Promise.reject(error)
);

/* ======================
   RESPONSE INTERCEPTOR
====================== */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // 🔥 Auto logout
      removeFromLocalStorage('token');
      removeFromLocalStorage('isLogged');
      dispatchAction(logout())

      // Optional: prevent redirect loop
      navigateTo('/auth');
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
