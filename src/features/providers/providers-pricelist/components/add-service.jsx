import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DropDown from '../../../../shared/UI/drop-down';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { addServiceSchema } from '../validation/pricelist-validation';

const AddService = () => {
  const methods = useForm({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      service: '',
      price: '',
      discount: '',
      priceApproval: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Service added successfully!', {
      description: 'The service has been added to the list.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Provider Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Add Service </h3>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <RHFDropDown
              label="Service"
              name="service"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Service"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Price"
              {...register('price')}
              error={errors.price?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Discount %"
              {...register('discount')}
              error={errors.discount?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="priceApproval"
              {...register('priceApproval')}
            />
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
    </FormProvider>
  );
};

export default AddService;
