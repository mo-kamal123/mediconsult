import { Controller, useFormContext } from 'react-hook-form';
import DropDown from './drop-down';

const RHFDropDown = ({
  name,
  label,
  data,
  placeholder = 'Select...',
  setValue,
  type,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // FormProvider

  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DropDown
            data={data}
            label={label}
            placeholder={placeholder}
            type={type}
            value={field.value}
            onValueChange={(val) => {
              field.onChange(val); // update RHF form value
              setValue?.(val); // update local state (clientId / branchId)
            }}
            className={`${className} ${errors[name] ? 'border-red-500' : ''}`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default RHFDropDown;
