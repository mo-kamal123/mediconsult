import logo from '../../../app/assets/mediconsult_logo.png';
import khusm from '../../../app/assets/Khusm.png';

const Home = () => {
  return (
    <section className="relative flex flex-col justify-between items-center h-svh -mt-30 w-full">
      {/* Centered Logo */}
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <img src={logo} alt="home-main-img" className="w-50 md:w-[400px]" />
      </div>
    </section>
  );
};

export default Home;
