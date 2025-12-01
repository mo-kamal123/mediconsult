import { FormProvider } from 'react-hook-form';
import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import Input from '@/shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import { useState } from 'react';

const ClientForm = ({ methods, client, submitFunc, type='update' }) => {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // ✅ Handle submit
  const onSubmit = (data) => {
    //TODO: remove logs
    console.log('✅ Form Submitted:', data);
    submitFunc(data); // call update client mutation
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Logo</h3>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative  w-[170px] h-[230px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                id="fileInput"
                accept="image/png, image/jpeg"
                {...register('imgeUrl')}
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file)); // show preview
                  }
                }}
              />

              {/* If preview exists → show the uploaded image */}
              {preview ? (
                <img
                src={preview || client.ImageUrl}
                {...register('imgeUrl')}
                  alt="Uploaded"
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
          {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
        </div>

        {/* Client Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Client Info</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="English Client Name"
              {...register('englishClientName')}
              error={errors.englishClientName?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Arabic Client Name"
              {...register('arabicClientName')}
              error={errors.arabicClientName?.message}
              className="flex-1 min-w-[200px]"
            />
            <RHFDropDown
              label="Client Category"
              name="clientCategory"
              value={client?.CategoryName}
              data={[
                { value: 'Tourism', label: 'Tourism' },
              ]}
              placeholder="Select Category"
              className="flex-1 p-6 mt-2 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Client Type"
              name='clientType'
              placeholder="Select Client Type"
              className="flex-1 p-6 mt-2 min-w-[200px]"
              data={[
                { value: 'Corporate', label: 'Corporate' },
              ]}
            />
            <RHFDropDown
              label="Status"
              name="status"
              data={[
                { value: 'Activated', label: 'Activated' },
              ]}
              placeholder="Select Status"
              className="flex-1 p-6 mt-2 min-w-[200px]"
            />

          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
          <Input
              label="Reimbursement Due Days"
              {...register('reimbursementDueDays')}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Client Short Name"
              {...register('clientShortName')}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Policy Info */}
        {type === 'update' && (
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-[#1F4ED6]">Policy Info</h3>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Policy Start"
              type="date"
              {...register('policyStart')}
              error={errors.policyStart?.message}
              className="flex-1 min-w-[200px]"
            />
            <Input
              label="Policy Expire"
              type="date"
              {...register('policyExpire')}
              error={errors.policyExpire?.message}
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>
        )}
        {/* Buttons */}
        {type === 'create' ? (
          <div className="flex gap-4 justify-end">
            <FormBtn role={'save'} type="submit">
              Next
            </FormBtn>
          </div>
        ) : (
          <div className="flex gap-4 justify-end">
            <FormBtn type="button" role={'delete'} onClick={() => {}}>
              Delete
            </FormBtn>
            <FormBtn role={'save'} type="submit">
              Save
            </FormBtn>
          </div>
        )}
      </Form>
    </FormProvider>
  );
};

export default ClientForm;
