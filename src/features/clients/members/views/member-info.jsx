import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';

const MemberInfo = () => {
  return (
    <Form>
      {/* Member Image */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">
          Member Information
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
            <input
              type="file"
              name="memberImage"
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
              Please upload a JPG or PNG file with minimum dimensions of 200 x
              200 not exceeding 3MB.
            </p>
          </div>
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col gap-6 mt-6">
        {/* Row 1 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input
            label="Member Name"
            name="memberName"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Client Name"
            name="clientName"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label="Mobile"
            name="mobile"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <DropDown
            label="Branch Name"
            name="branchName"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label="Old ID"
            name="oldId"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Program Name"
            name="programName"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <DropDown
            label="Gender"
            name="gender"
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <DropDown
            label="VIP Status"
            name="vipStatus"
            data={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label="Job Title"
            name="jobTitle"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Input
            label="Birthday"
            name="birthday"
            type="date"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label="National ID"
            name="nationalId"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label="Company Code"
            name="companyCode"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>

        {/* Row 5 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <DropDown
            label="Level"
            name="level"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label="HOF ID"
            name="hofId"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label="Activated Date"
            name="activatedDate"
            type="date"
            className="flex-1 min-w-[200px]"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-4">
          <Input
            label="Notes"
            name="notes"
            type="textarea"
            className="min-w-full"
          />
          <Input
            label="Private Notes"
            name="privateNotes"
            type="textarea"
            className="min-w-full"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end mt-6">
        <button
          className="border border-[#F56C6C] text-[#F56C6C] py-2 px-6 rounded-lg"
          type="button"
        >
          Cancel
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

export default MemberInfo;
