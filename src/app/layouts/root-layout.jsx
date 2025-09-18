import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import khusm from '../assets/Khusm.png';

const RootLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  
  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const closeSidebar = (mobile = false) => {
    if(mobile) return setToggleSidebar(!toggleSidebar);
  };
  return loggedIn ? (
    <main className="bg-body">
      <Navbar openSidebar={openSidebar} isOpen={toggleSidebar} />
      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />
        <div
          className={`${toggleSidebar ? 'md:ml-90' : 'md:ml-0'} flex flex-col justify-between gap-10 transition-all duration-300 `}
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
    <Navigate to={'/auth'} replace />
  );
}

export default RootLayout
