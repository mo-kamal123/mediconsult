import { Navigate, Outlet } from 'react-router-dom';
import auth_img from '../../features/auth/imgs/health-insurance-reuse 1.png';
import khusm from '../assets/Khusm.png';
import { useSelector } from 'react-redux';
import { getFromLocalStorage } from '../../shared/utils/localStorage-actions';

/**
 * AuthLayout Component
 * Layout wrapper for authentication pages (login, password reset, etc.)
 *
 * Features:
 * - Split layout: form on left, image on right (desktop)
 * - Footer with branding
 * - Protected redirect: if already logged in, redirects to home page
 */
const Authlayout = () => {
  // Get authentication status from Redux store
    const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  // If user is already authenticated, redirect to home page
  if (loggedIn) {
    return <Navigate to={'/'} replace />;
  }

  // Render authentication layout for unauthenticated users
  return (
    <section className="flex items-center justify-around">
      {/* Left side: Authentication forms (login, password reset, etc.) */}
      <div className="flex flex-col justify-around gap-5 w-full md:w-1/2 h-svh">
        {/* Renders child auth routes (login, forget-password, reset-password, verify) */}
        <Outlet />

        {/* Footer: Branding information */}
        <div className="flex flex-col items-center gap-3">
          <p>Powered by</p>
          <img src={khusm} alt="khusm-logo" className="w-50" />
        </div>
      </div>

      {/* Right side: Decorative image (hidden on mobile/tablet, visible on large screens) */}
      <div className="w-1/2 hidden lg:block">
        <img
          src={auth_img}
          alt="login-page-img"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Authlayout;
