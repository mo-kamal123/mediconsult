import Form from '../../../shared/UI/from';
import Input from '../../../shared/UI/input';

const ProviderAccount = () => {
  return (
    <div>
      <Form>
        <h3 className="font-semibold text-lg text-[#1F4ED6]">
          Provider Information
        </h3>
        <div className="flex items-center gap-5">
          <Input
            label={'Commercial Registration Number'}
            name={'commercialRegistrationNumber'}
            type="text"
          />
          <Input label={'Admin Fees %'} name={'adminFees'} type="text" />
          <Input label={'Taxes %'} name={'taxes'} type="text" />
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
    </div>
  );
};

export default ProviderAccount;
