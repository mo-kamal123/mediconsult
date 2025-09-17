import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';

const Home = () => {
  return (
    <section className="relative flex flex-col justify-between items-center h-svh w-full py-10">
      {/* Centered Logo */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img src={logo} alt="home-main-img" className="w-50 md:w-[400px]" />
      </div>

      {/* Footer */}
      <div className="w-full md:flex items-center justify-between px-10">
        <div>
          <p className="md:text-xl">Powered by</p>
          <img src={khusm} alt="khusm-img" className="w-30 md:w-50" />
        </div>
        <p className="text-[#B4B7C8] text-sm mt-4 md:mt-0">
          Copyright © 2024 All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Home;
