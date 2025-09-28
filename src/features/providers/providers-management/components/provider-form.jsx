import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Input from '../../../../shared/UI/input';
import Form from '../../../../shared/UI/from';
import { toast } from 'sonner';
import { providerInfoSchema } from '../validation/provider-validation';

const ProviderForm = () => {
  const methods = useForm({
    resolver: zodResolver(providerInfoSchema), // Uncomment when you have the schema
    defaultValues: {
      logo: null,
      providerId: '',
      providerNameAR: '',
      providerNameEN: '',
      providerCategory: '',
      generalSpecialist: '',
      subSpecialist: '',
      comercialName: '',
      hotline: '',
      iBMNotesId: '',
      batchDueDays: '',
      providerClass: '',
      priority: '',
      status: '',
      localDiscount: '',
      importedDiscount: '',
      allowChronicOnPortal: false,
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
        {/* Provider Logo */}
        <div className="flex flex-col gap-4">
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

        {/* Provider Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Provider Info</h3>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Provider ID"
              {...register('providerId')}
              error={errors.providerId?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Provider Name ( AR )"
              {...register('providerNameAR')}
              error={errors.providerNameAR?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Provider Name ( EN )"
              {...register('providerNameEN')}
              error={errors.providerNameEN?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <RHFDropDown
              label="Category"
              name="providerCategory"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Category"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="General Specialist"
              name="generalSpecialist"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select General Specialist"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Sub Specialist"
              name="subSpecialist"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Sub Specialist"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Comercial Name"
              {...register('comercialName')}
              error={errors.comercialName?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Hotline"
              {...register('hotline')}
              error={errors.hotline?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="IBM Notes Id"
              {...register('iBMNotesId')}
              error={errors.iBMNotesId?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Batch Due Days"
              {...register('batchDueDays')}
              error={errors.batchDueDays?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Provider Class"
              {...register('providerClass')}
              error={errors.providerClass?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Priority"
              name="priority"
              data={[
                { value: 'corp', label: 'corp' },
                { value: 'ind', label: 'ind' },
              ]}
              placeholder="Select Priority"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
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
              label="Local Discount"
              {...register('localDiscount')}
              error={errors.localDiscount?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Imported Discount"
              {...register('importedDiscount')}
              error={errors.importedDiscount?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div>
            <input
              type="checkbox"
              {...register('allowChronicOnPortal')}
            />
            <label> Allow Chronic On Portal</label>
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

export default ProviderForm;