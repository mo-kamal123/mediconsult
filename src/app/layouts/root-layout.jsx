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
  const closeSidebar = (mobile = false) => {
    if(mobile) return setToggleSidebar(!toggleSidebar);
  };
  return loggedIn ? (
    <main className="bg-body">
      <Navbar openSidebar={openSidebar} isOpen={toggleSidebar}/>
      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />
        <div className={`${toggleSidebar ? 'md:ml-90' : 'md:ml-0'} transition-all duration-300 `}>
          <Outlet />
        </div>
      </div>
    </main>
  ) : (
    <Navigate to={'/auth'} replace />
  )
}

export default RootLayout
