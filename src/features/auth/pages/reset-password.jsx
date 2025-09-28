import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../store/auth-slice';
import { resetPasswordSchema } from '../validation/auth-validation';

const ResetPassword = () => {
  const dispatch = useDispatch();

  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Reset Password data:', data);
    dispatch(login()); // you can replace this with resetPassword API call
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
          {...register('password')}
          error={errors.password?.message}
        />
        <Input
          type="password"
          label="Password Confirmation"
          {...register('passwordConfirmation')}
          error={errors.passwordConfirmation?.message}
        />
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default ResetPassword;
