import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { newPriceListSchema } from '../validation/pricelist-validation';
import { toast } from 'sonner';

const NewPricelist = () => {
  const methods = useForm({
    resolver: zodResolver(newPriceListSchema),
    defaultValues: {
      priceListName: '',
      note: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Price list created successfully!', {
      description: 'The new price list has been added.',
    });
    reset();
  };

  const handleCancel = () => {
    reset();
    toast.info('Form cleared', {
      description: 'All fields have been reset.',
    });
  };

  return (
    <div className=" w-[90%] mx-auto p-9 bg-white border border-borders rounded-2xl ">
      <h2 className="text-2xl font-semibold text-[#1F4ED6] mb-6">
        Create New Price List
      </h2>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Price List Name */}
          <Input
            label="Price List Name"
            {...register('priceListName')}
            error={errors.priceListName?.message}
            placeholder="Enter price list name"
          />

          {/* Note */}
          <Input
            label="Note"
            {...register('note')}
            error={errors.note?.message}
            placeholder="Add any additional notes (optional)"
          />

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-gray-400 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 py-2 px-6 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default NewPricelist;
