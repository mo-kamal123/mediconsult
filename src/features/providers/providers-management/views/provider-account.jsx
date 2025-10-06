import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { providerAccountSchema } from '../validation/provider-validation';
import FormBtn from '../../../../shared/UI/Form-Btn';

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
            <FormBtn role={'delete'} type="button" onClick={handleDelete}>
              Delete
            </FormBtn>
            <FormBtn role={'save'} type="submit">
              Save
            </FormBtn>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ProviderAccount;
