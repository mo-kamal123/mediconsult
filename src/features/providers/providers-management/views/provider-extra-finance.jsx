import DropDown from '../../../../shared/UI/drop-down';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';

const ProviderExtraFinance = () => {
  return (
    <Form>
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">
          Extra Finance Info{' '}
        </h3>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Provider Type'}
            name="providerType"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'TAX Number'}
            name="TAXNumber"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Full Address'}
            name="fullAddress"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Shortcut Address'}
            name="shortcutAddress"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Government"
            name="government"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <DropDown
            label="City"
            name="city"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Area'}
            name="Area"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Street Name'}
            name="streetName"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Building No.'}
            name="buildingNo"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Office No.'}
            name="officeNo"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Landmark'}
            name="Landmark"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Postal Code"
            name="postalCode"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
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

export default ProviderExtraFinance;
