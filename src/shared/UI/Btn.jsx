const Btn = ({ children, className }) => {
  return (
    <button className={`bg-[#4285F4] text-white p-2 md:p-4 rounded-lg mt-10 ${className}`}>
      {children}
    </button>
  );
};

export default Btn;
