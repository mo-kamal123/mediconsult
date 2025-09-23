import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';
import { FaImage } from 'react-icons/fa';

const NewClient = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Reference to the modal content


  return (
    <div className="h-svh flex items-center justify-center -mt-30">
      <div
        ref={modalRef}
        className="bg-white border border-borders p-8 rounded-2xl shadow-sm w-[95%] m-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-[#1F4ED6] font-semibold">New Client</h2>
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
            <Input name="Client" type="text" label="Client" />
            <DropDown
              className="p-6"
              label="Client Type"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-[180px]">
            <DropDown
              className="p-6"
              label="Client Category"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
            />
            <Input name="Refund Due Days" type="text" label="Refund Due Days" />
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

export default NewClient;
