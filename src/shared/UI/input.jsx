const Input = ({
  name,
  type = 'text',
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 mt-3 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        className={`p-3 border border-[#C2C2C2] ${error && 'border-red-500 focus:ring-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
