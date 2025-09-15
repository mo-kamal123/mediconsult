import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';
const Home = () => {
  return (
    <section className="flex flex-col gap-10 justify-around items-center h-svh  w-full">
      <div className="lg:w-130">
        <img src={logo} alt="home-main-img" className="w-50 md:w-[400px]"></img>
      </div>
      <div className="md:flex items-center justify-between w-full">
        <div className=''>
          <p className="md:text-xl">Powered by</p>
          <img src={khusm} alt="khusm-img" className="w-30 md:w-50" />
        </div>
        <p className="text-[#B4B7C8] text-sm">
          Copyright © 2024 All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Home;
