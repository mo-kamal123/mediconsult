import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import Input from '@/shared/UI/input';
import { clientInfoSchema } from '../validation/client-validation';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import { toast } from 'sonner';

const ClientForm = () => {
  const methods = useForm({
    resolver: zodResolver(clientInfoSchema),
    defaultValues: {
      clientInfo: '',
      clientCategory: '',
      clientName: '',
      clientType: '',
      status: '',
      reimbursementDueDays: '',
      ibmNotesId: '',
      clientShortName: '',
      policyId: '',
      policyStart: '',
      policyExpire: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.warning('Client information saved successfully!', {
      description: 'The client details have been updated.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Logo</h3>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                accept="image/png, image/jpeg"
                {...register('logo')}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <FaImage className="text-4xl text-gray-400" />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="flex items-center gap-2 text-[#4285F4] border border-[#4285F4] w-fit px-4 py-2 rounded-2xl"
              >
                <FiUpload />
                Upload
              </button>
              <p className="text-sm text-[#8B8B9B] max-w-sm">
                Please upload a JPG or PNG file with a minimum dimension of
                200x200, not exceeding 3MB.
              </p>
            </div>
          </div>
          {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
        </div>

        {/* Client Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Info</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Client Info"
              {...register('clientInfo')}
              error={errors.clientInfo?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Client Category"
              name="clientCategory"
              data={[
                { value: 'corp', label: 'Corp' },
                { value: 'ind', label: 'Ind' },
              ]}
              placeholder="Select Category"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Client Name"
              {...register('clientName')}
              error={errors.clientName?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Client Type"
              {...register('clientType')}
              error={errors.clientType?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Status"
              name="status"
              data={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
              ]}
              placeholder="Select Status"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Reimbursement Due Days"
              {...register('reimbursementDueDays')}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="IBM Notes Id"
              {...register('ibmNotesId')}
              error={errors.ibmNotesId?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Client Short Name"
              {...register('clientShortName')}
              className="flex-1 min-w-[200px]"
            />
            <div className="flex-1 min-w-[200px]" />
          </div>
        </div>

        {/* Policy Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Policy Info</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Policy ID"
              {...register('policyId')}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Policy Start"
              type="date"
              {...register('policyStart')}
              error={errors.policyStart?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Policy Expire"
              type="date"
              {...register('policyExpire')}
              error={errors.policyExpire?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end">
          <button
            className="border border-[#F56C6C] text-[#F56C6C] py-2 px-6 rounded-lg"
            type="button"
            onClick={() => methods.reset()}
          >
            Reset
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

export default ClientForm;
