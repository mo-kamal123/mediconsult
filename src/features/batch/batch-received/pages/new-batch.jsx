import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import { FaImage } from 'react-icons/fa';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { validateNewBatch } from '../validation/batch-validation';
import MainHeader from '../../../../shared/UI/main-header';
import FormBtn from '../../../../shared/UI/form-Btn';

const NewBatch = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(validateNewBatch),
    defaultValues: {
      provider: '',
      batchDueDays: '',
      batchStatus: '',
      receiveDate: '',
      batchDueDate: '',
      claimsCount: '',
      totalAmount: '',
      receivingWay: '',
      uploadOnPortal: '',
      reason: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Submitted Batch Data:', data);
    navigate(-1);
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-svh w-[95%] m-auto flex flex-col gap-10">
        <MainHeader>New Batch</MainHeader>

        {/* Form */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col  gap-4 justify-between ">
            <div className="flex gap-4 flex-1 min-w-[180px]">
              <Input
                label="Provider"
                {...register('provider')}
                error={errors.provider?.message}
                className="flex-1 min-w-[700px]"
              />
              <Input
                label="Batch Due Date"
                type="date"
                {...register('batchDueDate')}
                error={errors.batchDueDate?.message}
                className="flex-1 min-w-[100px]"
              />
            </div>
            <div className="flex gap-4 flex-1 min-w-[180px]">
              <RHFDropDown
                label="Batch Status"
                name="batchStatus"
                data={[
                  { value: 'pending', label: 'Pending' },
                  { value: 'processing', label: 'Processing' },
                  { value: 'completed', label: 'Completed' },
                ]}
                placeholder="Select Batch Status"
                className="flex-1 p-6 mt-1 min-w-[200px]"
              />
              <Input
                label="Receive Date"
                type="date"
                {...register('receiveDate')}
                error={errors.receiveDate?.message}
                className="flex-1 min-w-[200px]"
              />
              <Input
                label="Batch Due Date"
                type="date"
                {...register('batchDueDate')}
                error={errors.batchDueDate?.message}
                className="flex-1 min-w-[200px]"
              />
            </div>
            <div className="flex gap-4 flex-1 min-w-[180px]">
              <Input
                label="Claims Count"
                type="number"
                {...register('claimsCount')}
                error={errors.claimsCount?.message}
                className="flex-1 min-w-[200px]"
              />
              <Input
                label="Total Amount"
                type="number"
                step="0.01"
                {...register('totalAmount')}
                error={errors.totalAmount?.message}
                className="flex-1 min-w-[200px]"
              />
              <RHFDropDown
                label="Receiving Way"
                name="receivingWay"
                data={[
                  { value: 'email', label: 'Email' },
                  { value: 'portal', label: 'Portal' },
                  { value: 'manual', label: 'Manual' },
                ]}
                placeholder="Select Receiving Way"
                className="flex-1 p-6 mt-1 min-w-[200px]"
              />
            </div>
            <div className="flex items-start gap-4 flex-1 min-w-[180px]">
              <Input
                label="Upload on Portal"
                type="date"
                {...register('uploadOnPortal')}
                error={errors.uploadOnPortal?.message}
                className="flex-1 min-w-[100px]"
              />

              <Input
                label="Reason"
                {...register('reason')}
                error={errors.reason?.message}
                className="flex-1 min-w-[700px]"
                placeholder="Optional"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <FormBtn role={'delete'} type="button" onClick={() => navigate(-1)}>
              Cancel
            </FormBtn>
            <FormBtn role={'save'} type="submit">
              Save Batch
            </FormBtn>
          </div>
        </Form>
      </div>
    </FormProvider>
  );
};

export default NewBatch;
