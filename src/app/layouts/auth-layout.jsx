import { Navigate, Outlet } from 'react-router-dom';
import auth_img from '../../features/auth/imgs/health-insurance-reuse 1.png';
import khusm from '../assets/Khusm.png';
import { useSelector } from 'react-redux';

const Authlayout = () => {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated )
  return loggedIn ? (
    <Navigate to={'/'} replace />
  ) : (
    <>
      <section className="flex items-center justify-around ">
        <div className="flex flex-col justify-around gap-5 md:w-1/2 h-svh">
          <Outlet />
          <div className="flex flex-col items-center gap-3">
            <p>Powerd by</p>
            <img src={khusm} alt="khusm-logo" className="w-50" />
          </div>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src={auth_img}
            alt="login-page-img"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Authlayout;
