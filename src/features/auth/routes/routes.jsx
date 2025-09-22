// src/features/auth/routes/authRoutes.jsx
import { lazy } from 'react';
import withSuspense from '../../../app/components/with-suspense';

// Lazy-loaded pages
const Login = lazy(() => import('../pages/login'));
const ForgetPassword = lazy(() => import('../pages/forget-password'));
const ResetPassword = lazy(() => import('../pages/reset-password'));
const Verify = lazy(() => import('../pages/verify'));

// Auth Routes
export const authRoutes = [
  { index: true, element: withSuspense(Login) },
  { path: 'forget-password', element: withSuspense(ForgetPassword) },
  { path: 'verify', element: withSuspense(Verify) },
  { path: 'reset-password', element: withSuspense(ResetPassword) },
];
