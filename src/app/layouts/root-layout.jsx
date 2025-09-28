import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import khusm from '../assets/Khusm.png';

const RootLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(window.innerWidth > 500); // state to manage sidebar toggle
  const loggedIn = useSelector((state) => state.auth.isAuthenticated); // get the auth state from redux store

  // function to toggle sidebar
  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  // function to close sidebar on mobile
  const closeSidebar = (mobile = false) => {
    if (mobile) return setToggleSidebar(!toggleSidebar);
  };
  // if logged in show the main layout
  return loggedIn ? (
    <main className="bg-body">
      <Navbar openSidebar={openSidebar} isOpen={toggleSidebar} />
      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />
        <div
          className={`${toggleSidebar ? 'md:ml-90' : 'md:ml-0'} pt-30 transition-all duration-300 `}
        >
          <Outlet />
          <div className="w-[95%] m-auto md:flex items-center justify-between px-10 bg-white border border-borders rounded-2xl my-5 p-5">
            <div>
              <p className="md:text-xl">Powered by</p>
              <img src={khusm} alt="khusm-img" className="w-30 md:w-50" />
            </div>
            <p className="text-[#B4B7C8] text-sm mt-4 md:mt-0">
              Copyright © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  ) : (
    // if not logged in redirect to auth page
    <Navigate to={'/auth'} replace />
  );
};

export default RootLayout;
