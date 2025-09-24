import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import DropDown from '../../../../shared/UI/drop-down';
import Input from '../../../../shared/UI/input';
import Form from '../../../../shared/UI/from';
const ProviderForm = () => {
  return (
    <Form>
      {/* Provider Logo */}
      <div className="flex flex-col gap-4">
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
              Please upload a JPG or PNG file with a minimum dimension of
              200x200, not exceeding 3MB.
            </p>
          </div>
        </div>
      </div>

      {/* Provider Info */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">Provider Info</h3>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Provider ID'}
            name="providerId"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Provider Name ( AR )'}
            name="providerNameAR"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Provider Name ( EN )'}
            name="providerNameEN"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <DropDown
            label="Category"
            name="providerCategory"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <DropDown
            label="General Specialist"
            name="generalSpecialist"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <DropDown
            label="Sub Specialist"
            name="subSpecialist"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Comercial Name'}
            name="comercialName"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Hotline'}
            name="hotline"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'IBM Notes Id'}
            name="iBMNotesId"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Batch Due Days'}
            name="batchDueDays"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Provider Class'}
            name="providerClass"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Priority"
            name="priority"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <DropDown
            label="Status"
            name="status"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label={'Local Discount'}
            name="localDiscount"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Imported Discount'}
            name="importedDiscount"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>
        <div>
          <input type="checkbox" />
          <label> Allow Chronic On Portal</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 justify-end">
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
    </Form>
  );
};

export default ProviderForm;
