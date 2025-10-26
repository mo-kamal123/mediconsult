import axiosInstance from '../../../app/api/axiosInstance';

// login API call
export const login = (credentials) => {
  return axiosInstance.post('/en/Account/login', credentials);
};

// request OTP API call
export const sendOTP = (phone) => {
  return axiosInstance.post(`/en/Account/send-otp?phoneNumber=${phone}`);
};

// verify OTP API call
export const verifyOtp = (credentials) => {
  return axiosInstance.post('/en/Account/verify-otp', credentials);
};

// reset password API call
export const resetPassword = (credentials) => {
  return axiosInstance.post('/en/Account/reset-password', credentials);
};
