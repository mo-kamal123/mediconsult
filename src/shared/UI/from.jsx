const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-10 mb-10 bg-white border border-borders p-6 rounded-2xl overflow-x-auto"
    >
      {children}
    </form>
  );
};

export default Form;
