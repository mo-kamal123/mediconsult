import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import { zodResolver } from '@hookform/resolvers/zod';
import { newContractSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { useEffect } from 'react';
import useClientDropDowns from '../hooks/useClientDropDowns';

const NewContractForm = ({ onClose, onSave, title, data }) => {
  const { insuranceCompanies } = useClientDropDowns();
  const methods = useForm({
    resolver: zodResolver(newContractSchema),
    defaultValues: {
      StartDate: data?.StartDate || '',
      ExpireDate: data?.ExpireDate || '',
      TotalAmount: data?.TotalAmount || '',
      TotalMembers: data?.TotalMembers || '',
      InsuranceCompanyId: data?.InsuranceCompanyId || '',
    },
  });

  // Update form when data changes (edit mode)
  useEffect(() => {
    if (data) {
      methods.reset({
        StartDate: data.StartDate || '',
        ExpireDate: data.ExpireDate || '',
        TotalAmount: data.TotalAmount || '',
        TotalMembers: data.TotalMembers || '',
        InsuranceCompanyId: data.InsuranceCompanyId || '',
      });
    }
  }, [data, methods]);

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
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            {title || 'New Contract'}
          </h3>

          {/* Dates */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Start Date"
              type="date"
              {...register('StartDate')}
              error={errors.StartDate?.message}
              className="flex-1 min-w-[200px]"
            />

            <Input
              label="Expire Date"
              type="date"
              {...register('ExpireDate')}
              error={errors.ExpireDate?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Amount and Members */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Total Amount"
              {...register('TotalAmount')}
              error={errors.TotalAmount?.message}
              className="flex-1 min-w-[200px]"
            />

            <Input
              label="Total Members"
              {...register('TotalMembers')}
              error={errors.TotalMembers?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Insurance Company */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            {/* <Input
              label="Insurance Company ID"
              {...register('InsuranceCompanyId')}
              error={errors.InsuranceCompanyId?.message}
              className="flex-1 min-w-[200px]"
            /> */}
            <RHFDropDown
              label="Insurance Company ID"
              name="InsuranceCompanyId"
              data={insuranceCompanies}
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
            Cancel
          </FormBtn>

          <FormBtn role="save" type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default NewContractForm;
