
const Form = ({ children }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    
        console.log("FormData contents:");
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }
        const formObject = Object.fromEntries(formData.entries());
        console.log("As object:", formObject);
      };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 mb-10 bg-white border border-borders p-6 rounded-2xl"
    >
        {children}
    </form>
  )
}

export default Form