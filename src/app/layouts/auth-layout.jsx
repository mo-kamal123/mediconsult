import { Navigate, Outlet } from 'react-router-dom';
import auth_img from '../../features/auth/imgs/health-insurance-reuse 1.png';
import khusm from '../assets/Khusm.png';
import { useSelector } from 'react-redux';

// Layout for auth pages - login, password reset, etc.
const Authlayout = () => {
  // Get auth status from Redux
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  // Redirect to home if already logged in
  if (loggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <section className="flex items-center justify-around">
      {/* Left: auth forms */}
      <div className="flex flex-col justify-around gap-5 w-full md:w-1/2 h-svh">
        <Outlet />

        {/* Footer branding */}
        <div className="flex flex-col items-center gap-3">
          <p>Powered by</p>
          <img src={khusm} alt="khusm-logo" className="w-50" />
        </div>
      </div>

      {/* Right: decorative image (hidden on mobile) */}
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
