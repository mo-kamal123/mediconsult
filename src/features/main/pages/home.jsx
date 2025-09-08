import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../imgs/Khusm.png';
const Home = () => {
  return (
    <section className="flex flex-col gap-10 justify-around items-center h-svh w-full">
      <div className="w-130">
        <img src={logo} alt="home-main-img"></img>
      </div>
      <div className="">
        <p className="text-2xl">Powered by</p>
        <img src={khusm} alt="khusm-img" />
        <p className="text-[#B4B7C8]">Copyright © 2024 All rights reserved.</p>
      </div>
    </section>
  );
};

export default Home;
