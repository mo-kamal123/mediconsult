import logo from '../../../app/assets/mediconsult_logo.png';
import AuthForm from '../components/auth-form';
import Input from '../../../shared/UI/input';
import Btn from '../../../shared/UI/Btn';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgetPasswordSchema } from '../validation/auth-validation';

const ForgetPassword = () => {
  const navigate = useNavigate();

  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      phone: '',
    },
  }); // phone number to send OTP

  // handle form submit
  const onSubmit = (data) => {
    console.log('Form data:', data);
    navigate('/auth/verify');
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
        <Btn>Submit</Btn>
      </AuthForm>
    </div>
  );
};

export default ForgetPassword;
