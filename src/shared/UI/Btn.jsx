const Btn = ({ children, className, props }) => {
  return (
    <button
      className={`bg-[#4285F4] text-white p-2  rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
