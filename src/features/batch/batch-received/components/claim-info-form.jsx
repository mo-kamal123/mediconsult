import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { claimForm } from '../validation/batch-validation';

const ClaimInfoForm = () => {
  const methods = useForm({
    resolver: zodResolver(claimForm),
    defaultValues: {
      approvalNumber: '47105',
      claimFormNumber: '',
      serviceDate: '2024-11-30',
      approvalFormDate: '',
      memberCardNumber: '2077746',
      providerLocation: '',
      doctor: 'Onsite Doctor',
      diagnosis: 'Flatulence',
      internalNote: '',
      debit: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Approval information saved successfully!', {
      description: 'The approval details have been updated.',
    });
  };

  const handleCancel = () => {
    methods.reset();
    toast.info('Form has been reset', {
      description: 'All fields have been cleared.',
    });
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-semibold text-[#1F4ED6] text-lg mb-6">
          Claim Information | Batch Number: ( 2372 ) | Provider : ( Ghada Hana
          Pharmacy )
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Approval Number"
            {...register('approvalNumber')}
            error={errors.approvalNumber?.message}
          />
          <Input
            label="Claim Form Number"
            {...register('claimFormNumber')}
            error={errors.claimFormNumber?.message}
          />
          <Input
            label="Service Date"
            type="date"
            {...register('serviceDate')}
            error={errors.serviceDate?.message}
          />
          <Input
            label="Approval /Claim Form Date"
            type="date"
            {...register('approvalFormDate')}
            error={errors.approvalFormDate?.message}
          />
          <Input
            label="Member Card Number"
            {...register('memberCardNumber')}
            error={errors.memberCardNumber?.message}
          />
          <RHFDropDown
            label="Provider Location"
            name="providerLocation"
            data={[
              { label: 'Location A', value: 'locationA' },
              { label: 'Location B', value: 'locationB' },
            ]}
            placeholder="Select Provider Location"
            className="p-6 mt-1 min-w-[200px]"
          />
          <Input
            label="Doctor"
            {...register('doctor')}
            error={errors.doctor?.message}
          />
          <RHFDropDown
            label="Diagnosis"
            name="diagnosis"
            multiple
            data={[
              { label: 'Flatulence', value: 'Flatulence' },
              { label: 'Headache', value: 'Headache' },
              { label: 'Fever', value: 'Fever' },
            ]}
            placeholder="Select Diagnosis"
            className="p-6 mt-1 min-w-[200px]"
          />
          <div className="col-span-full">
            <Input
              label="Internal Note"
              {...register('internalNote')}
              error={errors.internalNote?.message}
            />
          </div>
          <div className="col-span-full flex items-center gap-2">
            <input type="checkbox" {...register('debit')} />
            <label className="text-sm">Debit</label>
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-400 text-gray-600 px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </Form>
    </FormProvider>
  );
};

export default ClaimInfoForm;
