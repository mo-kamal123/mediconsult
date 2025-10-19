import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '../validation/auth-validation';
import { useSearchParams } from 'react-router-dom';
import useResetPassword from '../hooks/useResetPassword';

const ResetPassword = () => {
  const [searchParams] = useSearchParams(); // get query params
  const phone = searchParams.get('phone'); // get phone number from query params
  const { mutate: resetPassword, isPending } = useResetPassword(); // reset password mutation hook
  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  // handle form submit
  const onSubmit = (data) => {
    //TODO: remove logs
    console.log('Reset Password data:', { ...data, phoneNumber: phone });
    resetPassword({ ...data, phoneNumber: phone }); // call reset password mutation
  };

  return (
    <div className="flex flex-col items-center justify-between gap-20">
      <img src={logo} alt="logo-img" className="w-80" />
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        type={'Reset Password'}
        description={'Enter your new password.'}
      >
        <Input
          type="password"
          label="Password"
          {...register('newPassword')}
          error={errors.newPassword?.message}
        />
        <Input
          type="password"
          label="Password Confirmation"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
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

export default ResetPassword;
