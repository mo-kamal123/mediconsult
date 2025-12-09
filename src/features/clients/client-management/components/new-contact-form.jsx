import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import { zodResolver } from '@hookform/resolvers/zod';
import { newContactSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';

const NewContactForm = ({ onClose, onSave, title, data }) => {
  const methods = useForm({
    resolver: zodResolver(newContactSchema),
    defaultValues: {
      Name: data?.Name || '',
      JobTitle: data?.JobTitle || '',
      Email: data?.Email || '',
      Mobile: data?.Mobile || '',
      Address: data?.Address || '',
      Note: data?.Note || '',
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  /** 🔄 If data changes (edit mode), update form fields */
  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    }
  }, [data, setValue]);

  const onSubmit = (formData) => {
    console.log('✅ Contact Form Submitted:', formData);
    onSave?.(formData);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">{title}</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Name"
              {...register('Name')}
              error={errors.Name?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Job Title"
              {...register('JobTitle')}
              error={errors.JobTitle?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Email"
              type="email"
              {...register('Email')}
              error={errors.Email?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Mobile"
              {...register('Mobile')}
              error={errors.Mobile?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Address"
              {...register('Address')}
              error={errors.Address?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Note"
              {...register('Note')}
              error={errors.Note?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <FormBtn
            type="button"
            role={'delete'}
            onClick={() => {
              methods.reset();
              onClose();
            }}
          >
            Cancel
          </FormBtn>

          <FormBtn role={'save'} type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewContactForm;
