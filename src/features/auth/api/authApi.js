import axiosInstance from '../../../app/api/axiosInstance';

export const login = (credentials) => {
  return axiosInstance.post('/en/Account/login', credentials);
};

export const sendOTP = (phone) => {
  return axiosInstance.post(`/en/Account/send-otp?phoneNumber=${phone}`);
};

export const verifyOtp = (credentials) => {
  return axiosInstance.post('/en/Account/verify-otp', credentials);
};

export const resetPassword = (credentials) => {
  return axiosInstance.post('/en/Account/reset-password', credentials);
};
