import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import { zodResolver } from '@hookform/resolvers/zod';
import { newContractSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';

const NewContractForm = ({ onClose, onSave }) => {
  const methods = useForm({
    resolver: zodResolver(newContractSchema),
    defaultValues: {
      startDate: '',
      expireDate: '',
      totalAmount: '',
      totalMembers: '',
      insuranceCompanyId: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Contract Form Submitted:', data);
    if (onSave) {
      onSave(data);
    }
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">New Contract</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Start Date"
              type="date"
              {...register('startDate')}
              error={errors.startDate?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Expire Date"
              type="date"
              {...register('expireDate')}
              error={errors.expireDate?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Total Amount"
              {...register('totalAmount')}
              error={errors.totalAmount?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Total Members"
              {...register('totalMembers')}
              error={errors.totalMembers?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Insurance Company"
              {...register('insuranceCompanyId')}
              error={errors.insuranceCompany?.message}
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

export default NewContractForm;

