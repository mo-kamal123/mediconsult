import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({
  children,
  type,
  description,
  onSubmit,
  addBackBtn = true,
}) => {
  const navigate = useNavigate();

  return (
    <form
      className="relative flex flex-col gap-6 w-[95%] md:w-[90%] lg:w-[70%] bg-white border border-borders p-6 rounded-2xl py-10 shadow"
      onSubmit={onSubmit}
    >
      <div>
        {/* 🔙 Back button */}
        {addBackBtn && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute top-10 left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200"
          >
            <FaArrowLeft className="text-lg" />
          </button>
        )}

        <div className="flex flex-col items-center justify-between gap-3">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#4285F4]">
            {type}
          </h3>
          <p className="text-xs md:text-sm text-[#828282]">{description}</p>
        </div>
      </div>
      {children}
    </form>
  );
};

export default AuthForm;
