import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "../../../../shared/UI/input";
import DropDown from "../../../../shared/UI/drop-down";
import { FaImage } from "react-icons/fa";

const NewClientModal = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      navigate(-1); // Close modal
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/2 p-6"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-[#1F4ED6] font-semibold">New Client</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-gray-400 text-lg p-1 rounded-lg hover:bg-red-400 transition-all duration-300"
          >
            <IoClose />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          {/* File Upload Box */}
          <div className="relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <FaImage className="text-4xl text-gray-400" />
          </div>

          {/* Form Columns */}
          <div className="flex flex-col gap-4 flex-1 min-w-[180px]">
            <Input name="Client" type="text" />
            <DropDown
              label="Client Type"
              data={[
                { value: "corp", label: "corp" },
                { value: "ind", label: "ind" },
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-[180px]">
            <DropDown
              label="Client Category"
              data={[
                { value: "corp", label: "corp" },
                { value: "ind", label: "ind" },
              ]}
            />
            <Input name="Refund Due Days" type="text" />
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-6 text-right">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewClientModal;
