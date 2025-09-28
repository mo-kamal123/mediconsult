import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { providerAccountSchema } from '../validation/provider-validation';

const ProviderAccount = () => {
  const methods = useForm({
    resolver: zodResolver(providerAccountSchema),
    defaultValues: {
      commercialRegistrationNumber: '',
      adminFees: '',
      taxes: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Provider account information saved successfully!', {
      description: 'The provider account details have been updated.',
    });
  };

  const handleDelete = () => {
    console.log('Delete provider account');
    toast.error('Provider account deleted successfully!', {
      description: 'The provider account has been removed.',
    });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            Provider Information
          </h3>
          <div className="flex items-center gap-5">
            <Input
              label="Commercial Registration Number"
              {...register('commercialRegistrationNumber')}
              error={errors.commercialRegistrationNumber?.message}
              type="text"
            />
            <Input
              label="Admin Fees %"
              {...register('adminFees')}
              error={errors.adminFees?.message}
              type="text"
            />
            <Input
              label="Taxes %"
              {...register('taxes')}
              error={errors.taxes?.message}
              type="text"
            />
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
    </div>
  );
};

export default ProviderAccount;