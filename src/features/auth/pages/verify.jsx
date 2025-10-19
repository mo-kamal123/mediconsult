import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Btn from '../../../shared/UI/Btn';
import OTPInput from '../../../shared/UI/OTP-input';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema } from '../validation/auth-validation';
import useVerify from '../hooks/useVerify';

const Verify = () => {
  const [searchParams] = useSearchParams(); // get query params
  const phone = searchParams.get('phone'); // get phone number from query params
  const { mutate: verify, isPending } = useVerify(phone); // verify OTP mutation hook
  // react hook form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  // ✅ Handle submit
  const onSubmit = (data) => {
    //TODO: remove logs
    console.log('OTP Data:', data.otp);
    console.log(phone);
    verify({ otp: data.otp, phoneNumber: phone }); // call verify OTP mutation
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
          name="otp"
          control={control}
          render={({ field }) => (
            <div className="w-full flex flex-col gap-1">
              <OTPInput {...field} />
              {errors.otp && (
                <p className="text-red-500 text-sm">{errors.otp.message}</p>
              )}
            </div>
          )}
        />
        <Btn
          disabled={isPending}
          className={`flex items-center justify-center gap-2 w-full px-7 py-3 
    ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1F4ED6] hover:bg-blue-800'}`}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </Btn>
      </AuthForm>
    </div>
  );
};

export default Verify;
