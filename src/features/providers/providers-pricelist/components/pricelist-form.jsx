import DropDown from '../../../../shared/UI/drop-down';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';

const PricelistForm = () => {
  return (
    <Form>
      {/* Provider Info */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">
          Pricelist Information
        </h3>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Price List Name'}
            name="priceListName"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <DropDown
            label="Provider"
            name="provider"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <Input
            label={'Start Date'}
            name="startDate"
            type="date"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'End Date'}
            name="endDate"
            type="date"
            className="flex-1 min-w-[200px]"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <DropDown
            label="Type"
            name="type"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label={'Normal Discount %'}
            name="normalDiscount"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Additional Discount %'}
            name="additionalDiscount"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>
        <div className=" flex-wrap md:flex-nowrap gap-6">
          <label htmlFor="Note" className="text-sm font-medium text-gray-700">
            Note
          </label>
          <textarea
            name="note"
            cols="30"
            rows="10"
            className="w-full border border-[#C2C2C2] p-5 rounded-lg h-20 max-h-40"
          ></textarea>
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

export default PricelistForm;
