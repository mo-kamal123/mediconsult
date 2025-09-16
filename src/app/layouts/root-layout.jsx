import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RootLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  
  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const closeSidebar = () => {
    setToggleSidebar(false);
  };
  return loggedIn ? (
    <main className="bg-body">
      <Navbar openSidebar={openSidebar} />
      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />
        <div className="md:ml-90 md:pt-30">
          {toggleSidebar && <div className="bg-black w-full h-svh"></div>}
          <Outlet />
        </div>
      </div>
    </main>
  ) : (
    <Navigate to={'/auth'} replace />
  );
};

export default RootLayout;
