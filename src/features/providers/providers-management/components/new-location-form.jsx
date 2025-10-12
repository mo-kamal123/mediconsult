import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import FormBtn from '../../../../shared/UI/form-Btn';
import { newLocationSchema } from '../validation/provider-validation';
import { toast } from 'sonner';

const NewLocationForm = ({ data, onClose }) => {
  const methods = useForm({
    resolver: zodResolver(newLocationSchema),
    defaultValues: {
      government: data?.Government || '',
      city: data?.City || '',
      enArea: data?.['EN Area'] || '',
      arArea: data?.['AR Area'] || '',
      enAddress: data?.['EN Address'] || '',
      arAddress: data?.['AR Address'] || '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Location information saved successfully!', {
      description: 'The location details have been updated.',
    });
    onClose()
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Provider Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="Government"
              {...register('government')}
              error={errors.government?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="City"
              {...register('city')}
              error={errors.city?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="EN Area"
              {...register('enArea')}
              error={errors.enArea?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="AR Area"
              {...register('arArea')}
              error={errors.arArea?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex items-start flex-wrap md:flex-nowrap gap-6">
            <Input
              label="EN Address"
              {...register('enAddress')}
              error={errors.enAddress?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="AR Address"
              {...register('arAddress')}
              error={errors.arAddress?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-end mt-4">
          <FormBtn role={'delete'} type="button" onClick={onClose}>
            cancel
          </FormBtn>
          <FormBtn role={'save'} type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewLocationForm;
