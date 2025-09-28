import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import { newClientSchema } from '../validation/client-validation';
import Form from '../../../../shared/UI/from';

const NewClient = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(newClientSchema),
    defaultValues: {
      client: '',
      clientType: '',
      clientCategory: '',
      refundDueDays: '',
      logo: null,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Submitted Data:', data);
    navigate(-1);
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-svh w-full flex items-center justify-center -mt-10">
        <div className="bg-white border border-borders p-8 rounded-2xl shadow-sm w-[95%] m-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-[#1F4ED6] font-semibold">New Client</h2>
          </div>

          {/* Form */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-4 justify-between items-center">
              {/* File Upload */}
              <div className="flex-col relative w-[150px] h-[200px] border border-dashed border-gray-400 rounded flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  {...register('logo')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <FaImage className="text-4xl text-gray-400" />
                {errors.logo && (
                  <p className="text-red-500 text-sm">{errors.logo.message}</p>
                )}
              </div>

              {/* Form Column 1 */}
              <div className="flex flex-col gap-4 flex-1 min-w-[180px]">
                <Input
                  label="Client"
                  {...register('client')}
                  error={errors.client?.message}
                  className="flex-1 min-w-[200px]"
                />
                <RHFDropDown
                  label="Client Type"
                  name="clientType"
                  data={[
                    { value: 'corp', label: 'Corp' },
                    { value: 'ind', label: 'Ind' },
                  ]}
                  placeholder="Select Client Type"
                  className="flex-1 p-6 mt-1 min-w-[200px]"
                />
              </div>

              {/* Form Column 2 */}
              <div className="flex flex-col gap-4 flex-1 min-w-[180px]">
                <RHFDropDown
                  label="Client Category"
                  name="clientCategory"
                  data={[
                    { value: 'corp', label: 'Corp' },
                    { value: 'ind', label: 'Ind' },
                  ]}
                  placeholder="Select Client Category"
                  className="flex-1 p-6 mt-1 min-w-[200px]"
                />
                <Input
                  label="Refund Due Days"
                  {...register('refundDueDays')}
                  error={errors.refundDueDays?.message}
                  className="flex-1 min-w-[200px]"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Save
              </button>
            </div>
          </Form>
        </div>
      </div>
    </FormProvider>
  );
};

export default NewClient;
