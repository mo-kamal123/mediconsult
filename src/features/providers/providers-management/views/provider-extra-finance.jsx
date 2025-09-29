import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DropDown from '../../../../shared/UI/drop-down';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { providerExtraFinanceSchema } from '../validation/provider-validation';

const ProviderExtraFinance = () => {
  const methods = useForm({
    resolver: zodResolver(providerExtraFinanceSchema),
    defaultValues: {
      providerType: '',
      TAXNumber: '',
      fullAddress: '',
      shortcutAddress: '',
      government: '',
      city: '',
      Area: '',
      streetName: '',
      buildingNo: '',
      officeNo: '',
      Landmark: '',
      postalCode: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Provider extra finance information saved successfully!', {
      description: 'The provider extra finance details have been updated.',
    });
  };

  const handleDelete = () => {
    console.log('Delete provider extra finance');
    toast.error('Provider extra finance deleted successfully!', {
      description: 'The provider extra finance has been removed.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            Extra Finance Info{' '}
          </h3>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Provider Type"
              {...register('providerType')}
              error={errors.providerType?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="TAX Number"
              {...register('TAXNumber')}
              error={errors.TAXNumber?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Full Address"
              {...register('fullAddress')}
              error={errors.fullAddress?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Shortcut Address"
              {...register('shortcutAddress')}
              error={errors.shortcutAddress?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Government"
              name="government"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Government"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="City"
              name="city"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select City"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Area"
              {...register('Area')}
              error={errors.Area?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Street Name"
              {...register('streetName')}
              error={errors.streetName?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Building No."
              {...register('buildingNo')}
              error={errors.buildingNo?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Office No."
              {...register('officeNo')}
              error={errors.officeNo?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Landmark"
              {...register('Landmark')}
              error={errors.Landmark?.message}
              type="text"
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Postal Code"
              name="postalCode"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Postal Code"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
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

export default ProviderExtraFinance;
