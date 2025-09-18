const Input = ({ name, type = "text", className = "", label, ...props }) => {
  return (
    <div className="flex flex-col gap-1 mt-3 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`p-3 border border-[#C2C2C2] rounded-lg ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
