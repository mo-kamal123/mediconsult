import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import khusm from '../assets/Khusm.png';
import { setNavigate, setdispatch } from '../../shared/utils/navigation';
import { getFromLocalStorage } from '../../shared/utils/localStorage-actions';

/**
 * RootLayout Component
 * Main layout wrapper for authenticated users
 *
 * Features:
 * - Sidebar navigation (toggleable, responsive)
 * - Top navigation bar
 * - Footer with copyright and branding
 * - Protected route - redirects to auth if not logged in
 */
const RootLayout = () => {
  // Sidebar state management - defaults to open on desktop (>500px), closed on mobile
  const [toggleSidebar, setToggleSidebar] = useState(window.innerWidth > 500);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setNavigate(navigate);
    setdispatch(dispatch);
  }, [navigate, dispatch]);
  // Get authentication status from Redux store
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  /**
   * Toggle sidebar open/closed state
   */
  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  /**
   * Close sidebar on mobile devices
   * @param {boolean} mobile - If true, toggles sidebar (used for mobile-specific behavior)
   */
  const closeSidebar = (mobile = false) => {
    if (mobile) return setToggleSidebar(!toggleSidebar);
  };

  // If user is not authenticated, redirect to auth page
  if (!loggedIn) {
    return <Navigate to={'/auth'} replace />;
  }

  // Render main application layout for authenticated users
  return (
    <main className="bg-body">
      {/* Top navigation bar */}
      <Navbar openSidebar={openSidebar} isOpen={toggleSidebar} />

      <div className="">
        {/* Sidebar navigation - slides in/out based on toggle state */}
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />

        {/* Main content area - adjusts margin based on sidebar state */}
        <div
          className={`${toggleSidebar ? 'md:ml-90' : 'md:ml-0'} pt-30 transition-all duration-300`}
        >
          {/* Renders child routes */}
          <Outlet />

          {/* Footer - Copyright and branding information */}
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
