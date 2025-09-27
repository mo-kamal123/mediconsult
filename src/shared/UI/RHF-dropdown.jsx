import { Controller, useFormContext } from 'react-hook-form';
import DropDown from './drop-down';

const RHFDropDown = ({
  name,
  label,
  data,
  placeholder = 'Select...',
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
            onValueChange={field.onChange}
            className={className}
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
