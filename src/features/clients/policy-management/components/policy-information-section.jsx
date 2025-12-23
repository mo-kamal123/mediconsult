import { useFormContext } from 'react-hook-form';
import Input from '../../../../shared/UI/input';
import RHFDropDown from '../../../../shared/UI/RHF-dropdown';
import DropDown from '../../../../shared/UI/drop-down';
import TableBtn from '../../../../shared/UI/table-Btn';

const PolicyInformationSection = ({
  policyInfo,
  onPolicyInfoChange,
  policyTypeOptions,
  carrierCompanyOptions,
  clientOptions,
  showPolicyId = false,
  showTotalAmount = false,
  showWarningOnPercent = false,
  onSave,
}) => {
  // Check if we're using react-hook-form (FormProvider context)
  let formContext = null;
  let isUsingRHF = false;

  try {
    formContext = useFormContext();
    isUsingRHF = !!formContext;
  } catch (e) {
    // Not using react-hook-form
    isUsingRHF = false;
  }

  // If using react-hook-form, use RHF components
  if (isUsingRHF && formContext) {
    const {
      register,
      formState: { errors },
    } = formContext;

    return (
      <>
        <h3 className="font-semibold text-lg text-[#1F4ED6]">
          Policy Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showPolicyId && (
            <Input
              type="text"
              name="policyId"
              label="Policy ID"
              {...register('policyId')}
              error={errors.policyId?.message}
            />
          )}
          <RHFDropDown
            name="policyTypeId"
            label="Policy Type"
            data={policyTypeOptions}
            placeholder="Select Policy Type"
          />
          <RHFDropDown
            name="carrierCompanyId"
            label="Carrier Company"
            data={carrierCompanyOptions}
            placeholder="Select Carrier Company"
          />
          <Input
            type="date"
            name="startDate"
            label="Start Date"
            {...register('startDate')}
            error={errors.startDate?.message}
          />
          <Input
            type="date"
            name="expireDate"
            label="Expire Date"
            {...register('expireDate')}
            error={errors.expireDate?.message}
          />
          <RHFDropDown
            name="clientId"
            label="Client"
            data={clientOptions}
            placeholder="Select Client"
          />
          {showTotalAmount && (
            <Input
              type="text"
              name="totalAmount"
              label="Total Amount"
              {...register('totalAmount')}
              error={errors.totalAmount?.message}
            />
          )}
          {showWarningOnPercent && (
            <Input
              type="text"
              name="warningOnPercent"
              label="Warning On %"
              {...register('warningOnPercent')}
              error={errors.warningOnPercent?.message}
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('membersAddedAfter6Month')}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 font-bold">
              Members Added After 6 Month Get Only 50% From All Benefits
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('calculateUpperLimit')}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 font-bold">
              Calculate upper limit per day
            </span>
          </label>
        </div>
      </>
    );
  }

  // Fallback to original implementation if not using react-hook-form
  return (
    <>
      <h3 className="font-semibold text-lg text-[#1F4ED6]">
        Policy Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showPolicyId && (
          <Input
            type="text"
            name="policyId"
            label="Policy ID"
            value={policyInfo?.policyId || ''}
            onChange={onPolicyInfoChange}
          />
        )}
        <DropDown
          label="Policy Type"
          data={policyTypeOptions}
          value={policyInfo?.policyTypeId || policyInfo?.policyType}
          onValueChange={(value) =>
            onPolicyInfoChange({
              target: { name: 'policyTypeId', value, type: 'text' },
            })
          }
          placeholder="Select Policy Type"
        />
        <DropDown
          label="Carrier Company"
          data={carrierCompanyOptions}
          value={policyInfo?.carrierCompanyId || policyInfo?.carrierCompany}
          onValueChange={(value) =>
            onPolicyInfoChange({
              target: { name: 'carrierCompanyId', value, type: 'text' },
            })
          }
          placeholder="Select Carrier Company"
        />
        <Input
          type="date"
          name="startDate"
          label="Start Date"
          value={policyInfo?.startDate || ''}
          onChange={onPolicyInfoChange}
        />
        <Input
          type="date"
          name="expireDate"
          label="Expire Date"
          value={policyInfo?.expireDate || ''}
          onChange={onPolicyInfoChange}
        />
        <DropDown
          label="Client"
          data={clientOptions}
          value={policyInfo?.clientId || policyInfo?.client}
          onValueChange={(value) =>
            onPolicyInfoChange({
              target: { name: 'clientId', value, type: 'text' },
            })
          }
          placeholder="Select Client"
        />
        {showTotalAmount && (
          <Input
            type="text"
            name="totalAmount"
            label="Total Amount"
            value={policyInfo?.totalAmount || ''}
            onChange={onPolicyInfoChange}
          />
        )}
        {showWarningOnPercent && (
          <Input
            type="text"
            name="warningOnPercent"
            label="Warning On %"
            value={policyInfo?.warningOnPercent || ''}
            onChange={onPolicyInfoChange}
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="membersAddedAfter6Month"
            checked={policyInfo?.membersAddedAfter6Month || false}
            onChange={onPolicyInfoChange}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-700 font-bold">
            Members Added After 6 Month Get Only 50% From All Benefits
          </span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="calculateUpperLimit"
            checked={policyInfo?.calculateUpperLimit || false}
            onChange={onPolicyInfoChange}
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
