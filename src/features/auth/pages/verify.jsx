import { useState, useEffect } from 'react';
import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Btn from '../../../shared/UI/Btn';
import OTPInput from '../../../shared/UI/OTP-input';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema } from '../validation/auth-validation';
import useVerify from '../hooks/useVerify';
import useSentOtp from '../hooks/useSentOtp';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get('phone');

  const { mutate: verify, isPending: isVerifying } = useVerify(phone);
  const { mutate: resendOtp, isPending: isResending } = useSentOtp(phone);

  const [timer, setTimer] = useState(5); // countdown in seconds
  const [canResend, setCanResend] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  const onSubmit = (data) => {
    verify({ otp: data.otp, phoneNumber: phone });
  };

  // Resend OTP handler
  const handleResend = () => {
    resendOtp(phone);
    setTimer(45); // reset timer
    setCanResend(false);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img src={logo} alt="logo-img" className="w-80" />

      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        type="OTP"
        description="We sent OTP to your phone number. Check your SMS."
      >
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
          disabled={isVerifying}
          className={`flex items-center justify-center gap-2 w-full px-7 py-3 
            ${isVerifying ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1F4ED6] hover:bg-blue-800'}`}
        >
          {isVerifying ? 'Verifying...' : 'Submit'}
        </Btn>

        {/* Resend OTP */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            disabled={!canResend || isResending}
            onClick={handleResend}
            className={`text-sm font-medium ${
              canResend ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            {canResend ? 'Resend OTP' : `Resend OTP in ${timer}s`}
          </button>
        </div>
      </AuthForm>
    </div>
  );
};

export default Verify;
