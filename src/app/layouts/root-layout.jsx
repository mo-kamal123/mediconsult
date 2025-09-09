import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';
import { useState } from 'react';

const RootLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const closeSidebar = () => {
    setToggleSidebar(false);
  };
  return (
    <main className='bg-body'>
      <Navbar openSidebar={openSidebar} />
      <div className="">
        <Sidebar closeSidebar={closeSidebar} isOpen={toggleSidebar} />
        <div className="md:ml-90 md:pt-30">
          {toggleSidebar && (
            <div className='bg-black w-full h-svh'></div>
          )}
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
