import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DropDown from '../../../../shared/UI/drop-down';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { toast } from 'sonner';
import { useState } from 'react';
import { newApprovalSchema } from '../validation/approval-validation';
import FormBtn from '../../../../shared/UI/Form-Btn';

const NewApprovalForm = () => {
  const [diagnosis, setDiagnosis] = useState([
    'Flatulence',
    'Paratyphoid fever A | A01.1',
  ]);

  const methods = useForm({
    resolver: zodResolver(newApprovalSchema),
    defaultValues: {
      memberId: '',
      providerName: '',
      providerBranch: '',
      receiveTime: '',
      date: '',
      claimFormNo: '',
      additionalPool: '',
      chronicForDate: '',
      diagnosis: diagnosis,
      contact: '',
      comment: '',
      maxAllowed: '',
      note: '',
      debit: false,
      repeated: false,
      delivery: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Approval information saved successfully!', {
      description: 'The approval details have been updated.',
    });
  };

  const handleCancel = () => {
    methods.reset();
    toast.info('Form has been reset', {
      description: 'All fields have been cleared.',
    });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Approval Information */}
        <div className="">
          <h2 className="font-semibold text-[#1F4ED6] text-lg mb-6">
            Approval Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Member Card No/National Id"
              {...register('memberId')}
              error={errors.memberId?.message}
            />
            <RHFDropDown
              label="Provider Name"
              name="providerName"
              data={[]}
              placeholder="Select Provider Name"
              className="p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Provider Branch"
              name="providerBranch"
              data={[]}
              placeholder="Select Provider Branch"
              className="p-6 mt-1 min-w-[200px]"
            />

            <Input
              label="Receive Time"
              {...register('receiveTime')}
              error={errors.receiveTime?.message}
              type="time"
            />
            <Input
              label="Date"
              {...register('date')}
              error={errors.date?.message}
              type="date"
            />
            <Input
              label="Claim Form No"
              {...register('claimFormNo')}
              error={errors.claimFormNo?.message}
            />

            <Input
              label="Additional Pool"
              {...register('additionalPool')}
              error={errors.additionalPool?.message}
            />
            <Input
              label="Chronic For Date"
              {...register('chronicForDate')}
              error={errors.chronicForDate?.message}
              type="date"
            />
            <RHFDropDown
              label="Diagnosis"
              name="diagnosis"
              data={[]}
              multiple
              selected={diagnosis}
              placeholder="Select Diagnosis"
              className="p-6 mt-1 min-w-[200px]"
            />

            <Input
              label="Email / Phone Number"
              {...register('contact')}
              error={errors.contact?.message}
            />
            <Input
              label="Comment"
              {...register('comment')}
              error={errors.comment?.message}
              placeholder="Without a prescription"
            />
            <Input
              label="Max Allowed Amount"
              {...register('maxAllowed')}
              error={errors.maxAllowed?.message}
            />

            <div className="col-span-full">
              <Input
                label="Internal Note"
                {...register('note')}
                error={errors.note?.message}
              />
            </div>

            <div className="col-span-full flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register('debit')} />
                Debit
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register('repeated')} />
                Repeated
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register('delivery')} />
                Delivery
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-4">
            <FormBtn role={'delete'} type="button" onClick={handleCancel}>
              Cancel
            </FormBtn>
            <FormBtn role={'save'} type="submit">
              Save
            </FormBtn>
          </div>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewApprovalForm;
