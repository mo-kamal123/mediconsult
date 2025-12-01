import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { newBranchSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';

const NewBranchForm = ({ onClose, onSave }) => {
  const methods = useForm({
    resolver: zodResolver(newBranchSchema),
    defaultValues: {
      branchInfo: '',
      status: '',
    },
  });

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
        {/* Client Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">New Branch</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Branch Name"
              {...register('branchName')}
              error={errors.branchName?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Status"
              name="status"
              data={[
                { value: 'Activated', label: 'Activated' },
                { value: 'Deactivated', label: 'Deactivated' },
              ]}
              placeholder="Select Status"
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end">
          <FormBtn
            type="button"
            role={'delete'}
            onClick={() => {
              methods.reset();
              onClose();
            }}
          >
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

export default NewBranchForm;
