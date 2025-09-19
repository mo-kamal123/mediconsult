import ForgetPassword from '../pages/forget-password';
import Login from '../pages/login';
import ResetPassword from '../pages/reset-password';
import Verify from '../pages/verify';

// Auth Routes
export const authRoutes = [
  { index: true, element: <Login /> },
  { path: 'forget-password', element: <ForgetPassword /> },
  { path: 'verify', element: <Verify /> },
  { path: 'reset-password', element: <ResetPassword /> },
];
