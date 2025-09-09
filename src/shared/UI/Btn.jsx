import { btnStyles } from '../constants/tableBtnStyles';

const Btn = ({ label, Icon }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-white px-4 py-1 border rounded cursor-pointer select-none ${btnStyles[label]}`}
    >
      {/* Render all Icons in this action side by side */}
      <Icon className="text-2xl" />
      <button className=" font-medium">{label}</button>
    </div>
  );
};

export default Btn;
