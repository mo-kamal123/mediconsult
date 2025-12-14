import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import { newMemberSchema } from '../validation/client-validation';
import Input from '../../../../shared/UI/input';
import useDropDowns from '../hooks/useDropDowns';

const NewMemberForm = ({ onClose, onSave, branches }) => {
  const { levels, vipStatuses, status } = useDropDowns();

  const methods = useForm({
    resolver: zodResolver(newMemberSchema),
    defaultValues: {
      Name: '',
      Mobile: '',
      IsMale: true,
      JobTitle: '',
      NationalId: '',
      LevelId: '',
      VipStatusId: '',
      CompanyCode: '',
      BranchName: '',
      HofCode: '',
      StatusId: '',
      Birthday: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Member Form Submitted:', data);
    onSave?.(data);
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
              {...register('Name')}
              error={errors.Name?.message}
            />
            <Input
              label="Birthday"
              type="date"
              {...register('Birthday')}
              error={errors.Birthday?.message}
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Mobile"
              {...register('Mobile')}
              error={errors.Mobile?.message}
            />
            <Input
              label="Job Title"
              {...register('JobTitle')}
              error={errors.JobTitle?.message}
            />
            <Input
              label="National ID"
              {...register('NationalId')}
              error={errors.NationalId?.message}
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown label="Status" name="StatusId" data={status} />
            <RHFDropDown label="Level" name="LevelId" data={levels} />
            <RHFDropDown
              label="VIP Status"
              name="VipStatusId"
              data={vipStatuses}
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Gender"
              name="IsMale"
              data={[
                { Id: true, Name: 'Male' },
                { Id: false, Name: 'Female' },
              ]}
            />

            <RHFDropDown label="Branch" name="BranchName" data={branches} />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Company Code"
              {...register('CompanyCode')}
              error={errors.CompanyCode?.message}
            />
            <Input
              label="HOF Code"
              {...register('HofCode')}
              error={errors.HofCode?.message}
            />
          </div>
        </div>

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

export default NewMemberForm;
