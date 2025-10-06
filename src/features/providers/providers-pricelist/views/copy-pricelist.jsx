import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import Form from '../../../../shared/UI/from';
import Input from '../../../../shared/UI/input';
import { copyPriceListSchema } from '../validation/pricelist-validation';
import { toast } from 'sonner';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import FormBtn from '../../../../shared/UI/Form-Btn';

const CopyPricelist = () => {
  const methods = useForm({
    resolver: zodResolver(copyPriceListSchema),
    defaultValues: {
      selectPriceLists: '',
      newPriceListName: '',
      increasePrices: '',
      copyWithPrice: false,
      copyWithDiscount: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = (data) => {
    console.log('✅ Copy Price List Submitted:', data);
    toast.success('Price list copied successfully!', {
      description: 'The price list has been copied with the specified changes.',
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
    <div className="w-[90%] mx-auto p-9 bg-white border border-borders rounded-2xl">
      <h2 className="text-2xl font-semibold text-[#1F4ED6] mb-6">
        New Price List
      </h2>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Price List Dropdown */}
          <div className="flex  items-center gap-5 ">
            <RHFDropDown
              label="Price List"
              name="newPriceListName"
              data={['hhh', 'rrr']}
              multiple
              placeholder="Select pricelist"
              className="p-6 mt-1 min-w-[200px]"
            />
            {/* New Price List Name */}
            <Input
              label="New Price List Name"
              type="text"
              {...register('newPriceListName')}
              error={errors.newPriceListName?.message}
              placeholder=""
            />
          </div>

          {/* Increase Prices % */}
          <Input
            label="Increase Prices %"
            type="number"
            step="0.01"
            {...register('increasePrices')}
            error={errors.increasePrices?.message}
            placeholder="Enter percentage increase"
          />

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 my-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register('copyWithPrice')}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">
                Copy with price
              </span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register('copyWithDiscount')}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">
                Copy with discount
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end mt-6">
            <FormBtn type="button" onClick={handleCancel} role={'delete'}>
              Cancel
            </FormBtn>
            <FormBtn type="submit" role={'save'}>
              Create Price List
            </FormBtn>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default CopyPricelist;
