import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { newPriceListSchema } from '../validation/pricelist-validation';
import { toast } from 'sonner';
import FormBtn from '../../../../shared/UI/form-Btn';

const NewPricelist = () => {
  const methods = useForm({
    resolver: zodResolver(newPriceListSchema),
    defaultValues: {
      priceListName: '',
      note: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Form Submitted:', data);
    toast.success('Price list created successfully!', {
      description: 'The new price list has been added.',
    });
    reset();
  };

  const handleCancel = () => {
    reset();
    toast.info('Form cleared', {
      description: 'All fields have been reset.',
    });
  };

  return (
    <div className=" w-[90%] mx-auto p-9 bg-white border border-borders rounded-2xl ">
      <h2 className="text-2xl font-semibold text-[#1F4ED6] mb-6">
        Create New Price List
      </h2>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Price List Name */}
          <Input
            label="Price List Name"
            {...register('priceListName')}
            error={errors.priceListName?.message}
            placeholder="Enter price list name"
          />

          {/* Note */}
          <Input
            label="Note"
            {...register('note')}
            error={errors.note?.message}
            placeholder="Add any additional notes (optional)"
          />

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <FormBtn type="button" onClick={handleCancel} role={'delete'}>
              Cancel
            </FormBtn>
            <FormBtn type="submit" role={'save'}>
              Save
            </FormBtn>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default NewPricelist;
