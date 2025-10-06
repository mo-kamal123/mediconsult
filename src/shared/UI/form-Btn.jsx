import { formBtnStyles } from '../constants/formBtnStyles';

const FormBtn = ({ className, children, role, ...props }) => {
  return (
    <button
      className={`py-2 rounded-lg ${className} ${formBtnStyles[role]}`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
};

export default FormBtn;
