const DropDown = ({ data, label, type = '', className = "", ...props }) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <select
          className={`border p-4 border-[#C2C2C2] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        >
          {type === 'search' && (
            <option value={'all'}>
              All
            </option>
          )}
          {data.map((item, index) => (
            <>
              <option key={index} value={item.value} className="p-2 border-b border-borders">
                {item.label || item}
              </option>
            </>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropDown;
  