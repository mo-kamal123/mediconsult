import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { newBranchSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import useDropDowns from '../hooks/useDropDowns';
import { useEffect } from 'react';

const NewBranchForm = ({ onClose, onSave, title, data }) => {
  const { status } = useDropDowns();

  const methods = useForm({
    resolver: zodResolver(newBranchSchema),
    defaultValues: {
      BranchName: data?.BranchName || '',
      MemberCount: data?.MemberCount || 0,
      BranchStatusId: data?.BranchStatusId || '',
    },
  });

  // Update form when data changes (edit mode)
  useEffect(() => {
    if (data) {
      methods.reset({
        BranchName: data.BranchName || '',
        MemberCount: data.MemberCount || 0,
        BranchStatusId: data.BranchStatusId || '',
      });
    }
  }, [data, methods]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Branch Form Submitted:', data);
    if (onSave) {
      onSave(data);
    }
    onClose();
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {/* Branch Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            {title || 'New Branch'}
          </h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            {/* Branch Name */}
            <Input
              label="Branch Name"
              {...register('BranchName')}
              error={errors.BranchName?.message}
              className="flex-1 min-w-[200px]"
            />

            {/* Branch Status Name */}
            <RHFDropDown
              label="Branch Status"
              name="BranchStatusId"
              data={status}
              placeholder="Select Status"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          {/* Additional Fields */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            {/* Member Count */}
            <Input
              label="Member Count"
              type="number"
              {...register('MemberCount', { valueAsNumber: true })}
              error={errors.MemberCount?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end">
          <FormBtn
            type="button"
            role="delete"
            onClick={() => {
              methods.reset();
              onClose();
            }}
          >
            cancel
          </FormBtn>

          <FormBtn role="save" type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewBranchForm;
