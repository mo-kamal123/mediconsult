import { useFormContext } from 'react-hook-form';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';

const PolicyInformationSection = ({
  policyTypeOptions,
  carrierCompanyOptions,
  clientOptions,
  showTotalAmount = false,
  showWarningOnPercent = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h3 className="font-semibold text-lg text-[#1F4ED6]">
        Policy Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RHFDropDown
          name="PolicyTypeId"
          label="Policy Type"
          data={policyTypeOptions}
          placeholder="Select Policy Type"
        />

        <RHFDropDown
          name="CarrierCompanyId"
          label="Carrier Company"
          data={carrierCompanyOptions}
          placeholder="Select Carrier Company"
        />

        <Input
          type="date"
          name="StartDate"
          label="Start Date"
          {...register('StartDate')}
          error={errors.StartDate?.message}
        />

        <Input
          type="date"
          name="EndDate"
          label="Expire Date"
          {...register('EndDate')}
          error={errors.EndDate?.message}
        />

        <RHFDropDown
          name="ClientId"
          label="Client"
          data={clientOptions}
          placeholder="Select Client"
        />

        {showTotalAmount && (
          <Input
            type="text"
            name="TotalAmount"
            label="Total Amount"
            {...register('TotalAmount')}
            error={errors.TotalAmount?.message}
          />
        )}

        {showWarningOnPercent && (
          <Input
            type="text"
            name="WarningOnPercentage"
            label="Warning On %"
            {...register('WarningOnPercentage')}
            error={errors.WarningOnPercentage?.message}
          />
        )}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('IsCalculateUpperPeday')}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-700 font-bold">
            Calculate upper limit per day
          </span>
        </label>
      </div>
    </>
  );
};

export default PolicyInformationSection;
