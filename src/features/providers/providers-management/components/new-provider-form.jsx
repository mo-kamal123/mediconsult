import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Input from '../../../../shared/UI/input';
import Form from '../../../../shared/UI/from';
import { toast } from 'sonner';
import { newProviderSchema } from '../validation/provider-validation';
import FormBtn from '../../../../shared/UI/form-Btn';

const NewProviderForm = () => {
  const methods = useForm({
    resolver: zodResolver(newProviderSchema),
    defaultValues: {
      providerNameAR: '',
      providerNameEN: '',
      providerCategory: '',
      generalSpecialist: '',
      iBMNotesId: '',
      subSpecialist: '',
      hotline: '',
      batchDays: '',
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

          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
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
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="IBM Notes Id"
              {...register('iBMNotesId')}
              error={errors.iBMNotesId?.message}
              className="flex-1 min-w-[200px]"
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
          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Hotline"
              {...register('hotline')}
              error={errors.hotline?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Batch Days"
              {...register('batchDays')}
              error={errors.batchDays?.message}
              className="flex-1 min-w-[200px]"
            />
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

export default NewProviderForm;
