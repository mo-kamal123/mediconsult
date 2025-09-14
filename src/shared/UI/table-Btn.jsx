import { btnStyles } from '../constants/tableBtnStyles';

const TableBtn = ({ label, Icon, handleClick }) => {
  return (
    <div
      className={`flex items-center gap-3 bg-white md:px-4 p-2 text-sm border rounded cursor-pointer select-none ${btnStyles[label]}`}
    >
      {/* Render all Icons in this action side by side */}
      <Icon className="text-2xl" />
      <button onClick={handleClick} className=" font-medium">
        {label}
      </button>
    </div>
  );
};

export default TableBtn;
