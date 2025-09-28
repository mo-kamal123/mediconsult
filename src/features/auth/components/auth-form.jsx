const AuthForm = ({ children, type, description, onSubmit }) => {
  return (
    <form
      className="flex flex-col gap-6 w-[95%] md:w-[90%] lg:w-[70%] bg-white border border-borders p-6 rounded-2xl py-10 shadow"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col items-center justify-between gap-3">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#4285F4]">
          {type}
        </h3>
        <p className="text-xs md:text-sm text-[#828282]">{description}</p>
      </div>
      {children}
    </form>
  );
};

export default AuthForm;
