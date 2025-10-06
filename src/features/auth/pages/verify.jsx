import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Btn from '../../../shared/UI/Btn';
import OTPInput from '../../../shared/UI/OTP-input';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema } from '../validation/auth-validation';

const Verify = () => {
  const navigate = useNavigate();

  // ✅ React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: '' },
  });

  // ✅ Handle submit
  const onSubmit = (data) => {
    console.log('OTP Data:', data);
    navigate('/auth/reset-password');
  };

  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        type={'OTP'}
        description={'we sent OTP to your phone number. Check your SMS.'}
      >
        {/* Controller needed because OTPInput is a custom component */}
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <div className="w-full flex flex-col gap-1">
              <OTPInput {...field} />
              {errors.code && (
                <p className="text-red-500 text-sm">{errors.code.message}</p>
              )}
            </div>
          )}
        />
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default Verify;
