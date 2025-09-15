import { btnStyles } from '../constants/tableBtnStyles';

const TableBtn = ({ label, Icon, type, handleClick }) => {
  return (
<div
  className={`flex items-center gap-4 bg-white w-fit md:px-4 md:py-2 px-2 py-1 text-xs md:text-sm border rounded cursor-pointer select-none ${btnStyles[type]}`}
>
  <Icon className="text-lg md:text-2xl" />
  <button onClick={handleClick} className="md:font-medium text-left">
    {label}
  </button>
</div>


  );
};

export default TableBtn;
