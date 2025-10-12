const Btn = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-white  rounded-lg ${className} transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
