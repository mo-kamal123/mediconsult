import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import khusm from '../assets/Khusm.png';
import { setNavigate, setdispatch } from '../../shared/utils/navigation';
import { getFromLocalStorage } from '../../shared/utils/localStorage-actions';

// Main layout for authenticated users with sidebar, navbar, and footer
const RootLayout = () => {
  // Sidebar state - open on desktop, closed on mobile by default
  const [toggleSidebar, setToggleSidebar] = useState(window.innerWidth > 500);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Set navigation utilities for use in other modules
  useEffect(() => {
    setNavigate(navigate);
    setdispatch(dispatch);
  }, [navigate, dispatch]);

  // Get auth status from Redux store
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  // Toggle sidebar open/closed
  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  // Close sidebar on mobile
  const closeSidebar = (mobile = false) => {
    if (mobile) return setToggleSidebar(!toggleSidebar);
  };

  // Redirect to auth if not logged in
  if (!loggedIn) {
    return <Navigate to={'/auth'} replace />;
  }

  return (
    <main className="bg-body">
      <Navbar openSidebar={openSidebar} isOpen={toggleSidebar} />

      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />

        {/* Main content - adjusts margin based on sidebar state */}
        <div
          className={`${toggleSidebar ? 'md:ml-90' : 'md:ml-0'} pt-30 transition-all duration-300`}
        >
          <Outlet />

          {/* Footer with copyright and branding */}
          <div className="w-[95%] m-auto md:flex items-center justify-between px-10 bg-white border border-borders rounded-2xl my-5 p-5">
            <p className="text-[#B4B7C8] text-sm mt-4 md:mt-0">
              Copyright © 2024 All rights reserved.
            </p>
            <div>
              <p className="md:text-lg">Powered by</p>
              <img src={khusm} alt="khusm-img" className="w-30 md:w-42" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
