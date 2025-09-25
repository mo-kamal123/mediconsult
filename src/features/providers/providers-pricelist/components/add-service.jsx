import DropDown from '../../../../shared/UI/drop-down';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';

const AddService = () => {
  return (
    <Form>
      {/* Provider Info */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-[#1F4ED6]">Add Service </h3>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <DropDown
            label="Service"
            name="service"
            data={[
              { value: 'corp', label: 'corp' },
              { value: 'ind', label: 'ind' },
            ]}
            className="flex-1 p-6 mt-1 min-w-[200px]"
          />
          <Input
            label={'Price'}
            name="price"
            type="text"
            className="flex-1 min-w-[200px]"
          />
          <Input
            label={'Discount %'}
            name="discount"
            type="text"
            className="flex-1 min-w-[200px]"
          />
        </div>
        <div>
          <input type="checkbox" name="priceApproval" />
          <label htmlFor="priceApproval">Price Approval</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 justify-end">
        <button
          className="bg-blue-500 py-2 px-6 text-white rounded-lg"
          type="submit"
        >
          Add
        </button>
      </div>
    </Form>
  );
};

export default AddService;
