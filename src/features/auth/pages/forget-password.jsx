import { useState } from 'react';
import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgetPasswordSchema } from '../validation/auth-validation';
import useSentOtp from '../hooks/useSentOtp';

const ForgetPassword = () => {
  const [phone, setPhone] = useState(''); // 💡 store phone number in state

  const { mutate: sendOtp, isPending } = useSentOtp(phone); // ✅ use phone state here

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data.phone);
    setPhone(data.phone);
    sendOtp(data.phone);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        type={'Forget Password'}
        description={'Enter your phone to send OTP.'}
      >
        <Input
          type={'text'}
          label={'Phone'}
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Btn
          disabled={isPending}
          className={`flex items-center justify-center gap-2 w-full px-7 py-3 
    ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1F4ED6] hover:bg-blue-800'}`}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </Btn>{' '}
      </AuthForm>
    </div>
  );
};

export default ForgetPassword;
