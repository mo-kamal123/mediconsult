const Form = ({ children, onSubmit, className = 'gap-10' }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-5 ${className} bg-white border border-borders p-6 rounded-2xl overflow-x-auto`}
    >
      {children}
    </form>
  );
};

export default Form;
