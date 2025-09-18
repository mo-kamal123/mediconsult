import { FaImage } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import DropDown from "../../../../shared/UI/drop-down";
import Input from "../../../../shared/UI/input";

const ClientInfo = () => {
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

      {/* Client Logo */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Logo</h3>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
            <input
              type="file"
              name="logo"
              accept="image/png, image/jpeg"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <FaImage className="text-4xl text-gray-400" />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="flex items-center gap-2 text-[#4285F4] border border-[#4285F4] w-fit px-4 py-2 rounded-2xl"
            >
              <FiUpload />
              Upload
            </button>
            <p className="text-sm text-[#8B8B9B] max-w-sm">
              Please upload a JPG or PNG file with a minimum dimension of 200x200, not exceeding 3MB.
            </p>
          </div>
        </div>
      </div>

      {/* Client Info */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Info</h3>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input name="clientInfo" type="text" className="flex-1 min-w-[200px]" />
          <DropDown
            label="Client Category"
            name="clientCategory"
            data={[
              { value: "corp", label: "corp" },
              { value: "ind", label: "ind" },
            ]}
            className="flex-1 p-6 mt-4 min-w-[200px]"
          />
          <Input name="clientName" type="text" className="flex-1 min-w-[200px]" />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input name="clientType" type="text" className="flex-1 min-w-[200px]" />
          <DropDown
            label="Status"
            name="status"
            data={[
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
            className="flex-1 p-6 mt-4../ min-w-[200px]"
          />
          <Input name="reimbursementDueDays" type="text" className="flex-1 min-w-[200px]" />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input name="ibmNotesId" type="text" className="flex-1 min-w-[200px]" />
          <Input name="clientShortName" type="text" className="flex-1 min-w-[200px]" />
          <div className="flex-1 min-w-[200px]" />
        </div>
      </div>

      {/* Policy Info */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">Policy Info</h3>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input name="policyId" type="text" className="flex-1 min-w-[200px]" />
          <Input name="policyStart" type="date" className="flex-1 min-w-[200px]" />
          <Input name="policyExpire" type="date" className="flex-1 min-w-[200px]" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <button
          className="border border-[#F56C6C] text-[#F56C6C] py-2 px-6 rounded-lg"
          type="submit"
        >
          Delete
        </button>
        <button
          className="bg-blue-500 py-2 px-6 text-white rounded-lg"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ClientInfo;
