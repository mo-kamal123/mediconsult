import { FormProvider } from 'react-hook-form';
import { FaImage } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import Input from '@/shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import Form from '../../../../shared/UI/from';
import FormBtn from '../../../../shared/UI/form-Btn';
import { useState } from 'react';
import useClientDropDowns from '../hooks/useClientDropDowns';

const ClientForm = ({
  methods,
  client,
  submitFunc,
  type = 'update',
  onDelete,
}) => {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { categories, status, types, isError, isLoading } =
    useClientDropDowns();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = methods;

  // ✅ Handle submit
  const onSubmit = (data) => {
    // Check if there's a new file to upload
    // Use selectedFile state as fallback if form data doesn't have it
    const fileFromForm = data.imageUrl && data.imageUrl[0];
    const fileToUse = fileFromForm || selectedFile;
    const hasNewFile = !!fileToUse;

    if (type === 'create') {
      // For create mode, always pass data object (form will handle file separately)
      // Extract file if exists - use selectedFile state as fallback
      const fileToStore = fileToUse || null;

      const clientData = {
        arabicClientName: data.arabicClientName || '',
        englishClientName: data.englishClientName || '',
        clientCategory: data.clientCategory || '',
        clientType: data.clientType || '',
        status: data.status || '',
        reimbursementDueDays: data.reimbursementDueDays || null,
        clientShortName: data.clientShortName || '',
        imageUrl: fileToStore, // Store the actual File object
      };

      console.log('📤 Create mode - passing data with file:', fileToStore);
      submitFunc(clientData);
    } else if (hasNewFile) {
      // Update mode with file - use FormData
      const formData = new FormData();

      // Handle image file
      formData.append('ImageFile', data.imageUrl[0]);

      // Transform form data to API format (PascalCase)
      formData.append('ArabicName', data.arabicClientName || '');
      formData.append('EnglishName', data.englishClientName || '');
      formData.append(
        'CategoryId',
        data.clientCategory ? parseInt(data.clientCategory) : ''
      );
      formData.append(
        'TypeId',
        data.clientType ? parseInt(data.clientType) : ''
      );
      formData.append('StatusId', data.status ? parseInt(data.status) : '');
      formData.append('RefundDueDays', data.reimbursementDueDays || null);
      formData.append('ShortName', data.clientShortName || '');

      // Policy dates (only for update)
      formData.append('PolicyStart', data.policyStart || '');
      formData.append('PolicyExpire', data.policyExpire || '');

      // Call submit function with FormData
      submitFunc(formData);
    } else {
      // Update mode without file - send as JSON
      const requestData = {
        ArabicName: data.arabicClientName || '',
        EnglishName: data.englishClientName || '',
        CategoryId: data.clientCategory ? parseInt(data.clientCategory) : null,
        TypeId: data.clientType ? parseInt(data.clientType) : null,
        StatusId: data.status ? parseInt(data.status) : null,
        RefundDueDays: data.reimbursementDueDays || null,
        ShortName: data.clientShortName || '',
      };

      // Preserve existing ImageUrl if no new file is selected
      if (client?.ImageUrl && !selectedFile) {
        requestData.ImageUrl = client.ImageUrl;
      }

      // Policy dates
      requestData.PolicyStart = data.policyStart || '';
      requestData.PolicyExpire = data.policyExpire || '';

      // Call submit function with JSON data
      submitFunc(requestData);
    }
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
                className="absolute inset-0 opacity-0 cursor-pointer"
                {...register('imageUrl', {
                  onChange: (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedFile(file);
                      setPreview(URL.createObjectURL(file)); // show preview
                      console.log(
                        '📸 File selected:',
                        file.name,
                        `(${file.size} bytes)`
                      );
                    } else {
                      setSelectedFile(null);
                      setPreview(null);
                    }
                  },
                })}
              />

              {/* If preview exists → show the uploaded image, otherwise show existing or placeholder */}
              {preview || client?.ImageUrl ? (
                <img
                  src={preview || client?.ImageUrl}
                  alt="Client Logo"
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
          {errors.imageUrl && (
            <p className="text-red-500">{errors.imageUrl.message}</p>
          )}
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
              data={categories}
              placeholder="Select Category"
              className="flex-1 p-6 mt-2 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <RHFDropDown
              label="Client Type"
              name="clientType"
              placeholder="Select Client Type"
              className="flex-1 p-6 mt-2 min-w-[200px]"
              data={types}
            />
            <RHFDropDown
              label="Status"
              name="status"
              data={status}
              placeholder="Select Status"
              className="flex-1 p-6 mt-2 min-w-[200px]"
            />
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Reimbursement Due Days"
              type="number"
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
            <h3 className="font-semibold text-lg text-[#1F4ED6]">
              Policy Info
            </h3>

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
            <FormBtn
              type="button"
              role={'delete'}
              onClick={onDelete || (() => {})}
            >
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
