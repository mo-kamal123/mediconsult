import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { newMemberSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';

const NewMemberForm = ({ onClose, onSave }) => {
  const methods = useForm({
    resolver: zodResolver(newMemberSchema),
    defaultValues: {
      name: '',
      birthday: '',
      age: '',
      client: '',
      branch: '',
      program: '',
      status: '',
      mobile: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Member Form Submitted:', data);
    if (onSave) {
      onSave(data);
    }
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">New Member</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Name"
              {...register('name')}
              error={errors.name?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Birthday"
              type="date"
              {...register('birthday')}
              error={errors.birthday?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Age"
              {...register('age')}
              error={errors.age?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Client"
              {...register('client')}
              error={errors.client?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Branch"
              {...register('branch')}
              error={errors.branch?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Program"
              {...register('program')}
              error={errors.program?.message}
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
              label="Mobile"
              {...register('mobile')}
              error={errors.mobile?.message}
              className="flex-1 min-w-[200px]"
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

export default NewMemberForm;

