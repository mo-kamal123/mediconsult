import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DropDown from '../../../../shared/UI/drop-down';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { pricelistSchema } from '../validation/pricelist-validation';

const PricelistForm = () => {
  const methods = useForm({
    resolver: zodResolver(pricelistSchema),
    defaultValues: {
      priceListName: '',
      provider: '',
      startDate: '',
      endDate: '',
      type: '',
      normalDiscount: '',
      additionalDiscount: '',
      note: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Pricelist information saved successfully!', {
      description: 'The pricelist details have been updated.',
    });
  };

  const handleDelete = () => {
    console.log('Delete pricelist');
    toast.error('Pricelist deleted successfully!', {
      description: 'The pricelist has been removed.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Provider Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            Pricelist Information
          </h3>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Price List Name"
              {...register('priceListName')}
              error={errors.priceListName?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Provider"
              name="provider"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Provider"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Start Date"
              {...register('startDate')}
              error={errors.startDate?.message}
              type="date"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="End Date"
              {...register('endDate')}
              error={errors.endDate?.message}
              type="date"
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <RHFDropDown
              label="Type"
              name="type"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Type"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Normal Discount %"
              {...register('normalDiscount')}
              error={errors.normalDiscount?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Additional Discount %"
              {...register('additionalDiscount')}
              error={errors.additionalDiscount?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex-wrap md:flex-nowrap gap-6">
            <label htmlFor="note" className="text-sm font-medium text-gray-700">
              Note
            </label>
            <textarea
              id="note"
              {...register('note')}
              cols="30"
              rows="10"
              className="w-full border border-[#C2C2C2] p-5 rounded-lg h-20 max-h-40"
            />
            {errors.note && (
              <p className="text-red-500 text-sm mt-1">{errors.note.message}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-end">
          <button
            className="border border-[#F56C6C] text-[#F56C6C] py-2 px-6 rounded-lg"
            type="button"
            onClick={handleDelete}
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
    </FormProvider>
  );
};

export default PricelistForm;
