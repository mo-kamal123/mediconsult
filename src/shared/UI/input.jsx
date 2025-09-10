const Input = ({ name, type }) => {
  return (
    <div className="flex flex-col gap-1 mt-3">
      <label htmlFor={type}>{name}</label>
      <input
        type={type}
        name={type}
        id={type}
        className="p-3 border border-[#C2C2C2] rounded-lg"
      />
    </div>
  );
};

export default Input;
