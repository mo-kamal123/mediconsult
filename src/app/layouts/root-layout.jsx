import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Sidebar from '../../shared/layout/sidebar';

const RootLayout = () => {
  return (
    <main className='bg-body'>
      <Navbar />
      <div className="">
        <Sidebar />
        <div className="ml-90 pt-30">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
