import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Input from '../../../../shared/UI/input';
import Form from '../../../../shared/UI/from';
import { toast } from 'sonner';
import { newServiceSchema } from '../validation/CPT-validation';
import FormBtn from '../../../../shared/UI/form-Btn';

const NewService = () => {
  const methods = useForm({
    resolver: zodResolver(newServiceSchema),
    defaultValues: {
      provider: '',
      prices: '',
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
    toast.success('Provider information saved successfully!', {
      description: 'The provider details have been updated.',
    });
  };

  const handleDelete = () => {
    console.log('Delete provider');
    toast.error('Provider deleted successfully!', {
      description: 'The provider has been removed.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Provider Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
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

          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Prices"
              {...register('prices')}
              error={errors.prices?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Discount %"
              {...register('discount')}
              error={errors.discount?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Price Approval</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-end">
          <FormBtn role={'delete'} type="button" onClick={handleDelete}>
            Delete
          </FormBtn>
          <FormBtn role={'save'} type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewService;
