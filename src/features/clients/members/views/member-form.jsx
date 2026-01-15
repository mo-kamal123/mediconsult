import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import { memberInfoSchema } from '../validation/member-vaildation';
import FormBtn from '../../../../shared/UI/form-Btn';
import { useEffect, useState } from 'react';
import useMemberDropDowns from '../hooks/useMemberDropDowns';
import useBranchesDropDown from '../hooks/useBranchesDropDown';
import useProgramsDropDown from '../hooks/useProgramsDropDown';
import { useTransformMemberData } from '../hooks/useTransformMemberData';

const MemberForm = ({ member, memberSubmit }) => {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [clientId, setClientId] = useState(member?.ClientId || '');
  const [branchId, setBranchId] = useState(member?.BranchId || '');
  const { transformData } = useTransformMemberData();
  // TODO: handle default values shows
  const methods = useForm({
    resolver: zodResolver(memberInfoSchema),
    defaultValues: {
      memberName: member?.name || '',
      clientName: '',
      mobile: member?.mobile || '',
      branchName: '',
      programName: '',
      gender: 'male',
      vipStatus: '',
      jobTitle: '',
      birthday: '',
      nationalId: member?.nationalId || '',
      companyCode: '',
      level: '',
      hofId: '',
      activatedDate: '',
      notes: '',
      privateNotes: '',
      memberImage: null,
    },
  });
  console.log(member);
  console.log(clientId);
  console.log(branchId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  // Load member data into form
  useEffect(() => {
    if (member) {
      reset({
        memberName: member.Name || '',
        clientName: member.Client || '',
        mobile: member.MobileNumber || '',
        branchName: member.Branch || '',
        programName: member.Program || '',
        gender: member.IsMale,
        vipStatus: member.VipStatus || '',
        jobTitle: member.JobTitle || '',
        birthday: member.BirthDate || '',
        nationalId: member.NationalId || '',
        companyCode: member.CompanyCode || '',
        level: member.Level || '',
        hofId: member.HofId || '',
        activatedDate: member.ActivatedDate || '',
        notes: member.Notes || '',
        privateNotes: member.PrivateNotes || '',
        memberImage: null, // files can't be auto-filled
      });
    }
  }, [member, reset]);
  const onSubmit = (data) => {
    const transformedData = transformData(data);
    console.log(transformedData);
    memberSubmit(transformedData);
    console.log('✅ Member Info Submitted:', data);
  };
  const { clients, status, levels, vipStatuses } = useMemberDropDowns();
  const { data: branches } = useBranchesDropDown(clientId);
  const { data: programs } = useProgramsDropDown(branchId);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Member Image */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">
            Member Information
          </h3>
          <h3 className="font-semibold  ">Member Image</h3>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                id="fileInput"
                accept="image/png, image/jpeg"
                className="absolute inset-0 opacity-0 cursor-pointer"
                {...register('memberImage', {
                  onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setSelectedFile(file);
                      setPreview(URL.createObjectURL(file));
                    } else {
                      setSelectedFile(null);
                      setPreview(null);
                    }
                  },
                })}
              />
              {preview || member?.ImageUrl ? (
                <img
                  src={preview || member.ImageUrl}
                  alt="Member"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaImage className="text-4xl text-gray-400" />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <FormBtn
                role={'upload'}
                type="button"
                className="flex items-center gap-2 w-fit"
                onClick={() => document.getElementById('fileInput').click()}
              >
                <FiUpload />
                Upload
              </FormBtn>
              <p className="text-sm text-[#8B8B9B] max-w-sm">
                Please upload a JPG or PNG file with a minimum dimension of
                200x200, not exceeding 3MB.
              </p>
            </div>
          </div>
          {errors.memberImage && (
            <p className="text-red-500">{errors.memberImage.message}</p>
          )}
        </div>

        {/* Member Details */}
        <div className="flex flex-col gap-6 mt-6">
          {/* Row 1 */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Member Name"
              {...register('memberName')}
              error={errors.memberName?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Client Name"
              name="clientName"
              data={clients}
              setValue={(id) => setClientId(id)}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Mobile"
              {...register('mobile')}
              error={errors.mobile?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Branch Name"
              name="branchName"
              data={branches || ['Choose Client First']}
              setValue={(id) => setBranchId(id)}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Program Name"
              name="programName"
              data={programs || ['Choose Branch Frist']}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
          </div>

          {/* Row 3 */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Gender"
              name="gender"
              data={[
                { value: true, label: 'Male' },
                { value: false, label: 'Female' },
              ]}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <RHFDropDown
              label="VIP Status"
              name="vipStatus"
              data={vipStatuses}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="Job Title"
              {...register('jobTitle')}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Row 4 */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Birthday"
              type="date"
              {...register('birthday')}
              error={errors.birthday?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="National ID"
              {...register('nationalId')}
              error={errors.nationalId?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Company Code"
              {...register('companyCode')}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Row 5 */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Level"
              name="level"
              data={levels}
              className="flex-1 p-6 mt-1 min-w-[200px]"
            />
            <Input
              label="HOF ID"
              {...register('hofId')}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Activated Date"
              type="date"
              {...register('activatedDate')}
              error={errors.activatedDate?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-4">
            <Input
              label="Notes"
              type="textarea"
              {...register('notes')}
              className="min-w-full"
            />
            <Input
              label="Private Notes"
              type="textarea"
              {...register('privateNotes')}
              className="min-w-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-end mt-6">
          <FormBtn
            role={'delete'}
            type="button"
            onClick={() => methods.reset()}
          >
            Delete
          </FormBtn>
          <FormBtn role={'save'} type="submit">
            Save
          </FormBtn>
        </div>
      </Form>
    </FormProvider>
  );
};

export default MemberForm;
