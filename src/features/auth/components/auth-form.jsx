import Input from '../../../shared/UI/input';

const AuthForm = ({ children, type, description, handleSubmit, ...props }) => {
  return (
    <form className="flex flex-col gap-3 md:w-[60%]" {...props}>
      <div className="flex flex-col items-center justify-between gap-3">
        <h3 className="text-5xl font-semibold text-[#4285F4]">{type}</h3>
        <p className="text-sm text-[#828282]">{description}</p>
      </div>
      {children}
    </form>
  );
};

export default AuthForm;
