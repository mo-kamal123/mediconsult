import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const OTPInput = ({ ...props }) => {
  const maxLength = 6;
  return (
    <InputOTP maxLength={maxLength} {...props}>
      {Array.from({ length: maxLength }).map((_, index) => (
        <InputOTPGroup
          key={index}
          className={'flex items-center justify-between w-full'}
        >
          <InputOTPSlot
            index={index}
            className="border-blue-500 focus:border-green-500 rounded-lg md:w-14 md:h-14 text-2xl text-center"
          />
        </InputOTPGroup>
      ))}
    </InputOTP>
  );
};

export default OTPInput;
