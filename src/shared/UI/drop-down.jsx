const DropDown = ({ data, label }) => {
    return (
      <div className="flex flex-col gap-1 mt-3">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <select className="border w-full p-4 border-[#C2C2C2] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropDown;
  