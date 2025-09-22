import { btnStyles } from '../constants/tableBtnStyles';

const TableBtn = ({ label, Icon, type, handleClick }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-white w-fit px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm border rounded cursor-pointer select-none ${btnStyles[type]}`}
    >
      {Icon !== undefined ? <Icon className="text-lg md:text-2xl" /> : null}
      <button
        onClick={handleClick}
        className="font-medium text-left whitespace-nowrap"
      >
        {label}
      </button>
    </div>
  );
};

export default TableBtn;
