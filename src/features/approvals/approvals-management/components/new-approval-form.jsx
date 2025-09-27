import DropDown from '../../../../shared/UI/drop-down';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { useState } from 'react';

const NewApprovalForm = () => {
  const [diagnosis, setDiagnosis] = useState([
    'Flatulence',
    'Paratyphoid fever A | A01.1',
  ]);

  return (
    <Form>
      {/* Approval Information */}
      <div className="">
        <h2 className="font-semibold text-[#1F4ED6] text-lg mb-6">
          Approval Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input label="Member Card No/National Id" name="memberId" />
          <DropDown
            label="Provider Name"
            name="providerName"
            data={[]}
            className="p-6 mt-1 min-w-[200px]"
          />
          <DropDown
            label="Provider Branch"
            name="providerBranch"
            data={[]}
            className=" p-6 mt-1 min-w-[200px]"
          />

          <Input label="Receive Time" name="receiveTime" type="time" />
          <Input label="Date" name="date" type="date" />
          <Input label="Claim Form No" name="claimFormNo" />

          <Input label="Additional Pool" name="additionalPool" />
          <Input label="Chronic For Date" name="chronicForDate" type="date" />
          <DropDown
            label="Diagnosis"
            name="diagnosis"
            data={[]}
            multiple
            selected={diagnosis}
            className=" p-6 mt-1 min-w-[200px]"
          />

          <Input label="Email / Phone Number" name="contact" />
          <Input
            label="Comment"
            name="comment"
            placeholder="Without a prescription"
          />
          <Input label="Max Allowed Amount" name="maxAllowed" />

          <div className="col-span-full">
            <Input label="Internal Note" name="note" />
          </div>

          <div className="col-span-full flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Debit
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Repeated
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Delivery
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded-lg">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </Form>
  );
};

export default NewApprovalForm;
